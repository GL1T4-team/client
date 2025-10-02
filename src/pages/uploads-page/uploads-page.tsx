import { useState } from 'react';
import * as XLSX from 'xlsx';
import axios, { AxiosError } from 'axios';

interface CsvFile {
  name: string;
  data: string;
}

const ExcelCsvUploader: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [progressText, setProgressText] = useState('');
  const [error, setError] = useState('');
  const [responses, setResponses] = useState<string[]>([]);

  const uploadCsvFile = async (csv: CsvFile) => {
    const formData = new FormData();
    formData.append('file', new Blob([csv.data], { type: 'text/csv' }), csv.name);
    const response = await axios.post(
        'https://gl1t4-team-api-6dab.twc1.net/upload_file',
        formData,
        { withCredentials: true }
);
    return response.data;
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setError('Файл не выбран.');
      return;
    }

    setLoading(true);
    setProgress(0);
    setProgressText('');
    setError('');
    setResponses([]);

    const reader = new FileReader();
    reader.onload = async (event) => {
      try {
        if (!event.target?.result) {
          throw new Error('Пустой результат чтения файла');
        }

        const data = new Uint8Array(event.target.result as ArrayBuffer);
        const workbook = XLSX.read(data, { type: 'array' });
        if (!workbook.SheetNames.length) throw new Error('В файле нет листов');

        setProgressText('Разбиение Excel на CSV...');
        setProgress(10);

        const csvFiles: CsvFile[] = workbook.SheetNames.map(sheetName => {
          const worksheet = workbook.Sheets[sheetName];
          const csvData = XLSX.utils.sheet_to_csv(worksheet).replace(/\r/g, '');
          const safeSheetName = sheetName.replace(/[\\/:*?"<>|]/g, '_');
          return { name: `${file.name.split('.')[0]}_${safeSheetName}.csv`, data: csvData };
        });

        setProgressText('Начинаем отправку CSV...');
        const collectedResponses: string[] = [];

        for (let i = 0; i < csvFiles.length; i++) {
          const csv = csvFiles[i];
          setProgressText(`Отправка ${csv.name} (${i + 1}/${csvFiles.length})...`);
          setProgress(10 + Math.round((i / csvFiles.length) * 80));

          try {
            const resData = await uploadCsvFile(csv);
            collectedResponses.push(`Ответ для ${csv.name}: ${JSON.stringify(resData, null, 2)}`);
          } catch (err) {
            const msg = (err as AxiosError).message || 'Неизвестная ошибка';
            collectedResponses.push(`Ошибка при отправке ${csv.name}: ${msg}`);
            setError(msg);
            break; 
          }
        }

        setResponses(collectedResponses);
        setProgress(100);
        setProgressText('Все листы обработаны!');
      } catch (err) {
        const msg = (err as Error).message;
        setError(msg);
      } finally {
        setLoading(false);
      }
    };

    reader.onerror = () => {
      setError('Ошибка чтения файла: ' + reader.error);
      setLoading(false);
    };

    reader.readAsArrayBuffer(file);
  };

  return (
    <div style={{ padding: '20px', maxWidth: 500 }}>
      <h2>Excel → CSV загрузчик</h2>
      {loading ? (
        <div>
          <span>Загрузка и отправка...</span>
          <div style={{ margin: '20px 0', height: 20, background: '#eee', borderRadius: 5 }}>
            <div style={{
              width: `${progress}%`,
              height: '100%',
              background: '#4caf50',
              borderRadius: 5,
              transition: 'width 0.3s'
            }} />
          </div>
          <div>{progressText}</div>
        </div>
      ) : (
        <input type="file" accept=".xlsx, .xls" onChange={handleFileUpload} />
      )}
      {responses.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h4>Ответы сервера:</h4>
          <ul>
            {responses.map((res, idx) => (
              <li key={idx}>
                <pre style={{ whiteSpace: 'pre-wrap', wordBreak: 'break-word' }}>{res}</pre>
              </li>
            ))}
          </ul>
        </div>
      )}
      {error && <div style={{ color: 'red', marginTop: 20 }}><strong>Ошибка:</strong> {error}</div>}
    </div>
  );
};

export default ExcelCsvUploader;
