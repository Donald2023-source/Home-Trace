import { auth, db } from "@/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { NextRequest, NextResponse } from "next/server";
import { doc, setDoc } from "firebase/firestore";
export const POST = async (req: NextRequest) => {
  try {
    const reqBody = await req.json();
    const { fullName, email, password } = reqBody;
    if (!fullName || !email || !password) {
      return NextResponse.json({ message: "All fields required" });
    }

    const credential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = credential.user;

    await setDoc(doc(db, "users", user?.uid), {
      fullName,
      email,
      password,
    });

    await updateProfile(user, { displayName: fullName });

    return NextResponse.json({
      message: "User created successfully",
      success: true,
    });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
};
