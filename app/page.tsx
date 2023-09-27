import React from "react"

import Headers from "@/components/layout/headers/Headers"
import Hero from "@/components/heros/Heors"
import Footer from "@/components/layout/footers/Footer"
import CourseList from "@/components/courses/courseList/CourseList"
import LearningSolutions from "@/components/LearningPath/LearningSolutions"
import CategoriesTwo from "@/components/categories/CategoriesThree"
import FindLearningPath from "@/components/LearningPath/FindLearningPath"


export default function page() {
  return (
    <>
      <Headers />
      <div className="main-content overflow-hidden">
        <Hero />
        <CourseList />
        <FindLearningPath />
        <LearningSolutions />
        <CategoriesTwo />
        <Footer />
      </div>
    </>
  )
}
