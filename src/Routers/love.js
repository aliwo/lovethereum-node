import { Router } from 'express';
import { getLoveContract, genLove, registerLoveContract } from '../Controllers/love';

const loveRouter = Router();
loveRouter.get('/contract', getLoveContract);
loveRouter.get('/test', genLove);

export default loveRouter;
