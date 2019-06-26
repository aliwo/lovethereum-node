import { Router } from 'express';
import { getLove, postLove } from '../Controllers/love';

const loveRouter = Router();
loveRouter.post('/', postLove);
loveRouter.get('/:id', getLove);

export default loveRouter;
