import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const rental = await prisma.rental.findMany({
      include: {
        amenities: true,
        dog_amenities: true,
        feats: true,
        gallery: true,
        neighborhood: true,
        rating: true,
      },
    });

    return NextResponse.json(rental, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Error retrieving rentals", error },
      { status: 500 }
    );
  }
}
