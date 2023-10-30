import prisma from "@/lib/prisma";
import { Review } from "@/types/types";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
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
        reviews: {
          include: {
            user: true,
          },
        },
        host: {
          include: { questions: true },
        },
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

interface UserReview {
  title: string;
  review: string;
  userEmail: string;
}

export async function POST(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const body: UserReview = await req.json();
    const { review, title, userEmail } = body;

    const user = await prisma.user.findUnique({
      where: {
        email: userEmail,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const newReview = await prisma.review.create({
      data: {
        title,
        review,
        userId: user.id,
        rentalId: params.id,
      },
      include: {
        user: true,
      },
    });

    return NextResponse.json(newReview, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Error creating review", error },
      { status: 500 }
    );
  }
}
