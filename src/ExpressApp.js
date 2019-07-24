import express from 'express';
import helmet from 'helmet';
import './db';
import cors from 'cors';
import bodyParser from 'body-parser';
import loveRouter from './Routers/love';
import contractRouter from './Routers/contract';
import testRouter from './Routers/test';

const app = express();
app.use(helmet());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// 다른 포트/도메인에서 get/post 접근 허가
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use('/love', loveRouter);
app.use('/contract', contractRouter);
app.use('/test', testRouter);

export default app;
