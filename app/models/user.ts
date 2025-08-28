import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  isVerified: boolean;
  otpExpiry: string;
}

const UserSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean },
  otpExpiry: { type: String },
  otp: { type: String}
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
