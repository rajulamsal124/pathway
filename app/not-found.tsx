

import Footer from "@/components/layout/footers/Footer"
import Header from "@/components/layout/headers/Header"
import NotFound from "@/components/not-found/NotFound"
import React from "react"
export const metadata = {
  title:
    "Page not found || Tafegippsland - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with Tafegippsland, the most impressive LMS template for online courses, education and LMS platforms.",
}
export default function page() {
  return (
    <div className="main-content  ">
      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <NotFound />
        <Footer />
      </div>
    </div>
  )
}
