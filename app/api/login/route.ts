import prisma from "@/lib/prisma";
import { User } from "@/types/types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body: User = await req.json();
    const { email, password } = body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) return null;

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) return null;

    const secretKey = process.env.SECRET_KEY;

    const token = jwt.sign({ userId: user?.id }, secretKey!, {
      expiresIn: "1h",
    });

    try {
      const decodedToken = jwt.verify(token, secretKey!);
    } catch (error) {
      console.error(error);
    }

    return NextResponse.json({ token });
  } catch (error) {
    return NextResponse.json(
      { message: "Error authenticating user", error },
      { status: 500 }
    );
  }
}
