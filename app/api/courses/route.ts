import { prisma } from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"
import schema from "./schema"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get("category")

    let FilteredData: any = {}

    if (category) {
      FilteredData = {
        category: {
          title: category,
        },
      }
    }

    const courses = await prisma.course.findMany({
      where: {
        ...FilteredData,
      },
      include: {
        category: true,
        decisionPoint: true,
        role: true,
      },
    })

    const coursesWithImage = courses.map((course) => {
      return {
        ...course,
        image: course.image ? course.image.toString("base64") : undefined,
      }
    })

    return NextResponse.json({ courses: coursesWithImage })
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { message: "Error on the server" },
      { status: 500 }
    )
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
