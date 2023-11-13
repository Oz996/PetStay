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
    const { firstName, lastName, message, userEmail, phone } = body;

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const order = await prisma.booking.create({
      data: {
        firstName,
        lastName,
        message,
        rentalId: params.id,
        userId: user.id,
        phone,
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

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { id } = body;

    const cancelBooking = await prisma.booking.delete({
      where: {
        id,
      },
    });
    return NextResponse.json(
      { message: "Booking has been canceled" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error deleting booking" },
      { status: 500 }
    );
  }
}
