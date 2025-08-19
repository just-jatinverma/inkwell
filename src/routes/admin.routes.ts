import express from 'express';
import { getPendingPosts, approvePost, rejectPost ,promoteToAdmin } from '../controllers/admin.controller';
import { verifyJWT } from '../middleware/auth.middleware';
import {roleMiddleware} from '../middleware/role.middleware';

const router = express.Router();

router.use(verifyJWT, roleMiddleware('admin'));

router.get('/posts', getPendingPosts);
router.put('/posts/:id/approve', approvePost);
router.put('/posts/:id/reject', rejectPost);
router.put('/users/promote', promoteToAdmin);

export default router;
