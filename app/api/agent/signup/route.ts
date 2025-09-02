import { NextRequest, NextResponse } from "next/server";
import User from "@/app/models/user";
import bcrypt from "bcryptjs";
import { connectDB } from "@/app/libs/mongo";
import nodemailer from "nodemailer";

export const POST = async (req: NextRequest) => {
  try {
    await connectDB();

    const reqBody = await req.json();
    const { fullName, email, password } = reqBody;

    if (!email || !password || !fullName) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 }
      );
    } else {
      NextResponse.json({ user: { email, password, fullName } });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Verify your account",
      text: `Hello ${fullName}, Welcome to Home trace, thank you for signing up as an agent. Your OTP code is ${otp}. It expires in 10 minutes.`,
    });

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      fullName,
      isVerified: false,
      otpExpiry: new Date(Date.now() + 10 * 60 * 1000),
      otp: otp,
      role: "agent",
    });

    return NextResponse.json({
      message: "Signup successful, check your email for OTP",
      userId: newUser._id,
      success: true,
      role: "agent",
    });
  } catch (err: Error | unknown) {
    console.error("Signup Error:", err);
    return NextResponse.json({
      message: "Something went wrong",
      error: err,
      success: false,
    });
  }
};
