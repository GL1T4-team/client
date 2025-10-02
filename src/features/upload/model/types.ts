export type CsvFile = {
    name: string;
    data: string;
};

export type UploadResponse = {
    success: boolean;
    message?: string;
    [key: string]: any;
};
