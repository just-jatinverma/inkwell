import { Router } from 'express';
import {
  getAllPendingPosts,
  approvePost,
  rejectPost,
  promoteToAdmin,
} from '../controllers/admin.controller';
import { verifyJWT } from '../middleware/auth.middleware';
import { roleMiddleware } from '../middleware/role.middleware';

const router = Router();

// All admin routes require JWT and admin role only
router.use(verifyJWT);
router.use(roleMiddleware('admin'));

// Admin post review routes
router.get('/posts', getAllPendingPosts);
router.put('/posts/:id/approve', approvePost);
router.put('/posts/:id/reject', rejectPost);

router.put('/users/promote', promoteToAdmin);

export default router;
