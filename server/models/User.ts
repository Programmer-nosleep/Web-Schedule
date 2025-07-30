import mongoose, { Document, Schema, model } from "mongoose";

export interface User extends Document {
  _id: string
  name: string
  email: string
  password: string
  profile?: string | null
  role: 'admin' | 'user'
  createAt: Date
  updatedAt: Date
}

const UserSchema: Schema = new Schema<User>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    profile: {
      type: String,
      default: null,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user', 
    },
  },
  {
    timestamps: true,
  }
);

const UserModel = model<User>('User', UserSchema)
export default UserModel