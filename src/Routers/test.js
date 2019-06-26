import { Router } from 'express';
import { getTest, postTest } from '../Controllers/test';

const localRouter = Router();
localRouter.get('/', getTest);
localRouter.post('/', postTest);

export default localRouter;
