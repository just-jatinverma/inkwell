import { asyncHandler } from '../utils/asyncHandler';
import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { Post } from '../models/posts.model';
import { checkPostOwnership } from '../utils/ownership';

const createPost = asyncHandler(async (req, res) => {
  // TODO: Implement post creation
  // 1. Extract post data from request body (title, content, categoryId).
  // 2. Get the author's ID from the request object (added by the auth middleware).
  // 3. Validate input (ensure title, content, and categoryId are present).
  // 4. Create a slug from the title (e.g., using a library like `slugify`).
  // 5. Create a new post object and save it to the Post model.
  // 6. Send a success response with the new post data.
});

const getPublishedPosts = asyncHandler(async (req, res) => {
  // TODO: Implement fetching all published posts
  // 1. Query the Post model for all posts with a 'published' status.
  // 2. Populate the 'authorId' and 'categoryId' fields to include their details.
  // 3. Implement pagination using query parameters (e.g., page, limit).
  // 4. Send a success response with the array of posts.
});

const getPublishedPost = asyncHandler(async (req, res) => {
  // TODO: Implement fetching a single published post
  // 1. Extract the post ID from the request parameters.
  // 2. Query the Post model for the post with the given ID and a 'published' status.
  // 3. Populate the 'authorId' and 'categoryId' fields.
  // 4. If the post is not found, throw a 404 ApiError.
  // 5. Send a success response with the post data.
});

const updatePost = asyncHandler(async (req, res) => {
  // TODO: Implement post update
  // 1. Extract the post ID from the request parameters and post data from the body.
  // 2. Use the checkPostOwnership utility to verify ownership.
  // 3. Find the post by ID in the Post model.
  // 4. If the post is not found, throw a 404 ApiError.
  // 5. Update the post with the new data.
  // 6. If the title is updated, regenerate the slug.
  // 7. Save the updated post to the database.
  // 8. Send a success response with the updated post data.
});

const deletePost = asyncHandler(async (req, res) => {
  // TODO: Implement post deletion
  // 1. Extract the post ID from the request parameters.
  // 2. Use the checkPostOwnership utility to verify ownership.
  // 3. Find the post by ID in the Post model.
  // 4. If the post is not found, throw a 404 ApiError.
  // 5. Delete the post from the database.
  // 6. Also, delete all associated comments from the Comment model.
  // 7. Send a success response with a confirmation message.
});

export { createPost, getPublishedPosts, getPublishedPost, updatePost, deletePost };