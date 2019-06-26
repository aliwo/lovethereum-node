import { Router } from 'express';
import { getLoveContract } from '../Controllers/contract';

const contractRouter = Router();
contractRouter.get('/contract', getLoveContract);

export default contractRouter;
