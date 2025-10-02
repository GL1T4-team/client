import { useState } from "react";
import { excelToCsv } from "../lib/excelToCsv";
import type { CsvFile } from "./types";
import type { AxiosError } from "axios";
import { uploadCsvFile } from "../api";

export const useUploadExcel = () => {
    const [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [progressText, setProgressText] = useState("");
    const [error, setError] = useState("");
    const [responses, setResponses] = useState<string[]>([]);

    const handleFileUpload = async (file: File) => {
        setLoading(true);
        setProgress(0);
        setProgressText("");
        setError("");
        setResponses([]);

        try {
            setProgressText("Разбиение Excel на CSV...");
            setProgress(10);

            const csvFiles: CsvFile[] = await excelToCsv(file);

            setProgressText("Начинаем отправку CSV...");
            const collectedResponses: string[] = [];

            for (let i = 0; i < csvFiles.length; i++) {
                const csv = csvFiles[i];
                setProgressText(
                    `Отправка ${csv.name} (${i + 1}/${csvFiles.length})...`
                );
                setProgress(10 + Math.round((i / csvFiles.length) * 80));

                try {
                    const resData = await uploadCsvFile(csv);
                    collectedResponses.push(
                        `Ответ для ${csv.name}: ${JSON.stringify(resData, null, 2)}`
                    );
                } catch (err) {
                    const msg =
                        (err as AxiosError).message || "Неизвестная ошибка";
                    collectedResponses.push(
                        `Ошибка при отправке ${csv.name}: ${msg}`
                    );
                    setError(msg);
                    break;
                }
            }

            setResponses(collectedResponses);
            setProgress(100);
            setProgressText("Все листы обработаны!");
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    return {
        loading,
        progress,
        progressText,
        error,
        responses,
        handleFileUpload,
    };
};
