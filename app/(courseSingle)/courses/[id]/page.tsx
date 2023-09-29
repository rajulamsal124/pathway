"use client"

import Preloader from "@/components/common/Preloader"

import CourseDetails from "@/components/courseSingle/CourseDetails"

import CourseSlider from "@/components/courseSingle/CourseSlider"
import Footer from "@/components/layout/footers/Footer"

import Header from "@/components/layout/headers/Header"
import React from "react"

// export const metadata = {
//   title:
//     "Couese-single-6 || Tafegippsland - Professional LMS Online Education Course NextJS Template",
//   description:
//     "Elevate your e-learning content with Tafegippsland, the most impressive LMS template for online courses, education and LMS platforms.",
// };

export default function page({ params }) {
  return (
    <div className="main-content  ">
      <Preloader />
      <Header />
      <div className="content-wrapper  js-content-wrapper">
        <CourseDetails id={params.id} />
        <CourseSlider />
        <Footer />
      </div>
    </div>
  )
}
