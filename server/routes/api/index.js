import { Router } from 'express';
import post from './post';
import instagram from './instagram';

const apiRouter = Router();

apiRouter.use('/post', post);
apiRouter.use('/instagram', instagram);

export default apiRouter;
