import { Router } from 'express';
import { getLoveContract, genLove, registerLoveContract } from '../Controllers/love';

const loveRouter = Router();
loveRouter.get('/', getLoveContract);
loveRouter.get('/register', registerLoveContract);
loveRouter.get('/test', genLove);

export default loveRouter;
