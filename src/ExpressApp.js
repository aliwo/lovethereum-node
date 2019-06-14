import express from 'express';
import helmet from 'helmet';

import './db';

const app = express();

app.use(helmet());

const getLove = (req, res) => {
    res.send({ id: 1 });
};

app.get('/love', getLove);

export default app;
