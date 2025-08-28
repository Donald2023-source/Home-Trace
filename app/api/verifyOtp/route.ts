import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const { email } = reqBody;
  } catch (err) {
    return NextResponse.json({ message: err });
  }
};
