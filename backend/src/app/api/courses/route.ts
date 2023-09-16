import { NextRequest, NextResponse } from "next/server";
import { prisma } from "prisma/client";
import schema from "./schema";
export async function GET(req: NextRequest) {
  const course = await prisma.course.findMany();
  return NextResponse.json(course);
}
export async function POST(request: NextRequest) {
  const body = await request.json();
  console.log(body);
  const validataion = schema.safeParse(body);
  if (!validataion.success)
    return NextResponse.json(validataion.error, { status: 400 });
  const course = await prisma.course.findUnique({
    where: { title: body.title },
  });
  if (course)
    return NextResponse.json(
      { message: "course already exists" },
      { status: 400 }
    );
  const courseCategory = await prisma.courseCategory.findUnique({
    where: { id: body.courseCategoryId },
  });
  if (!courseCategory)
    return NextResponse.json(
      { message: "course category not found" },
      { status: 400 }
    );
  try {
    const imageBuffer = body.image
      ? Buffer.from(body.image, "base64")
      : undefined;
    const newCourse = await prisma.course.create({
      data: {
        title: body.title,
        shortDescription: body.shortDescription,
        description: body.description,
        courseCategoryId: body.courseCategoryId,
        image: imageBuffer,
      },
    });
    return NextResponse.json(newCourse);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
