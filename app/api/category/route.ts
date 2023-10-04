import { NextRequest, NextResponse } from "next/server"

import schema from "./schema"
import { prisma } from "@/prisma/client"
export async function GET() {
  const category = await prisma.courseCategory.findMany()
  return NextResponse.json(category)
}
export async function POST(request: NextRequest) {
  const body = await request.json()
  const validataion = schema.safeParse(body)
  if (!validataion.success)
    return NextResponse.json(validataion.error, { status: 400 })
  const category = await prisma.courseCategory.findUnique({
    where: { id: body.id },
  })
  if (category)
    return NextResponse.json(
      { message: "Decision already exists" },
      { status: 400 }
    )
  const newCategory = await prisma.decisionPoint.create({
    data: {
      title: body.title,
      description: body.description,
    },
  })
  return NextResponse.json(newCategory, { status: 201 })
}
