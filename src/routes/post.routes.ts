import express from 'express';
import {
  createPost,
  getPublishedPosts,
  getPublishedPost,
  updatePost,
  deletePost,
} from '../controllers/post.controller';
import { verifyJWT } from '../middleware/auth.middleware';
import {roleMiddleware} from '../middleware/role.middleware';

const router = express.Router();

// Public routes
router.get('/', getPublishedPosts);
router.get('/:id', getPublishedPost);

// Authenticated user routes
router.post('/', verifyJWT, createPost);
router.put('/posts/:id', verifyJWT, roleMiddleware('user'), updatePost);
router.delete('/:id', verifyJWT, deletePost);

export default router;
