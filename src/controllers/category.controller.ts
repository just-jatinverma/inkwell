import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

const createCategory = asyncHandler(async (req, res) => {
  // TODO: Implement category creation
  // 1. This should be an admin-only route.
  // 2. Get category details from req.body (e.g., name, description).
  // 3. Validate the input. Name is required.
  // 4. Check if a category with the same name already exists. If so, throw an ApiError.
  // 5. Create and save the new category to the database.
  // 6. Return the created category in an ApiResponse.
});

const getAllCategories = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get all categories
  // 1. Query the database for all categories.
  // 2. Return the list of categories in an ApiResponse.
});

const getCategoryById = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get a single category by its ID
  // 1. Get the category ID from req.params.
  // 2. Find the category by its ID.
  // 3. If the category is not found, throw an ApiError (404 Not Found).
  // 4. Return the category in an ApiResponse.
});

const updateCategory = asyncHandler(async (req, res) => {
  // TODO: Implement category update
  // 1. This should be an admin-only route.
  // 2. Get the category ID from req.params.
  // 3. Get the updated data from req.body (e.g., name, description).
  // 4. Find the category by its ID and update it.
  // 5. If the category is not found, throw an ApiError (404 Not Found).
  // 6. Return the updated category in an ApiResponse.
});

const deleteCategory = asyncHandler(async (req, res) => {
  // TODO: Implement category deletion
  // 1. This should be an admin-only route.
  // 2. Get the category ID from req.params.
  // 3. Find and delete the category.
  // 4. If the category is not found, throw an ApiError (404 Not Found).
  // 5. Decide on a strategy for posts in this category (e.g., set their category to null, or prevent deletion if posts exist).
  // 6. Return a success message in an ApiResponse.
});

const getCategoryPosts = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get all posts for a specific category
  // 1. Get the category ID from req.params.
  // 2. Find all published posts that belong to this category.
  // 3. Implement pagination.
  // 4. Return the list of posts in an ApiResponse.
});

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getCategoryPosts,
};
