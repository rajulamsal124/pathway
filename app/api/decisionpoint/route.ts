import { NextRequest, NextResponse } from "next/server"

import schema from "./schema"
import { prisma } from "@/prisma/client"
export async function GET() {
  const decision = await prisma.decisionPoint.findMany()
  return NextResponse.json(decision)
}
export async function POST(request: NextRequest) {
  const body = await request.json()
  const validataion = schema.safeParse(body)
  if (!validataion.success)
    return NextResponse.json(validataion.error, { status: 400 })
  const decision = await prisma.decisionPoint.findUnique({
    where: { title: body.title },
  })
  if (decision)
    return NextResponse.json(
      { message: "Decision already exists" },
      { status: 400 }
    )
  const newDecision = await prisma.decisionPoint.create({
    data: {
      title: body.title,
      description: body.description,
    },
  })
  return NextResponse.json(newDecision, { status: 201 })
}
