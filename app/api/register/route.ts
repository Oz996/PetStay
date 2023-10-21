import prisma from "@/lib/prisma";
import { User } from "@/types/types";
import { hash } from "bcryptjs";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body: User = await req.json();
    const { email, password } = body;

    const hashedPassword = await hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error: any) {
    if (error.code === "P2002") {
      return NextResponse.json(
        { message: "Email is already registered" },
        { status: 409 }
      );
    }
    return NextResponse.json(
      { message: "Error creating user", error },
      { status: 500 }
    );
  }
}
