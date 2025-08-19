import { asyncHandler } from '../utils/asyncHandler';
import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';


const getPendingPosts = asyncHandler(async (req, res) => {});

const approvePost = asyncHandler(async (req, res) => {});

const rejectPost = asyncHandler(async (req, res) => {});

export { getPendingPosts, approvePost, rejectPost };
