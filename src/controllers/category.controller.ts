import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import { Categories } from '../models/categories.model';

const createCategory = asyncHandler(async (req, res) => {
  // TODO: Implement category creation
  // 1. This should be an admin-only route.
  // 2. Get category details from req.body (e.g., name, description).
  // 3. Validate the input. Name is required.
  // 4. Check if a category with the same name already exists. If so, throw an ApiError.
  // 5. Create and save the new category to the database.
  // 6. Return the created category in an ApiResponse.

  const { name, description } = req.body;

  if (!name) {
    throw new ApiError(400, 'Name Field is required');
  }

  const existingCategory = await Categories.findOne({ name });

  if (existingCategory) {
    throw new ApiError(400, 'category already exist');
  }

  const category = await Categories.create({ name, description });

  return res.status(200).json(new ApiResponse(200, category, 'success'));
});

const getAllCategories = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get all categories
  // 1. Query the database for all categories.
  // 2. Return the list of categories in an ApiResponse.
  const categories = await Categories.find();

  if (categories.length === 0) {
    throw new ApiError(400, 'no categories found');
  }

  return res.status(200).json(new ApiResponse(200, categories, 'success'));
});

export { createCategory, getAllCategories };
