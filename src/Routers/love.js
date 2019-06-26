import { Router } from 'express';
import { genLove } from '../Controllers/love';

const loveRouter = Router();
loveRouter.get('/test', genLove);

export default loveRouter;
