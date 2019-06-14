import express from 'express';
import helmet from 'helmet';
import './db';
import loveRouter from './Routers/love';

const app = express();
app.use(helmet());
app.use('/love', loveRouter);

export default app;
