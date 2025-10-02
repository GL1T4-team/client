import axios from "axios";
import type { CsvFile } from "../model/types";

export const uploadCsvFile = async (csv: CsvFile) => {
    const formData = new FormData();
    formData.append(
        "file",
        new Blob([csv.data], { type: "text/csv" }),
        csv.name
    );

    const response = await axios.post(
        "https://gl1t4-team-api-6dab.twc1.net/upload_file",
        formData,
        { withCredentials: true }
    );

    return response.data;
};
