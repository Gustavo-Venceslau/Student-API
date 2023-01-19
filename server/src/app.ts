import express from 'express';
import { errorHandler } from './middleware/errorHandlerMiddleware';
import { router } from './routes';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(router)

app.use(errorHandler)

export { app } ;