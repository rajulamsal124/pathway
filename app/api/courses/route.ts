import { NextRequest, NextResponse } from "next/server"

import schema from "./schema"
import { prisma } from "@/prisma/client"
// export async function GET(request: NextRequest, response: NextResponse) {
//   try {
//     const courses = await prisma.course.findMany({
//       include: {
//         category: true, // Include the related CourseCategory
//       },
//     })

//     const coursesWithImage = courses.map((course) => {
//       return {
//         ...course,
//         image: course.image ? course.image.toString("base64") : undefined,
//       }
//     })

//     return NextResponse.json(coursesWithImage)
//   } catch (error) {
//     return NextResponse.json({ message: "error on server" }, { status: 500 })
//   }
// }

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
