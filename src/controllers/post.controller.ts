import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import { Post } from '../models/posts.model';

const createPost = asyncHandler(async (req, res) => {
  // TODO: Implement post creation
  // 1. Get post details from req.body (title, content, categoryId, etc.).
  // 2. Get the author's ID from the authenticated user (req.user._id).
  // 3. Validate the input fields.
  // 4. Generate a URL-friendly slug from the title.
  // 5. Check for slug uniqueness. If it exists, append a unique identifier.
  // 6. Create a new post object with status 'pending' (or 'published' if admins don't need to approve).
  // 7. Save the post to the database.
  // 8. Return the created post in an ApiResponse.
  if (!req.user?._id) {
    throw new ApiError(400, 'login first');
  }
  const { title, content, categoryId } = req.body;

  if (!title || !content || !categoryId) {
    throw new ApiError(400, 'all fields are required');
  }

  const authorId = req.user._id;

  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  const existingPost = await Post.findOne({ slug });

  if (existingPost) {
    throw new ApiError(400, 'post with this title already exist');
  }

  const newPost = await Post.create({
    title,
    slug,
    content,
    authorId,
    categoryId,
  });

  return res.status(200).json(new ApiResponse(200, newPost, 'success'));
});

const getAllPublishedPosts = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get all published posts
  // 1. Query the database for all posts with status: 'published'.
  // 2. Implement pagination (get page, limit from req.query).
  // 3. Populate author and category details for each post.
  // 4. Return the list of posts in an ApiResponse.
  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 1;
  const skip = (page - 1) * limit;

  const publishedPost = await Post.find({ status: 'approved' })
    .populate('authorId', 'userName')
    .skip(skip)
    .limit(limit);

  return res.status(200).json(new ApiResponse(200, publishedPost, 'success'));
});

const updatePost = asyncHandler(async (req, res) => {
  // TODO: Implement post update
  // 1. Get the post ID from req.params.
  // 2. Get the updated data from req.body.
  // 3. Find the post by its ID.
  // 4. Check if the authenticated user is the author of the post. If not, throw an ApiError (403 Forbidden).
  // 5. Update the post fields. If the title is updated, consider regenerating the slug.
  // 6. Save the updated post.
  // 7. Return the updated post in an ApiResponse.

  if (!req.user?._id) {
    throw new ApiError(400, 'login first');
  }

  const { postId } = req.params;

  const { title, content, categoryId } = req.body;

  if (!title || !content || !categoryId) {
    throw new ApiError(400, 'all fields are required');
  }

  const authorId = req.user._id;

  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(400, 'post not found');
  }

  const slug = title
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-')
    .replace(/^-+|-+$/g, '');

  if (post.authorId.toString() !== authorId.toString()) {
    throw new ApiError(400, 'unauthorized');
  }

  const updatedPost = await Post.findByIdAndUpdate(postId, {
    $set: {
      title,
      slug,
      content,
      categoryId,
    },
  });

  return res.status(200).json(new ApiResponse(200, updatedPost, 'success'));
});

const getPostById = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get a single post by its ID
  // 1. Get the post ID from req.params.
  // 2. Find the post by its ID.
  // 3. If the post is not found, throw an ApiError (404 Not Found).
  // 4. Populate author and category details.
  // 5. Return the post in an ApiResponse.
  const { postId } = req.params;

  const post = await Post.findById(postId).populate('authorId', 'userName');

  if (!post) {
    throw new ApiError(400, 'post not found');
  }
  return res.status(200).json(new ApiResponse(200, post, 'success'));
});

const deletePost = asyncHandler(async (req, res) => {
  // TODO: Implement post deletion
  // 1. Get the post ID from req.params.
  // 2. Find the post by its ID.
  // 3. Check if the authenticated user is the author of the post or an admin. If not, throw an ApiError (403 Forbidden).
  // 4. Delete the post from the database.
  // 5. Also, consider deleting all associated comments to keep the database clean.
  // 6. Return a success message in an ApiResponse.
  if (!req.user?._id) {
    throw new ApiError(400, 'login first');
  }

  const { postId } = req.params;

  const authorId = req.user._id;

  const post = await Post.findById(postId);

  if (!post) {
    throw new ApiError(400, 'post not found');
  }

  if (post.authorId.toString() !== authorId.toString()) {
    throw new ApiError(400, 'unauthorized');
  }

  await Post.findByIdAndDelete(postId);

  return res.status(200).json(new ApiResponse(200, {}, 'success'));
});

const getUserPosts = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get all posts by a specific user
  // 1. Get the user ID from req.params.
  // 2. Query the database for all posts by this user.
  // 3. Implement pagination.
  // 4. Return the list of posts in an ApiResponse.
  if (!req.user?._id) {
    throw new ApiError(400, 'login first');
  }

  const authorId = req.user._id;

  const page = parseInt(req.query.page as string, 10) || 1;
  const limit = parseInt(req.query.limit as string, 10) || 1;
  const skip = (page - 1) * limit;

  const userPosts = await Post.find({ authorId })
    .populate('authorId', 'userName')
    .skip(skip)
    .limit(limit);

  return res.status(200).json(new ApiResponse(200, userPosts, 'success'));
});

const getPostBySlug = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get a single post by its slug
  // 1. Get the slug from req.params.
  // 2. Find the post by its slug.
  // 3. If the post is not found, throw an ApiError (404 Not Found).
  // 4. Populate author and category details.
  // 5. Return the post in an ApiResponse.

  const { slug } = req.params;

  const post = await Post.findOne({ slug })
    .populate('authorId', 'userName')
    .populate('categoryId', 'name');

  if (!post) {
    throw new ApiError(400, 'post not found');
  }
  return res.status(200).json(new ApiResponse(200, post, 'success'));
});

export {
  createPost,
  getAllPublishedPosts,
  getPostById,
  updatePost,
  deletePost,
  getUserPosts,
  getPostBySlug,
};
