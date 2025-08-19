import { asyncHandler } from '../utils/asyncHandler';
import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { User } from '../models/user.model';

const register = asyncHandler(async (req, res) => {
  // TODO: Implement user registration
  // 1. Extract user data from request body (userName, email, password).
  // 2. Validate input (ensure all fields are present and password is of sufficient length).
  // 3. Check if a user with the same userName or email already exists in the User model.
  // 4. If a user exists, throw a 409 ApiError.
  // 5. Hash the password using bcrypt.
  // 6. Create a new user object and save it to the database.
  // 7. Generate an access token and a refresh token for the new user.
  // 8. Set the refresh token as an HTTP-only cookie.
  // 9. Send a success response with the new user data and the access token.
});

const login = asyncHandler(async (req, res) => {
  // TODO: Implement user login
  // 1. Extract user credentials from request body (email, password).
  // 2. Validate input (ensure all fields are present).
  // 3. Find the user by email in the User model.
  // 4. If the user is not found, throw a 404 ApiError.
  // 5. Compare the provided password with the hashed password in the database using the isPasswordCorrect method.
  // 6. If passwords match, generate an access token and a refresh token.
  // 7. Set the refresh token as an HTTP-only cookie.
  // 8. Send a success response with the user data and the access token.
  // 9. If passwords don't match, throw a 401 Unauthorized ApiError.
});

const getCurrentUser = asyncHandler(async (req, res) => {
  // TODO: Implement fetching the current user
  // 1. Get the user ID from the request object (added by the auth middleware).
  // 2. Find the user by ID in the User model.
  // 3. If the user is not found, throw a 404 ApiError.
  // 4. Send a success response with the user data (excluding the password and refreshToken).
});

const generateApiKey = asyncHandler(async (req, res) => {
    // TODO: Implement API key generation
    // 1. Get the user ID from the request object.
    // 2. Generate a unique API key (e.g., using a library like `crypto`).
    // 3. Save the API key to the user's document in the database.
    // 4. Send a success response with the new API key.
});

const logout = asyncHandler(async (req, res) => {
  // TODO: Implement user logout
  // 1. Clear the refresh token cookie.
  // 2. Send a success response with a confirmation message.
});


export { register, login, getCurrentUser, generateApiKey, logout };