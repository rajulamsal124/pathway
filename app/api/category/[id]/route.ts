import { NextRequest, NextResponse } from "next/server"

import { prisma } from "@/prisma/client"
import schema from "../schema"
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const category = await prisma.courseCategory.findFirst({
    where: { id: params.id },
  })

  if (!category)
    return NextResponse.json(
      { error: "Course Category not found" },
      { status: 404 }
    )

  return NextResponse.json(category)
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

  const decision = await prisma.decisionPoint.findUnique({
    where: { id: params.id },
  })

  if (!decision)
    return NextResponse.json({ error: "decision not found" }, { status: 404 })

  const updateddecision = await prisma.decisionPoint.update({
    where: { id: decision.id },
    data: {
      title: body.title,
      description: body.description,
    },
  })

  return NextResponse.json(updateddecision)
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const category = await prisma.courseCategory.findFirst({
    where: { id: params.id },
  })

  if (!category)
    return NextResponse.json(
      { error: "Course Category not found" },
      { status: 404 }
    )

  await prisma.courseCategory.delete({
    where: { id: category.id },
  })

  return NextResponse.json({})
}
