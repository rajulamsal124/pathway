import { NextRequest, NextResponse } from "next/server"

import schema from "../schema"
import { prisma } from "@/prisma/client"
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const course = await prisma.course.findUnique({
      where: { id: parseInt(params.id) },
    })

    if (!course)
      return NextResponse.json({ error: "course not found" }, { status: 404 })
    const courseWithImage = course.image
      ? { ...course, image: course.image.toString("base64") }
      : undefined
    return NextResponse.json(courseWithImage)
  } catch (error) {
    return NextResponse.json({ message: "error on server" }, { status: 500 })
  }
}

// export async function PUT(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const body = await request.json();
//   const validation = schema.safeParse(body);
//   if (!validation.success)
//     return NextResponse.json(validation.error.errors, {
//       status: 400,
//     });

//   const course = await prisma.course.findUnique({
//     where: { title: body.title },
//   });
//   if (course)
//     return NextResponse.json(
//       { message: "course already exists" },
//       { status: 400 }
//     );
//   if (!course)
//     return NextResponse.json({ error: "course not found" }, { status: 404 });
//   const courseCategory = await prisma.courseCategory.findUnique({
//     where: { id: body.courseCategoryId },
//   });
//   if (!courseCategory)
//     return NextResponse.json(
//       { message: "course category not found" },
//       { status: 400 }
//     );
//   const imageBuffer = body.image
//     ? Buffer.from(body.image, "base64")
//     : undefined;
//   try {
//     const updatedcourse = await prisma.course.update({
//       where: { id: parseInt(params.id) },
//       data: {
//         title: body.title,
//         shortDescription: body.shortDescription,
//         description: body.description,
//         courseCategoryId: body.courseCategoryId,
//         image: imageBuffer,
//       },
//     });
//     return NextResponse.json(updatedcourse);
//   } catch (error) {
//     return NextResponse.json(error, { status: 500 });
//   }
// }
export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json()
  const validation = schema.safeParse(body)
  if (!validation.success)
    return NextResponse.json(validation.error.errors, {
      status: 400,
    })

  const course = await prisma.course.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!course)
    return NextResponse.json({ error: "course not found" }, { status: 404 })
  const courseCategory = await prisma.courseCategory.findUnique({
    where: { id: body.courseCategoryId },
  })
  if (!courseCategory)
    return NextResponse.json(
      { message: "course category not found" },
      { status: 400 }
    )
  const imageBuffer = body.image ? Buffer.from(body.image, "base64") : undefined

  const updatedcourse = await prisma.course.update({
    where: { id: course.id },
    data: {
      title: body.title,
      shortDescription: body.shortDescription,
      description: body.description,
      courseCategoryId: body.courseCategoryId,
      image: imageBuffer,
    },
  })

  return NextResponse.json(updatedcourse)
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const course = await prisma.course.findUnique({
    where: { id: parseInt(params.id) },
  })

  if (!course)
    return NextResponse.json({ error: "course not found" }, { status: 404 })

  await prisma.course.delete({
    where: { id: course.id },
  })

  return NextResponse.json({})
}
