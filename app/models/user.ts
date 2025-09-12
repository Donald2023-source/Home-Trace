import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  isVerified: boolean;
  otpExpiry?: string;
  otp?: string;
  role: string;
}

const UserSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, required: true },
  otpExpiry: { type: String },
  otp: { type: String },
  role: { type: String, enum: ["user", "admin"], default: "user" },
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
