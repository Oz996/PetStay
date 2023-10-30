import prisma from "@/lib/prisma";
import { Booking } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  interface UserBooking extends Booking {
    userEmail: string;
  }
  try {
    const body: UserBooking = await req.json();
    const { firstName, lastName, message, userEmail } = body;

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const order = await prisma.order.create({
      data: {
        firstName,
        lastName,
        message,
        rentalId: params.id,
        userId: user.id,
      },
      include: {
        user: true,
        rental: true,
      },
    });
    return NextResponse.json(order, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating order", error },
      { status: 500 }
    );
  }
}
