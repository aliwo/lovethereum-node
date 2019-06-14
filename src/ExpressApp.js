import express from 'express';
import helmet from 'helmet';
import './db';
import loveRouter from './Routers/love';
import localRouter from './Routers/local';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();
app.use(helmet());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
// 다른 포트/도메인에서 get/post 접근 허가
const corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};
app.use(cors(corsOptions));
app.use('/love', loveRouter);
app.use('/local', localRouter);

export default app;
