import { Router } from 'express';
import { getLove, genLove } from '../Controllers/love';

const loveRouter = Router();
loveRouter.get('/', getLove);
loveRouter.get('/test', genLove);

export default loveRouter;
