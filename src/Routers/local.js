import { Router } from 'express';
import { getLocal, postLocal, getLock } from '../Controllers/local';

const localRouter = Router();
localRouter.get('/', getLocal);
localRouter.post('/', postLocal);
localRouter.get('/lock/:id', getLock);

export default localRouter;
