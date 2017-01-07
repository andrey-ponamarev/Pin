import { Router } from 'express';
import {
    getPosts,
    setPost,
    deletePost,
    getPostById
} from '../../../controllers/api/post';

const postRouter = Router({ mergeParams: true });

postRouter.get('/', getPosts);
postRouter.get('/:id', getPostById);
postRouter.post('/', setPost);
postRouter.delete('/:id', deletePost);

export default postRouter;
