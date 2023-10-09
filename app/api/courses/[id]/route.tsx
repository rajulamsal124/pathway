import { NextRequest, NextResponse } from "next/server"

import schema from "../schema"
import { prisma } from "@/prisma/client"
export async function GET(
  request: NextRequest,
  { params }: { params: { id: any } }
) {
  try {
    const course = await prisma.course.findFirst({
      where: { id: params.id },
      include: {
        category: true,
        decisionPoint: true,
        role: true,
      },
    })

    if (!course)
      return NextResponse.json({ error: "course not found" }, { status: 404 })

    return NextResponse.json({ courses: course })
  } catch (error) {
    return NextResponse.json({ message: "error on server" }, { status: 500 })
  }
}
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
    where: { id: params.id },
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

  const updatedcourse = await prisma.course.update({
    where: { id: course.id },
    data: {
      title: body.title,
      shortDescription: body.shortDescription,
      description: body.description,
      courseCategoryId: body.courseCategoryId,
      image: body.image,
    },
  })

  return NextResponse.json(updatedcourse)
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const course = await prisma.course.findFirst({
    where: { id: params.id },
  })

  if (!course)
    return NextResponse.json({ error: "course not found" }, { status: 404 })

  await prisma.course.delete({
    where: { id: course.id },
  })

  return NextResponse.json({})
}
