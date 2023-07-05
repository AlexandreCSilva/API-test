import express, { Express } from 'express';
import cors from 'cors';
import { clientRouter } from './routers/client-route.ts';
import { connectDb, disconnectDB } from './config/database.ts';

const app = express();

app
    .use(cors())
    .use(express.json())
    .use('/client', clientRouter)

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export { app };
