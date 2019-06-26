import { Router } from 'express';
import { getTest } from '../Controllers/test';

const localRouter = Router();
localRouter.get('/', getTest);

export default localRouter;
