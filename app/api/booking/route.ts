import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  try {
    const bookings = await prisma.booking.findMany({
      include: {
        rental: {
          include: {
            host: true,
          },
        },
        user: true,
      },
    });
    return NextResponse.json(bookings, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error retrieving orders" },
      { status: 500 }
    );
  }
}
