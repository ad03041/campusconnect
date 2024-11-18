// models/userSchema.ts
import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
  userName: string;
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>(
  {
    userName: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }, // Plain text storage (not recommended)
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);

export default User;
