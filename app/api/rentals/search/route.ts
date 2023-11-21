import prisma from "@/lib/prisma";
import { Rental } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // const { searchParams } = new URL(req.url);
    // const city = searchParams.get("city");
    // const dateArrival = searchParams.get("dateArrival");
    // const dateDeparture = searchParams.get("dateDeparture");
    // const type = searchParams.get("type");

    // solution for hosting

    const { city, dateArrival, dateDeparture, type } = req.query;

    const search = await prisma.rental.findMany({
      where: {
        city: {
          contains: city!,
          mode: "insensitive",
        },
        dateArrival: {
          contains: dateArrival!,
          mode: "insensitive",
        },
        dateDeparture: {
          contains: dateDeparture!,
          mode: "insensitive",
        },
        type: {
          contains: type!,
          mode: "insensitive",
        },
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
