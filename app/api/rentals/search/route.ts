import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const city = searchParams.get("city");

    console.log(city);
    if (!city) {
      return NextResponse.json(
        { error: "Missing search parameter" },
        { status: 400 }
      );
    }

    const search = await prisma.rental.findMany({
      where: {
        city,
      },
      include: {
        amenities: true,
        dog_amenities: true,
        feats: true,
        gallery: true,
        neighborhood: true,
        rating: true,
      },
    });
    console.log(search);

    return NextResponse.json({ search });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Failed to search" }, { status: 500 });
  }
}
