import HeaderDashboard from "@/components/layout/headers/HeaderDashboard"
import React from "react"
import Preloader from "@/components/common/Preloader"
import DshbDashboard from "@/components/adminComponents/dashboard/Dshb-dashboard"
import Sidebar from "@/components/adminComponents/sidebar/Sidebar"

// export const metadata = {
//   title: 'Dashboard-single || Tafegippsland - Professional LMS Online Education Course NextJS Template',
//   description:
//     'Elevate your e-learning content with Tafegippsland, the most impressive LMS template for online courses, education and LMS platforms.',

// }
export default function page() {
  return (
    <>
      <DshbDashboard />
    </>
  )
}
