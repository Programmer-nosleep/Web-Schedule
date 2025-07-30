
import type { Request, Response } from "express"
import bcrypt from "bcryptjs";
import { generateToken } from "../utils/token";

import User from '../models/User'

export const LoginUser = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user || !user.password) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      res.status(401).json({ message: 'Invalid email or password' });
      return;
    }

    const token = generateToken({ _id: user.id });

    res.status(200).json({
      message: 'Login Successfull!',
      user: {
        _id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token
    });

  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: 'Server error', error: error.message });
    } else {
      res.status(500).json({ message: 'Unknown server error' });
    }
  }
}

export const RegisterUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email, password, profile } = req.body

  try {
    const existing = await User.findOne({ email })
    if (existing) {
      res.status(400).json({ message: 'User already exists' })
    }

    let role: string = 'member'
 
    const adminSecretHeader = req.headers['x-admin-secret']
    const expectedAdminSecret = process.env.ADMIN_SECRET

    if (adminSecretHeader === expectedAdminSecret) {
      role = 'admin'
    }

    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const newUser = await User.create({
      name,
      email,
      password,
      profile,
      role
    })

    const token = generateToken({ _id: newUser.id })

    res.status(201).json({
      message: 'User registered successfully',
      user: {
        _id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        profile: newUser.profile,
        token: generateToken(newUser.id)
      },
      token,
    })
  } catch (error: unknown) {
    if (error instanceof Error) {
      res.status(500).json({ message: error.message || 'server an error.' })
    } else {
      res.status(500).json({ message: 'An unkown error occurred.' })
    }
  }
}