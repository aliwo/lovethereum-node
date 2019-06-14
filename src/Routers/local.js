import { Router } from 'express';
import { getLocal, postLocal } from '../Controllers/local';
import { CORS_header } from '../middlewares';

const localRouter = Router();
localRouter.get('/', getLocal);
localRouter.post('/', postLocal);

export default localRouter;
