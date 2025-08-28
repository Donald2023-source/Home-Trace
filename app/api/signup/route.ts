import { NextRequest, NextResponse } from "next/server";
import UserSchema from "@/app/models/user";
import bcrypt from "bcryptjs";
export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const { email, password, fullName } = reqBody;
    if (!email || !password || !fullName) {
      return NextResponse.json({ message: "All fields required" });
    }
    const exisitingUser = await UserSchema?.findOne({ email });
    if (exisitingUser) {
      return NextResponse.json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserSchema.create({
      email,
      password: hashedPassword,
      fullName,
    });

    return NextResponse.json({
      message: "user created successfully",
      user: newUser,
      success: true
    });
  } catch (err) {
    return NextResponse.json({ message: "Something went wrong", error: err, success: false });
  }
};
