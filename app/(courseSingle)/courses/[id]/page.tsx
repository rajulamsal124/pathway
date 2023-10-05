"use client"

import Preloader from "@/components/common/Preloader"

import CourseDetails from "@/components/courseSingle/CourseDetails"

import CourseSlider from "@/components/courseSingle/CourseSlider"
import Footer from "@/components/layout/footers/Footer"

import Header from "@/components/layout/headers/Header"
import React, { useEffect, useState } from "react"
interface ICourseSingleProps {
  params: any
}

export default function Page({ params }: ICourseSingleProps) {
  const [isClient, setIsclient] = useState<boolean>(false)

  useEffect(() => {
    setIsclient(true)
  }, [])
  return (
    <div className="main-content  ">
      {isClient && (
        <>
          {/* <Preloader />
          <Header /> */}
          <div className="content-wrapper  js-content-wrapper">
            <CourseDetails id={params.id} />
            {/* <CourseSlider /> */}
            <Footer />
          </div>
        </>
      )}
    </div>
  )
}
