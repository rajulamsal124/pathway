import Sidebar from "@/components/adminComponents/dashboard/Sidebar"
import Preloader from "@/components/common/Preloader"
import HeaderDashboard from "@/components/layout/headers/HeaderDashboard"
import type { Metadata } from "next"
import { Session, getServerSession } from "next-auth"
import SessionProvider from "@/components/adminComponents/SessionProvider"
import { Toaster } from "react-hot-toast"

export const metadata: Metadata = {
  title: "Gippsland Pathway Explore",
  description: "Get pathway information in one place",
}
interface IAdminLayoutProps {
  children: React.ReactNode
  session?: Session | null
}
export default async function AdminLayout({ children }: IAdminLayoutProps) {
  const session = await getServerSession()
  return (
    <div>
      <SessionProvider session={session}>
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
