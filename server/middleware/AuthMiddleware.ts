import type { Request, Response, NextFunction } from "express";
import jwt, { type JwtPayload } from "jsonwebtoken";
import { generateToken } from "../utils/token";

import User from '../models/User'

interface AuthRequest extends Request {
  _id: string
  user?: string
}

export const Protect = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    let token: string | undefined = req.headers.authorization

    if (token?.startsWith('Bearer')) {
      token = token.split(' ')[1]

      const secret = process.env.JWT_SECRET

      if (!secret) {
        res.status(500).json({ message: 'jwt token is not set.' })
        return;
      }

      const decoded = jwt.verify(token as string, secret) as JwtPayload

      if (!decoded || typeof decoded !== 'object' || !decoded.id) {
        res.status(401).json({ message: 'invalid token.' })
        return
      }

      const user = await User.findById(decoded.id).select("-password")

      if (!user) {
        res.status(401).json({ message: 'User is not found.' })
        return
      }

      req.user = {
        _id: user._id.toString(),
        name: user.name,
        email: user.email,
        role: user.role,
        profile: user.profile,
        createAt: user.createAt,
        updatedAt: user.updatedAt,
      };

      next()
    } else {
      res.status(401).json({ message: 'is not authorized, no token.' })
    }
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(401).json({ message: 'token failed.', error: error.message })
    }
  }
}

export const adminOnly = async (req: Request, res: Response, next: NextFunction) : Promise<void> => {
    if (req.user && req.user.role === 'admin')
      next()

    res.status(403).json({ message: 'access denied. admin only.' })
}