import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/apiError';
import { IUser } from '../models/user.model';

declare module 'express' {
  interface Request {
    user?: IUser;
  }
}

export const roleMiddleware = (requiredRole: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    try {
      if (!req.user) {
        throw new ApiError(401, 'User not authenticated');
      }

      // Check if user has the required role
      if (req.user.role !== requiredRole) {
        throw new ApiError(403, `Access forbidden. Requires ${requiredRole} role`);
      }

      next();
    } catch (error) {
      next(error);
    }
  };
};
