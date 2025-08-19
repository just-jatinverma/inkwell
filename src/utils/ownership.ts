import { Request } from 'express';
import { ApiError } from './apiError';
import { Post } from '../models/posts.model';

export const checkPostOwnership = async (req: Request) => {
  if (!req.user?._id) {
    throw new ApiError(400, 'unauthorized');
  }

  const post = await Post.findById(req.params.id);
  if (!post) throw new ApiError(404, 'Post not found');

  // Admins bypass ownership check
  if (req.user.role === 'admin') return;

  // Verify author ownership
  if (post.authorId.toString() !== req.user._id.toString()) {
    throw new ApiError(403, 'You are not the author of this post');
  }
};
