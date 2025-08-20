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

export { createCategory, getAllCategories };
