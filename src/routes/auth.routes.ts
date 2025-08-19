import express from 'express';
import { register, login, getCurrentUser, generateApiKey } from '../controllers/auth.controller';
import { verifyJWT } from '../middleware/auth.middleware';

const router = express.Router();

router.post('/register', register);
router.post('/login', login);

router.use(verifyJWT);

router.post('/api-key', generateApiKey);
router.get('/me', getCurrentUser);

export default router;
