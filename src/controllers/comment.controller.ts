import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import { Comment } from '../models/comments.model';
import { isValidObjectId } from 'mongoose';
import { Post } from '../models/posts.model';

const createComment = asyncHandler(async (req, res) => {
  // TODO: Implement comment creation
  // 1. Get the post ID from req.params.
  // 2. Get the comment content from req.body.
  // 3. Get the user ID from the authenticated user (req.user._id).
  // 4. Validate the input.
  // 5. Check if the post exists. If not, throw an ApiError.
  // 6. Create a new comment object, associating it with the post and user.
  // 7. Save the comment to the database.
  // 8. Return the new comment in an ApiResponse.
  if (!req.user?._id) {
    throw new ApiError(400, 'unauthenticated');
  }

  const userId = req.user._id;
  const { content } = req.body;

  const { postId } = req.params;

  if (!isValidObjectId(postId)) {
    throw new ApiError(400, 'invalid post id');
  }

  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(400, 'post not found');
  }

  const newComment = await Comment.create({ postId, userId, content });

  return res.status(200).json(new ApiResponse(200, newComment, 'success'));
});

const getPostComments = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get all comments for a post
  // 1. Get the post ID from req.params.
  // 2. Find all comments associated with that post ID.
  // 3. Populate user details (e.g., username, avatar) for each comment.
  // 4. Implement pagination.
  // 5. Return the list of comments in an ApiResponse.

  const { postId } = req.params;

  if (!isValidObjectId(postId)) {
    throw new ApiError(400, 'invalid post id');
  }

  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(400, 'post not found');
  }

  const comments = await Comment.find({ postId }).populate('userId', 'userName');

  return res.status(200).json(new ApiResponse(200, comments, 'success'));
});

const updateComment = asyncHandler(async (req, res) => {
  // TODO: Implement comment update
  // 1. Get the comment ID from req.params.
  // 2. Get the updated content from req.body.
  // 3. Find the comment by its ID.
  // 4. Check if the authenticated user is the author of the comment. If not, throw an ApiError (403 Forbidden).
  // 5. Update the comment's content.
  // 6. Save the updated comment.
  // 7. Return the updated comment in an ApiResponse.

  if (!req.user?._id) {
    throw new ApiError(400, 'unauthenticated');
  }

  const userId = req.user._id;

  const { content } = req.body;

  if (!content || !content.trim()) {
    throw new ApiError(400, 'empty update');
  }

  const { commentId } = req.params;

  if (!isValidObjectId(commentId)) {
    throw new ApiError(400, 'invalid comment id');
  }

  const comment = await Comment.findById(commentId);

  if (!comment) {
    throw new ApiError(400, 'comment not found');
  }

  if (comment.userId.toString() !== userId.toString()) {
    throw new ApiError(400, 'not allowed');
  }

  const updatedComment = await Comment.findByIdAndUpdate(
    commentId,
    { $set: { content } },
    { new: true }
  );

  return res.status(200).json(new ApiResponse(200, updatedComment, 'success'));
});

const deleteComment = asyncHandler(async (req, res) => {
  // TODO: Implement comment deletion
  // 1. Get the comment ID from req.params.
  // 2. Find the comment by its ID.
  // 3. Check if the authenticated user is the author of the comment or an admin. If not, throw an ApiError (403 Forbidden).
  // 4. Delete the comment from the database.
  // 5. Return a success message in an ApiResponse.

  if (!req.user?._id) {
    throw new ApiError(400, 'unauthenticated');
  }

  const userId = req.user._id;

  const { commentId } = req.params;

  if (!isValidObjectId(commentId)) {
    throw new ApiError(400, 'invalid comment id');
  }

  const comment = await Comment.findById(commentId);

  if (!comment) {
    throw new ApiError(400, 'comment not found');
  }

  if (comment.userId.toString() !== userId.toString()) {
    throw new ApiError(400, 'not allowed');
  }

  await Comment.findByIdAndDelete(commentId);

  return res.status(200).json(new ApiResponse(200, {}, 'success'));
});

export { createComment, getPostComments, updateComment, deleteComment };
