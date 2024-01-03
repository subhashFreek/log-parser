import { Request, Response } from 'express';
import LogParser from '../services/logParser';

export const logController = {
  parseLogs: (req: Request, res: Response) => {
    try {
      const fileBuffer: Buffer = (req.file as Express.Multer.File).buffer;
      const logs: string = fileBuffer.toString();
      const parsedLogs = LogParser.parse(logs);
      res.json(parsedLogs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
};
