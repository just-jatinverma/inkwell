import { Router } from 'express';
import {
  registerUser,
  loginUser,
  getCurrentUser,
  logoutUser,
} from '../controllers/auth.controller';
import { verifyJWT } from '../middleware/auth.middleware';

const router = Router();

// Public routes (no authentication required)
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected routes (require JWT only)
router.get('/me', verifyJWT, getCurrentUser);
router.post('/logout', verifyJWT, logoutUser);

export default router;
