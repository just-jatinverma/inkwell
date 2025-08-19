import express from 'express';
import { register, login, getCurrentUser, generateApiKey } from '../controllers/auth.controller';
import { verifyJWT } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/api-key', verifyJWT, generateApiKey);
router.get('/me', verifyJWT, getCurrentUser);

export default router;
