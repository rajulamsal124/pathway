"use client"

import React from "react"
import { useQuery } from "@tanstack/react-query"
import Image from "next/image"
import Link from "next/link"
import { useCourseData } from "@/hooks/useCourses"

// async function fetchCourses() {
//   const res = await fetch("http://localhost:3000/api/courses")
//   const courses = await res.json()
//   console.log(courses)
//   return courses
// }

export default function CourseList() {
  const { courseData, loading } = useCourseData()
  console.log(courseData)
  if(loading)
    return <div>Loading...</div>
  return (
    <>
      <section className="page-header -type-1">
        <div className="container">
          <div className="page-header__content">
            <div className="row">
              <div className="col-auto">
                <div>
                  <h1 className="page-header__title">Popular Courses</h1>
                </div>

                <div>
                  <p className="page-header__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
          <div className="row y-gap-30">
            {courseData.map((course, i) => (
                <div key={i} className="col-xl-3 col-lg-4 col-md-6">
                  <div className="coursesCard -type-1 ">
                    <div className="relative">
                      <div className="coursesCard__image overflow-hidden rounded-8">
                        <Image
                          width={510}
                          height={360}
                          className="w-1/1"
                          src={`data:image/jpeg;base64,${course.image}`}
                          alt="image"
                        />
                        <div className="coursesCard__image_overlay rounded-8"></div>
                      </div>
                      <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3">
                        {/* <>
                          <div>
                            <div className="px-15 rounded-200 bg-purple-1">
                              <span className="text-11 lh-1 uppercase fw-500 text-white">
                                Popular
                              </span>
                            </div>
                          </div>

                          <div>
                            <div className="px-15 rounded-200 bg-green-1">
                              <span className="text-11 lh-1 uppercase fw-500 text-dark-1">
                                Best sellers
                              </span>
                            </div>
                          </div>
                        </> */}
                      </div>
                    </div>

                    <div className="h-100">
                      <div className="text-20 lh-15 fw-500 text-dark-1 mt-10">
                       <Link
  className="linkCustom"
  href={`${process.env.NEXT_PUBLIC_URL}/courses/${course.id}`}
>
  {course.title}
</Link>
                      </div>

                      <div className="d-flex x-gap-10 items-center pt-10">
                        <div className="d-flex items-center">
                          <div className="mr-8">
                            <Image
                              width={16}
                              height={17}
                              src="/assets/img/coursesCards/icons/2.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="text-14 lh-1">{course.duration}</div>
                        </div>

                        <div className="d-flex items-center">
                          <div className="mr-8">
                            <Image
                              width={16}
                              height={17}
                              src="/assets/img/coursesCards/icons/3.svg"
                              alt="icon"
                            />
                          </div>
                          <div className="text-14 lh-1">{course.level}</div>
                        </div>
                      </div>
                      <div className="coursesCard-footer">
                        <div className="coursesCard-footer__author">
                          <Image
                            width={30}
                            height={30}
                            src={`data:image/jpeg;base64,${course.image}`}
                            alt="image"
                          />
                          <div>{course.category.type}</div>
                        </div>

                        <div className="text-14 lh-1">{course.rolesName}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </>
  )
}
