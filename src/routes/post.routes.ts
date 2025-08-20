import { Router } from 'express';
import {
  createPost,
  getAllPublishedPosts,
  getPostById,
  updatePost,
  deletePost,
  getUserPosts,
  getPostBySlug,
} from '../controllers/post.controller';
import { verifyJWT } from '../middleware/auth.middleware';

const router = Router();

// Public routes (no authentication required for viewing published posts)
router.get('/', getAllPublishedPosts);
router.get('/:id', getPostById);
router.get('/slug/:slug', getPostBySlug);

// Protected routes (require JWT only)
router.post('/', verifyJWT, createPost);
router.put('/:id', verifyJWT, updatePost);
router.delete('/:id', verifyJWT, deletePost);
router.get('/user/my-posts', verifyJWT, getUserPosts);

export default router;
