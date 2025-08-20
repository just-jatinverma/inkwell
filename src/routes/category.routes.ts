import { Router } from 'express';
import {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getCategoryPosts,
} from '../controllers/category.controller';
import { verifyJWT } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';

const router = Router();

// Public routes (no authentication required)
router.get('/', getAllCategories);
router.get('/:id', getCategoryById);
router.get('/:id/posts', getCategoryPosts); // Get all published posts in a category

// Admin-only routes (require JWT and admin role only)
router.post('/', verifyJWT, roleMiddleware('admin'), createCategory);
router.put('/:id', verifyJWT, roleMiddleware('admin'), updateCategory);
router.delete('/:id', verifyJWT, roleMiddleware('admin'), deleteCategory);

export default router;
