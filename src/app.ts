import express, { Express } from 'express';
import cors from 'cors';
import { clientRouter } from './routers/client-route.ts';
import { connectDb, disconnectDB } from './config/database.ts';
import { userRouter } from './routers/user-route.ts';
import { authRouter } from './routers/authentication-route.ts';
import { operationRouter } from './routers/operation-router.ts';
import { vehicleRouter } from './routers/vehicles-route.ts';

const app = express();

app
    .use(cors())
    .use(express.json())
    .use('/user', userRouter)
    .use('/auth', authRouter)
    .use('/client', clientRouter)
    .use('/operation', operationRouter)
    .use('/vehicle', vehicleRouter)

export function init(): Promise<Express> {
    connectDb();
    return Promise.resolve(app);
}

export async function close(): Promise<void> {
    await disconnectDB();
}

export { app };
