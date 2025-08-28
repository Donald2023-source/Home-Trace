import mongoose, { Schema } from "mongoose";

export interface IUser extends Document {
  fullName: string;
  email: string;
  password: string;
}

const UserSchema = new Schema<IUser>({
  fullName: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.models.UserSchema ||
  mongoose.model<IUser>("User", UserSchema);
