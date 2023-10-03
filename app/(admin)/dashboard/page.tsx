import { redirect } from "next/navigation"
import DashboardOne from "@/components/adminComponents/dashboard/DashboardOne"
import React from "react"
import { getServerSession } from "next-auth"

export default async function page() {
  const session = await getServerSession()
  if (!session) {
    redirect("/login")
  }
  return (
    <>
      <DashboardOne />
    </>
  )
}
