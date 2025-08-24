import { User, IUser } from '../models/user.model';
import { ApiError } from '../utils/apiError';
import { asyncHandler } from '../utils/asyncHandler';
import jwt, { JwtPayload } from 'jsonwebtoken';
import { constants } from '../config/constants.js';
import { Request } from 'express';

interface AuthRequest extends Request {
  user?: IUser;
}

interface IDecodedToken extends JwtPayload {
  _id: string;
}

export const verifyJWT = asyncHandler(async (req: AuthRequest, res, next) => {
  try {
    const token = req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
      throw new ApiError(401, 'unauthorized request');
    }

    const decodedToken = jwt.verify(token, constants.accessTokenSecret as string) as IDecodedToken;

    const user = await User.findById(decodedToken?._id).select('-password -refreshToken');

    if (!user) {
      throw new ApiError(401, 'unauthorized request');
    }

    req.user = user;

    next();
  } catch (error) {
    throw new ApiError(401, 'Invalid access token');
    console.error(error);
  }
});
