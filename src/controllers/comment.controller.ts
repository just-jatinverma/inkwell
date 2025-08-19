import { asyncHandler } from '../utils/asyncHandler';
import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { Comment } from '../models/comments.model';
import { Post } from '../models/posts.model';

const addComment = asyncHandler(async (req, res) => {
  // TODO: Implement comment creation
  // 1. Extract comment data from request body (content).
  // 2. Extract post ID from request parameters.
  // 3. Get the author's ID from the request object (added by the auth middleware).
  // 4. Validate input (ensure content is present).
  // 5. Find the post by ID in the Post model to ensure it exists.
  // 6. If the post is not found, throw a 404 ApiError.
  // 7. Create a new comment object with postId, userId, and content, and save it to the Comment model.
  // 8. Add the new comment's ID to the post's comments array.
  // 9. Save the updated post.
  // 10. Send a success response with the new comment data.
});

const getCommentsForPost = asyncHandler(async (req, res) => {
  // TODO: Implement fetching comments for a post
  // 1. Extract the post ID from the request parameters.
  // 2. Query the Comment model for all comments associated with the post ID.
  // 3. Populate the 'userId' field to include the author's details (e.g., username).
  // 4. Send a success response with the array of comments.
});

const updateComment = asyncHandler(async (req, res) => {
  // TODO: Implement comment update
  // 1. Extract the comment ID from the request parameters and comment data from the body.
  // 2. Find the comment by ID in the Comment model.
  // 3. If the comment is not found, throw a 404 ApiError.
  // 4. Check if the user is the owner of the comment (compare comment.userId with req.user._id).
  // 5. If not the owner, throw a 403 Forbidden ApiError.
  // 6. Update the comment with the new data.
  // 7. Save the updated comment to the database.
  // 8. Send a success response with the updated comment data.
});

const deleteComment = asyncHandler(async (req, res) => {
  // TODO: Implement comment deletion
  // 1. Extract the comment ID from the request parameters.
  // 2. Find the comment by ID in the Comment model.
  // 3. If the comment is not found, throw a 404 ApiError.
  // 4. Check if the user is the owner of the comment or an admin (req.user.role === 'admin').
  // 5. If not the owner or an admin, throw a 403 Forbidden ApiError.
  // 6. Find the associated post and remove the comment ID from its comments array.
  // 7. Save the updated post.
  // 8. Delete the comment from the database.
  // 9. Send a success response with a confirmation message.
});

export { addComment, getCommentsForPost, updateComment, deleteComment };