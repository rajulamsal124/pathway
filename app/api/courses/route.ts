/* eslint-disable no-unused-vars */
import { NextRequest, NextResponse } from "next/server"

import schema from "./schema"
import { prisma } from "@/prisma/client"
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const course = await prisma.course.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        category: true, // Include the related CourseCategory
      },
    });

    if (!course)
      return NextResponse.json({ error: "Course not found" }, { status: 404 });

    // Convert the image to a Base64 encoded string if it exists
    if (course.image) {
      const imageBase64 = course.image.toString('base64');
      course.imageBase64 = imageBase64;
    }

    return NextResponse.json(course);
  } catch (error) {
    return NextResponse.json({ message: "Error on server" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  console.log(body)
  const validataion = schema.safeParse(body)
  if (!validataion.success)
    return NextResponse.json(validataion.error, { status: 400 })
  const course = await prisma.course.findUnique({
    where: { title: body.title },
  })
  if (course)
    return NextResponse.json(
      { message: "course already exists" },
      { status: 400 }
    )
  const courseCategory = await prisma.courseCategory.findUnique({
    where: { id: body.courseCategoryId },
  })
  if (!courseCategory)
    return NextResponse.json(
      { message: "course category not found" },
      { status: 400 }
    )
  try {
    const imageBuffer = body.image
      ? Buffer.from(body.image, "base64")
      : undefined
    const newCourse = await prisma.course.create({
      data: {
        title: body.title,
        shortDescription: body.shortDescription,
        description: body.description,
        courseCategoryId: body.courseCategoryId,
        image: imageBuffer,
      },
    })
    return NextResponse.json(newCourse)
  } catch (error) {
    return NextResponse.json(error, { status: 500 })
  }
}
