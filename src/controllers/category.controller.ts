import { asyncHandler } from '../utils/asyncHandler';
import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { Categories } from '../models/categories.model';

const createCategory = asyncHandler(async (req, res) => {
  // TODO: Implement category creation (admin only)
  // 1. Extract category data from request body (name, description).
  // 2. Validate input (ensure name is present).
  // 3. Check if a category with the same name already exists in the Categories model.
  // 4. If it exists, throw a 409 ApiError.
  // 5. Create a new category object and save it to the database.
  // 6. Send a success response with the new category data.
});

const getCategories = asyncHandler(async (req, res) => {
  // TODO: Implement fetching all categories
  // 1. Query the Categories model for all categories.
  // 2. Send a success response with the array of categories.
});

const getCategoryById = asyncHandler(async (req, res) => {
  // TODO: Implement fetching a single category by ID
  // 1. Extract the category ID from the request parameters.
  // 2. Query the Categories model for the category with the given ID.
  // 3. If the category is not found, throw a 404 ApiError.
  // 4. Send a success response with the category data.
});

const updateCategory = asyncHandler(async (req, res) => {
  // TODO: Implement category update (admin only)
  // 1. Extract the category ID from the request parameters and category data from the body.
  // 2. Find the category by ID in the Categories model.
  // 3. If the category is not found, throw a 404 ApiError.
  // 4. Update the category with the new data.
  // 5. Save the updated category to the database.
  // 6. Send a success response with the updated category data.
});

const deleteCategory = asyncHandler(async (req, res) => {
  // TODO: Implement category deletion (admin only)
  // 1. Extract the category ID from the request parameters.
  // 2. Find the category by ID in the Categories model.
  // 3. If the category is not found, throw a 404 ApiError.
  // 4. Delete the category from the database.
  // 5. Send a success response with a confirmation message.
});

export { createCategory, getCategories, getCategoryById, updateCategory, deleteCategory };