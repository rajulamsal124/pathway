"use client"

import Preloader from "@/components/common/Preloader"

import CourseDetails from "@/components/courseSingle/CourseDetails"

import CourseSlider from "@/components/courseSingle/CourseSlider"
import Footer from "@/components/layout/footers/Footer"

import Header from "@/components/layout/headers/Header"
import React from "react"
interface ICourseSingleProps {
  params: any
}

export default function page({ params }: ICourseSingleProps) {
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
