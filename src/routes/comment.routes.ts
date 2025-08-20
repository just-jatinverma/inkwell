import { Router } from 'express';
import {
  createComment,
  getPostComments,
  updateComment,
  deleteComment,
  getUserComments,
} from '../controllers/comment.controller';
import { verifyJWT } from '../middleware/auth.middleware';

const router = Router();

// Public routes (no authentication required for viewing comments)
router.get('/post/:postId', getPostComments);

// Protected routes (require JWT only)
router.post('/', verifyJWT, createComment);
router.put('/:id', verifyJWT, updateComment);
router.delete('/:id', verifyJWT, deleteComment);
router.get('/user/my-comments', verifyJWT, getUserComments);

export default router;
