import {
    Container,
    ErrorMessage,
    FileInput,
    LoadingContainer,
    LoadingText,
    ProgressBar,
    ProgressBarContainer,
    ProgressStatus,
    ResponseItem,
    ResponsesContainer,
    ResponsesList,
    ResponsesTitle,
    ResponseText,
    SuccessMessage,
    Title,
    UploadContainer,
} from "./styles";

import { useUploadExcel } from "@/features/upload/model/useUploadExcel";

const ExcelCsvUploader: React.FC = () => {
    const {
        loading,
        progress,
        progressText,
        error,
        responses,
        handleFileUpload,
    } = useUploadExcel();

    return (
        <Container>
            <Title>Перенесите данные для отправки</Title>

            <UploadContainer>
                {loading ? (
                    <LoadingContainer>
                        <LoadingText>Загрузка и отправка...</LoadingText>
                        <ProgressBarContainer>
                            <ProgressBar progress={progress} />
                        </ProgressBarContainer>
                        <ProgressStatus>{progressText}</ProgressStatus>
                    </LoadingContainer>
                ) : (
                    <FileInput
                        type="file"
                        accept=".xlsx, .xls"
                        onChange={(e) => {
                            const file = e.target.files?.[0];
                            if (file) handleFileUpload(file);
                        }}
                    />
                )}
            </UploadContainer>

            {responses.length > 0 && !loading && (
                <ResponsesContainer>
                    <ResponsesTitle>Результаты обработки:</ResponsesTitle>
                    <ResponsesList>
                        {responses.map((res, idx) => (
                            <ResponseItem key={idx}>
                                <ResponseText>{res}</ResponseText>
                            </ResponseItem>
                        ))}
                    </ResponsesList>
                    {!error && (
                        <SuccessMessage>
                            Все файлы успешно обработаны!
                        </SuccessMessage>
                    )}
                </ResponsesContainer>
            )}

            {error && !loading && (
                <ErrorMessage>
                    <strong>Ошибка:</strong> {error}
                </ErrorMessage>
            )}
        </Container>
    );
};

export default ExcelCsvUploader;
