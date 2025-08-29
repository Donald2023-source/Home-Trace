import { NextRequest, NextResponse } from "next/server";

import user from "@/app/models/user";
import bcrypt from "bcryptjs";
import { connectDB } from "@/app/libs/mongo";
export const POST = async (req: NextRequest) => {
  try {
    await connectDB();
    const reqBody = await req.json();
    const { email, password } = reqBody;

    if (!email || !password) {
      return NextResponse.json({ message: "All fields required" });
    }

    const User = await user.findOne({ email });

    if (!User) {
      return NextResponse.json({ message: "User does not exist" });
    }
    if (!User.isVerified) {
      return;
    }
    const isMatch = await bcrypt.compare(password, User.password);
    if (!isMatch) {
      return NextResponse.json({ message: "Invalid credentials" });
    }

    return NextResponse.json({ message: "User logged in successfully" });
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
