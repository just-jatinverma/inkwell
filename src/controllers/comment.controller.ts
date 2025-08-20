import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

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
});

const getPostComments = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get all comments for a post
  // 1. Get the post ID from req.params.
  // 2. Find all comments associated with that post ID.
  // 3. Populate user details (e.g., username, avatar) for each comment.
  // 4. Implement pagination.
  // 5. Return the list of comments in an ApiResponse.
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
});

const deleteComment = asyncHandler(async (req, res) => {
  // TODO: Implement comment deletion
  // 1. Get the comment ID from req.params.
  // 2. Find the comment by its ID.
  // 3. Check if the authenticated user is the author of the comment or an admin. If not, throw an ApiError (403 Forbidden).
  // 4. Delete the comment from the database.
  // 5. Return a success message in an ApiResponse.
});

const getUserComments = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get all comments by a specific user
  // 1. Get the user ID from req.params.
  // 2. Find all comments made by this user.
  // 3. Populate post details (e.g., post title, slug) for each comment.
  // 4. Implement pagination.
  // 5. Return the list of comments in an ApiResponse.
});

export { createComment, getPostComments, updateComment, deleteComment, getUserComments };
