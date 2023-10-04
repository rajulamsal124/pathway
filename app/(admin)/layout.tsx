import Sidebar from "@/components/adminComponents/dashboard/Sidebar"
import Preloader from "@/components/common/Preloader"
import HeaderDashboard from "@/components/layout/headers/HeaderDashboard"
import type { Metadata } from "next"
import SessionProvider from "@/components/adminComponents/SessionProvider"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  title: "Food Production and Processing",
  description: "Shape your bright future with us",
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <SessionProvider>
        <Preloader />
        <HeaderDashboard />
        <div className="row">
          <div className="container">
            <div className="col-xl-6 col-lg-4">
              <Sidebar />
            </div>
          </div>
        </div>
        {children}
        <Toaster />
      </SessionProvider>
    </div>
  )
}
