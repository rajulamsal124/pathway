import Settings from "@/components/adminComponents/dashboard/Settings/Settings"
import React from "react"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
export default async function page() {
  const session = await getServerSession()
  if (!session) {
    redirect("/login")
  }
  return <Settings />
}
