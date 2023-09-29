import Preloader from "@/components/common/Preloader"
import CourseList from "@/components/courses/courseList/CourseList"
import Footer from "@/components/layout/footers/Footer"
import Header from "@/components/layout/headers/Header"
import React from "react"

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader />
      <Header />
      <div className="content-wrapper  js-content-wrapper overflow-hidden">
        <CourseList />
        <Footer />
      </div>
    </div>
  )
}
