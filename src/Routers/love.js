import { Router } from 'express';
import { getLove } from '../Controllers/love';

const loveRouter = Router();
loveRouter.get('/', getLove);


export default loveRouter;
