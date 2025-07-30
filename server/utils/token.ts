import jwt from "jsonwebtoken"

interface GenerateTokenPayload {
  _id: string
}

export const generateToken = ({ _id }: GenerateTokenPayload): string => {
  const secret = process.env.SECRET_KEY
  if (!secret)
    throw new Error("jwt token is not defined in environment variables.")

  return jwt.sign({ _id }, secret, {
    expiresIn: '7d',
  })
}