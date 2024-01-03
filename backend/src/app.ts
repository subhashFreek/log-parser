import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { logController } from './controllers/logController';

const app = express();
const port = 3001;

app.use(cors());

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.post('/api/parseLogs', upload.single('file'), logController.parseLogs);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
