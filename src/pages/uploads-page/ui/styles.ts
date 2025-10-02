import styled from "styled-components";

export const Container = styled.div`
    padding: 2rem;
    width: 100%;
    height: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

export const Title = styled.h2`
    color: #2c3e50;
    text-align: center;
    font-weight: 600;
    width: 400px;
    margin: 0 auto;
    margin-bottom: 1.5rem;
`;

export const UploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
`;

export const FileInput = styled.input`
    padding: 0.75rem 1.5rem;
    border: 2px dashed #3498db;
    border-radius: 8px;
    background: #f8fafc;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 400px;
    margin: 0 auto;
    height: 50px;

    &:hover {
        border-color: #2980b9;
        background: #e8f4fd;
    }

    &:focus {
        outline: none;
        border-color: #2980b9;
        box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
    }
`;

export const LoadingContainer = styled.div`
    width: 100%;
    text-align: center;
    width: 400px;
    margin: 0 auto;
`;

export const LoadingText = styled.div`
    font-size: 1rem;
    color: #2c3e50;
    margin-bottom: 1rem;
    font-weight: 500;
`;

export const ProgressBarContainer = styled.div`
    width: 100%;
    height: 12px;
    background: #e9ecef;
    border-radius: 10px;
    overflow: hidden;
    margin: 1rem 0;
`;

export const ProgressBar = styled.div<{ progress: number }>`
    width: ${(props) => props.progress}%;
    height: 100%;
    background: linear-gradient(90deg, #4caf50, #45a049);
    border-radius: 10px;
    transition: width 0.4s ease;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background-image: linear-gradient(
            -45deg,
            rgba(255, 255, 255, 0.2) 25%,
            transparent 25%,
            transparent 50%,
            rgba(255, 255, 255, 0.2) 50%,
            rgba(255, 255, 255, 0.2) 75%,
            transparent 75%,
            transparent
        );
        background-size: 20px 20px;
        animation: move 1s linear infinite;
    }

    @keyframes move {
        0% {
            background-position: 0 0;
        }
        100% {
            background-position: 20px 0;
        }
    }
`;

export const ProgressStatus = styled.div`
    font-size: 0.9rem;
    color: #6c757d;
    margin-top: 0.5rem;
`;

export const ResponsesContainer = styled.div`
    margin-top: 2rem;
    width: 100%;
`;

export const ResponsesTitle = styled.h4`
    color: #2c3e50;
    margin-bottom: 1rem;
    font-weight: 600;
`;

export const ResponsesList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
`;

export const ResponseItem = styled.li`
    background: #f8f9fa;
    border: 1px solid #e9ecef;
    border-radius: 8px;
    padding: 1rem;
    transition: all 0.2s ease;

    &:hover {
        background: #e9ecef;
        border-color: #dee2e6;
    }
`;

export const ResponseText = styled.pre`
    white-space: pre-wrap;
    word-break: break-word;
    margin: 0;
    font-size: 0.875rem;
    line-height: 1.4;
    color: #495057;
    font-family: "Monaco", "Menlo", "Ubuntu Mono", monospace;
`;

export const ErrorMessage = styled.div`
    background: #f8d7da;
    color: #721c24;
    padding: 1rem;
    border: 1px solid #f5c6cb;
    border-radius: 8px;
    margin-top: 1.5rem;
    font-weight: 500;
`;

export const SuccessMessage = styled.div`
    background: #d1edff;
    color: #0c5460;
    padding: 1rem;
    border: 1px solid #bee5eb;
    border-radius: 8px;
    margin-top: 1.5rem;
    font-weight: 500;
`;
