import { Router } from 'express';
import { createCategory, getAllCategories } from '../controllers/category.controller';
import { verifyJWT } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';

const router = Router();

// Public routes (no authentication required)
router.get('/', getAllCategories);

// Admin-only routes (require JWT and admin role only)
router.post('/', verifyJWT, roleMiddleware('admin'), createCategory);

export default router;
