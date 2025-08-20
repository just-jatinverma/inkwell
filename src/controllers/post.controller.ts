import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

const createPost = asyncHandler(async (req, res) => {});
const getAllPublishedPosts = asyncHandler(async (req, res) => {});
const updatePost = asyncHandler(async (req, res) => {});
const getPostById = asyncHandler(async (req, res) => {});
const deletePost = asyncHandler(async (req, res) => {});
const getUserPosts = asyncHandler(async (req, res) => {});
const getPostBySlug = asyncHandler(async (req, res) => {});

export {
  createPost,
  getAllPublishedPosts,
  getPostById,
  updatePost,
  deletePost,
  getUserPosts,
  getPostBySlug,
};
