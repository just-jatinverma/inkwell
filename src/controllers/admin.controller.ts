import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

const getAllPendingPosts = asyncHandler(async (req, res) => {});
const approvePost = asyncHandler(async (req, res) => {});
const rejectPost = asyncHandler(async (req, res) => {});
const getAllPostsWithStatus = asyncHandler(async (req, res) => {});
const promoteToAdmin = asyncHandler(async (req, res) => {});

export { getAllPendingPosts, approvePost, rejectPost, getAllPostsWithStatus, promoteToAdmin };
