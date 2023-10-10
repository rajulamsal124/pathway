import { NextRequest, NextResponse } from "next/server"

import schema from "./schema"
import { prisma } from "@/prisma/client"
export async function GET() {
  const category = await prisma.courseCategory.findMany()
  return NextResponse.json(category)
}
// export async function POST(request: NextRequest) {
//   const body = await request.json()
//   const validataion = schema.safeParse(body)
//   if (!validataion.success)
//     return NextResponse.json(validataion.error, { status: 400 })
//   const category = await prisma.courseCategory.findFirst({
//     where: { id: body.id },
//   })
//   if (category)
//     return NextResponse.json(
//       { message: "Category Already Exist!!!" },
//       { status: 400 }
//     )
//   const newCategory = await prisma.courseCategory.create({
//     data: {
//       title: body.title,
//       type: body.type,
//     },
//   })
//   return NextResponse.json(newCategory, { status: 201 })
// }
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
  const category = await prisma.courseCategory.findFirst({
    where: { title: body.title },
  })
  if (category)
    return NextResponse.json(
      { message: "category already exists" },
      { status: 400 }
    )
  const newCategory = await prisma.courseCategory.create({
    data: {
      ...newBody,
    },
  })
  return NextResponse.json(newCategory, { status: 201 })
}
