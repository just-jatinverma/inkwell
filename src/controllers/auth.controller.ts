import { ApiError } from '../utils/apiError';
import { ApiResponse } from '../utils/apiResponse';
import { asyncHandler } from '../utils/asyncHandler';
import { User } from '../models/user.model';
import { IUser } from '../models/user.model';

const generateAccessAndRefreshTokens = async (userId: string) => {
  try {
    const user = (await User.findById(userId)) as IUser;

    if (!user) {
      throw new ApiError(400, 'user not found');
    }

    const accessToken = user.generateAccessToken();
    const refreshToken = user.generateRefreshToken();

    user.refreshToken = refreshToken;

    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    console.error(error);
    throw new ApiError(500, 'internal server error');
  }
};

const registerUser = asyncHandler(async (req, res) => {
  // TODO: Implement user registration
  // 1. Get user details from req.body (e.g., username, email, password, fullName).
  // 2. Validate the input fields - none should be empty.
  // 3. Check if a user with the same username or email already exists in the database. If so, throw an ApiError.
  // 4. Hash the password using bcrypt.
  // 5. Create a new user object and save it to the database.
  // 6. Generate access and refresh tokens for the new user.
  // 7. Set the refresh token as an HTTP-only cookie.
  // 8. Return the created user object (without the password and refresh token) and the access token in an ApiResponse.

  const { userName, password, email } = req.body;

  if (!userName || !password || !email) {
    throw new ApiError(400, 'all field are required');
  }

  const existingUser = await User.findOne({ $or: [{ userName }, { email }] });

  if (existingUser) {
    throw new ApiError(400, 'user already exist');
  }

  const user = await User.create({
    userName,
    email,
    password,
  });

  return res.status(200).json(new ApiResponse(200, user, 'success'));
});

const loginUser = asyncHandler(async (req, res) => {
  // TODO: Implement user login
  // 1. Get user credentials from req.body (e.g., username or email, and password).
  // 2. Validate the input.
  // 3. Find the user in the database by their username or email.
  // 4. If the user doesn't exist, throw an ApiError (404 Not Found).
  // 5. Compare the provided password with the hashed password in the database using bcrypt.
  // 6. If the password doesn't match, throw an ApiError (401 Unauthorized).
  // 7. Generate new access and refresh tokens.
  // 8. Set the refresh token as an HTTP-only cookie.
  // 9. Return the logged-in user object (without sensitive data) and the access token in an ApiResponse.

  const { userName, email, password } = req.body;
  if ((!userName && !email) || !password) {
    throw new ApiError(400, 'username/email and password are required');
  }

  const user = await User.findOne({ $or: [{ userName }, { email }] });

  if (!user) {
    throw new ApiError(404, 'user not found');
  }

  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid) {
    throw new ApiError(400, 'wrong password');
  }

  const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id as string);

  const loggedInUser = await User.findById(user._id).select('-password -refreshToken');

  const options = {
    httpOnly: true,
    secure: false,
  };

  return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(new ApiResponse(200, { user: loggedInUser, accessToken, refreshToken }, 'success'));
});

const getCurrentUser = asyncHandler(async (req, res) => {
  // TODO: Implement logic to get the current authenticated user
  // 1. This route will be protected by an authentication middleware.
  // 2. The middleware should have already attached the user object to the request (e.g., req.user).
  // 3. Simply return the user object from req.user in an ApiResponse.
  return res.status(200).json(new ApiResponse(200, req.user, 'success'));
});

const logoutUser = asyncHandler(async (req, res) => {
  // TODO: Implement user logout
  // 1. This route should be protected.
  // 2. The user's ID should be available from req.user.
  // 3. (Optional but recommended) Invalidate the refresh token. For example, if you store them in the DB, remove it.
  // 4. Clear the refresh token cookie from the response.
  //    - res.clearCookie('refreshToken', options);
  // 5. Return a success message in an ApiResponse.
  if (!req.user?._id) {
    throw new ApiError(200, 'user not loggedIn');
  }

  const userId = req.user._id;

  await User.findByIdAndUpdate(userId, { $unset: { refreshToken: 1 } }, { new: true });

  const options = {
    httpOnly: true,
    secure: false,
  };

  return res
    .status(200)
    .clearCookie('accessToken', options)
    .clearCookie('refreshToken', options)
    .json(new ApiResponse(200, {}, 'success'));
});

export { registerUser, loginUser, getCurrentUser, logoutUser };
