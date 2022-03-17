import { Router } from 'express';
import { addPost, deletePostById, getPostById, getPosts, updatePost }
    from '../controllers/post.controller';

const router = Router();

router.route('/').get(getPosts).post(addPost);

router.route('/:postId').get(getPostById).put(updatePost).delete(deletePostById);

export default router;