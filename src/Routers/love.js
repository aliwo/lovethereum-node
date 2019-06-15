import { Router } from 'express';
import { getLoveContract, genLove } from '../Controllers/love';

const loveRouter = Router();
loveRouter.get('/', getLoveContract);
loveRouter.get('/test', genLove);

export default loveRouter;
