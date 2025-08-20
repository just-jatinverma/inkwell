import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';

const registerUser = asyncHandler(async (req, res) => {});
const loginUser = asyncHandler(async (req, res) => {});
const getCurrentUser = asyncHandler(async (req, res) => {});
const logoutUser = asyncHandler(async (req, res) => {});

export { registerUser, loginUser, getCurrentUser, logoutUser };
