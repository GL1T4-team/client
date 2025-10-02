import * as XLSX from "xlsx";
import type { CsvFile } from "../model/types";

export function excelToCsv(file: File): Promise<CsvFile[]> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        reader.onload = (event) => {
            try {
                if (!event.target?.result) {
                    throw new Error("Пустой результат чтения файла");
                }

                const data = new Uint8Array(event.target.result as ArrayBuffer);
                const workbook = XLSX.read(data, { type: "array" });
                if (!workbook.SheetNames.length) {
                    throw new Error("В файле нет листов");
                }

                const csvFiles: CsvFile[] = workbook.SheetNames.map(
                    (sheetName) => {
                        const worksheet = workbook.Sheets[sheetName];
                        const csvData = XLSX.utils
                            .sheet_to_csv(worksheet)
                            .replace(/\r/g, "");
                        const safeSheetName = sheetName.replace(
                            /[\\/:*?"<>|]/g,
                            "_"
                        );
                        return {
                            name: `${file.name.split(".")[0]}_${safeSheetName}.csv`,
                            data: csvData,
                        };
                    }
                );

                resolve(csvFiles);
            } catch (err) {
                reject(err);
            }
        };

        reader.onerror = () => {
            reject(new Error("Ошибка чтения файла: " + reader.error));
        };

        reader.readAsArrayBuffer(file);
    });
}
