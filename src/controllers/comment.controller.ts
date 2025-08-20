import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

const createComment = asyncHandler(async (req, res) => {});
const getPostComments = asyncHandler(async (req, res) => {});
const updateComment = asyncHandler(async (req, res) => {});
const deleteComment = asyncHandler(async (req, res) => {});
const getUserComments = asyncHandler(async (req, res) => {});

export { createComment, getPostComments, updateComment, deleteComment, getUserComments };
