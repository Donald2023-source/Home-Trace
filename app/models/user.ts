import mongoose, {
  Schema,
  Document,
  TypeExpressionOperatorReturningBoolean,
} from "mongoose";

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
  isVerified: boolean;
  otpExpiry: string;
  otp: string;
  role: string;
  NIN: number;
  cert: File;
  verifiedAgent: boolean;
}

const UserSchema = new Schema<IUser>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, required: true },
  otpExpiry: { type: String },
  otp: { type: String },
  role: { type: String, enum: ["user", "agent", "admin"], default: "user" },
  NIN: { type: Number, unique: true },
  cert: { type: String },
  verifiedAgent: { type: Boolean, default: false },
});

export default mongoose.models.User ||
  mongoose.model<IUser>("User", UserSchema);
