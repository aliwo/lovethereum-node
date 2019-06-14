import { Router } from 'express';
import { getLove, testLove } from '../Controllers/love';

const loveRouter = Router();
loveRouter.get('/', getLove);
loveRouter.get('/test', testLove);

export default loveRouter;
