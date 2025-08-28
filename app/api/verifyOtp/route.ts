import { NextResponse } from "next/server";
import User from "@/app/models/user";
import { connectDB } from "@/app/libs/mongo";

export async function POST(req: Request) {
  try {
    await connectDB();

    const { email, otp } = await req.json();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (user.otp !== otp || user.otpExpires < new Date()) {
      return NextResponse.json({ message: "Invalid or expired OTP" }, { status: 400 });
    }

    user.isVerified = true;
    user.otp = undefined;
    user.otpExpires = undefined;
    await user.save();

    return NextResponse.json({ message: "Account verified successfully" });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
