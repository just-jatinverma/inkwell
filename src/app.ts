import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

import adminRouter from './routes/admin.routes';
import authRouter from './routes/auth.routes';
import categoryRouter from './routes/category.routes';
import commentRouter from './routes/comment.routes';
import postRouter from './routes/post.routes';

app.use('/api/v1/admin', adminRouter);
app.use('/api/v1/auth', authRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/comment', commentRouter);
app.use('/api/v1/post', postRouter);

export default app;
