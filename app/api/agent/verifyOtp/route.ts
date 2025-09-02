import { connectDB } from "@/app/libs/mongo";
import user from "@/app/models/user";
import { NextResponse } from "next/server";

export const POST = async (req: NextResponse) => {
  await connectDB();
  try {
    const { email, otp } = await req.json();

    const User = await user.findOne({ email });
    if (!User) {
      return NextResponse.json({ message: "User not found" });
    }

    if (User.otp != otp || User.optExpiry < new Date()) {
      return NextResponse.json({ message: "Invalid or expired OTP" });
    }

    User.isVerified = true;
    User.otp = undefined;
    User.otpExpiry = undefined;
    await User.save();

    return NextResponse.json({
      message: "Account Verified successfully. Please proceed to the next step",
      email: User?.email,
      fullName: User?.fullName,
    });
  } catch (error: Error | unknown) {
    return NextResponse.json({ message: error });
  }
};
