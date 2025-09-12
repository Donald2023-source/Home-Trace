import mongoose, { Schema, Document } from "mongoose";

export interface IAgent extends Document {
  fullName: string;
  email: string;
  password: string;
  isVerified: boolean;
  otpExpiry?: string;
  otp?: string;
  role: string;
  NIN?: number;
  cert?: string;
  verifiedAgent: boolean;
  plan: string;
}

const AgentSchema = new Schema<IAgent>({
  fullName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isVerified: { type: Boolean, required: true },
  otpExpiry: { type: String },
  otp: { type: String },
  role: { type: String, enum: ["agent", "admin"], default: "agent" },
  NIN: { type: Number, unique: true, sparse: true },
  cert: { type: String },
  verifiedAgent: { type: Boolean, default: false },
  plan: {
    type: String,
    enum: ["Basic", "Standard", "Premium"],
    default: "Basic",
  },
});


export default mongoose.models.Agent ||
  mongoose.model<IAgent>("Agent", AgentSchema);
