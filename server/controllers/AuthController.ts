
import type { Request, Response } from "express"
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from '../models/User'

interface GenerateTokenPayload {
  _id: string
}

const generateToken = ({ _id }: GenerateTokenPayload): string => {
  const secret = process.env.SECRET_KEY
  if (!secret)
    throw new Error("jwt token is not defined in environment variables.")

  return jwt.sign({ _id }, secret, {
    expiresIn: '7d',
  })
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