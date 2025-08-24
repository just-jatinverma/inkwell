import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import { Post } from '../models/posts.model';
import { isValidObjectId } from 'mongoose';
import { User } from '../models/user.model';

const getAllPendingPosts = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get all pending posts
  // 1. This should be an admin-only route.
  // 2. Query the database for all posts with status: 'pending'.
  // 3. Populate author details for each post.
  // 4. Implement pagination using query parameters (e.g., page, limit).
  // 5. Return the list of pending posts in an ApiResponse.
  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 1;
  const skip = (page - 1) * limit;

  const pendingPost = await Post.find({ status: 'pending' })
    .populate('authorId', 'userName')
    .skip(skip)
    .limit(limit);

  return res.status(200).json(new ApiResponse(200, pendingPost, 'success'));
});

const approvePost = asyncHandler(async (req, res) => {
  // TODO: Implement logic to approve a post
  // 1. This should be an admin-only route.
  // 2. Get post ID from req.params.
  // 3. Find the post by its ID.
  // 4. If post not found or not pending, throw an ApiError.
  // 5. Update the post's status to 'published'.
  // 6. Save the updated post.
  // 7. Return a success message in an ApiResponse.

  const { postId } = req.params;

  if (!isValidObjectId(postId)) {
    throw new ApiError(400, 'invalid Id');
  }

  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(400, 'post not found');
  }

  if (post.status === 'approved') {
    throw new ApiError(400, 'already approved post');
  }

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    { $set: { status: 'approved' } },
    { new: true }
  );

  return res.status(200).json(new ApiResponse(200, updatedPost, 'success'));
});
const rejectPost = asyncHandler(async (req, res) => {
  // TODO: Implement logic to reject a post
  // 1. This should be an admin-only route.
  // 2. Get post ID from req.params.
  // 3. Optionally, get a rejection reason from req.body.
  // 4. Find the post by its ID.
  // 5. If post not found or not pending, throw an ApiError.
  // 6. Update the post's status to 'rejected'.
  // 7. Save the updated post.
  // 8. (Optional) Notify the author about the rejection and the reason.
  // 9. Return a success message in an ApiResponse.
  const { postId } = req.params;

  if (!isValidObjectId(postId)) {
    throw new ApiError(400, 'invalid Id');
  }

  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(400, 'post not found');
  }

  if (post.status === 'rejected') {
    throw new ApiError(400, 'already rejected post');
  }

  const updatedPost = await Post.findByIdAndUpdate(
    postId,
    { $set: { status: 'rejected' } },
    { new: true }
  );

  return res.status(200).json(new ApiResponse(200, updatedPost, 'success'));
});

const promoteToAdmin = asyncHandler(async (req, res) => {
  // TODO: Implement logic to promote a user to admin
  // 1. This should be a super-admin or owner-only route.
  // 2. Get the user ID to be promoted from req.params or req.body.
  // 3. Find the user by their ID.
  // 4. If user not found, throw an ApiError.
  // 5. Update the user's role to 'admin'.
  // 6. Save the updated user.
  // 7. Return a success message and the updated user's info (without sensitive data) in an ApiResponse.
  const { userId } = req.body;

  const user = await User.findById(userId);

  if (!user) {
    throw new ApiError(400, 'user not found');
  }

  const promoted = await User.findByIdAndUpdate(userId, { $set: { role: 'admin' } }, { new: true });

  return res.status(200).json(new ApiResponse(200, promoted, 'success'));
});

export { getAllPendingPosts, approvePost, rejectPost, promoteToAdmin };
