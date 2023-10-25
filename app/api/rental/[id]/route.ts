import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, {params}: {params: {id: string}}) {
  try {
    const rental = await prisma.rental.findUnique({
      where: {
        id: params.id,
      },
      include: {
        amenities: true,
        gallery: true,
        dog_amenities: true,
        feats: true,
        rating: true,
        neighborhood: true,
        review: true,
      },
    });
    return NextResponse.json(rental, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error retrieving rental", error },
      { status: 500 }
    );
  }
}
