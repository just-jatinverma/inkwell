import express from 'express';
import {
  createPost,
  getPublishedPosts,
  getPublishedPost,
  updatePost,
  deletePost,
} from '../controllers/post.controller';
import { verifyJWT } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';

const router = express.Router();

// Public routes
router.get('/', getPublishedPosts);
router.get('/:id', getPublishedPost);

router.use(verifyJWT);
// Authenticated user routes
router.post('/', createPost);
router.put('/posts/:id', roleMiddleware('user'), updatePost);
router.delete('/:id', deletePost);

export default router;
