import { connectDB } from "@/app/libs/mongo";
import user from "@/app/models/user";
import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function POST(req: NextRequest) {
  await connectDB();
  try {
    const formData = await req.formData();
    const email = formData.get("email") as string;
    const otp = formData.get("otp") as string;
    const NIN = formData.get("NIN") as string;
    const cert = formData.get("cert") as File | null;

    if (!email || !otp || !NIN || !cert) {
      return NextResponse.json(
        { message: "All fields required" },
        { status: 400 }
      );
    }

    const User = await user.findOne({ email });
    if (!User) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    if (User.otp !== otp) {
      return NextResponse.json({ message: "Invalid OTP" }, { status: 400 });
    } else if (User.otpExpiry < new Date()) {
      return NextResponse.json(
        { message: "Your OTP has expired" },
        { status: 400 }
      );
    }

    const bytes = await cert.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const base64 = buffer.toString("base64");
    const dataURI = `data:${cert.type};base64,${base64}`;

    const resourceType = cert.type.includes("pdf") ? "raw" : "image";

    const uploadResponse = await cloudinary.uploader.upload(dataURI, {
      folder: "certificates",
      resource_type: resourceType,
    });

    User.cert = uploadResponse.secure_url;
    User.NIN = NIN;
    User.isVerified = true;
    User.otp = undefined;
    User.otpExpiry = undefined;

    await User.save();

    return NextResponse.json({
      message: "Account verified successfully",
      user: {
        email: User.email,
        fullName: User.fullName,
        cert: User.cert,
        NIN: User.NIN,
      },
    });
  } catch (error: Error | unknown) {
    return NextResponse.json(
      { message: error || "Server error" },
      { status: 500 }
    );
  }
}
