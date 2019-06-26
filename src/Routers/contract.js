import { Router } from 'express';
import { getLoveContract } from '../Controllers/contract';

const contractRouter = Router();
contractRouter.get('/', getLoveContract);

export default contractRouter;
