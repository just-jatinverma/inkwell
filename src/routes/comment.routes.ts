import express from 'express';
import { addComment, getCommentsForPost } from '../controllers/comment.controller';
import { verifyJWT } from '../middleware/auth.middleware';

const router = express.Router();

router.get('/post/:postId', getCommentsForPost);
router.post('/', verifyJWT, addComment);

export default router;
