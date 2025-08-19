import express from 'express';
import { createCategory, getCategories } from '../controllers/category.controller';
import { verifyJWT } from '../middleware/auth.middleware';
import {roleMiddleware} from '../middleware/role.middleware';

const router = express.Router();

router.get('/', getCategories);
router.post('/', verifyJWT, roleMiddleware('admin'), createCategory);

export default router;
