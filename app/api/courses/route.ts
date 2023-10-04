import { prisma } from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"
import schema from "./schema"

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const categories = searchParams.get("categories")
    const decisionPoint = searchParams.get("decisionPoint")

    let FilteredData: any = {}

    if (categories) {
      FilteredData.category = {
        title: {
          contains: categories,
        },
      }
    }

    if (decisionPoint) {
      FilteredData.decisionPoint = {
        title: {
          contains: decisionPoint,
        },
      }
    }

    let courses = null
    if (FilteredData) {
      courses = await prisma.course.findMany({
        where: {
          ...FilteredData,
        },
        include: {
          category: true,
          decisionPoint: true,
          role: true,
        },
      })
    } else {
      courses = await prisma.course.findMany({
        include: {
          category: true,
          decisionPoint: true,
          role: true,
        },
      })
    }

    const coursesWithImage = courses.map((course) => {
      return {
        ...course,
        image: course.image ? course.image.toString("base64") : undefined,
      }
    })

    return NextResponse.json({
      count: coursesWithImage?.length,
      courses: coursesWithImage,
    })
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
  //remove empty or null fields from body
  const newBody: any = Object.keys(body).reduce((acc: any, key: any) => {
    if (body[key]) {
      acc[key] = body[key]
    }
    return acc
  }, {})
  const course = await prisma.course.findFirst({
    where: { title: body.title },
  })
  if (course)
    return NextResponse.json(
      { message: "course already exists" },
      { status: 400 }
    )
  const courseCategory = await prisma.courseCategory.findFirst({
    where: { id: body.courseCategoryId },
  })
  if (!courseCategory)
    return NextResponse.json(
      { message: "course category not found" },
      { status: 400 }
    )

  const imageBuffer = body.image ? Buffer.from(body.image, "base64") : undefined
  const newCourse = await prisma.course.create({
    data: {
      ...newBody,
      image: imageBuffer,
    },
  })
  return NextResponse.json(newCourse, { status: 201 })
}
