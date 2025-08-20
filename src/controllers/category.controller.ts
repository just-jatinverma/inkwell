import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

const createCategory = asyncHandler(async (req, res) => {});
const getAllCategories = asyncHandler(async (req, res) => {});
const getCategoryById = asyncHandler(async (req, res) => {});
const updateCategory = asyncHandler(async (req, res) => {});
const deleteCategory = asyncHandler(async (req, res) => {});
const getCategoryPosts = asyncHandler(async (req, res) => {});

export {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
  getCategoryPosts,
};
