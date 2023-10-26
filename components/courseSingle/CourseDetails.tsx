/* eslint-disable no-unused-vars */
"use client"

// import Reviews from "./Reviews"
// import Overview from "./Overview"
// import CourseContent from "./CourseContent"

import React, { useState, useEffect } from "react"

import Image from "next/image"
import { useCourseById } from "@/hooks/useCourses"
import Link from "next/link"
import { useRouter } from "next/router"

const menuItems = [
  { id: 1, href: "#overview", text: "Details", isActive: true },
  {
    id: 2,
    href: "#provider-content",
    text: "Provider Information",
    isActive: false,
  },
  // { id: 3, href: "#career", text: "Career", isActive: false },
  // { id: 4, href: "#reviews", text: "", isActive: false },
]

export default function CourseDetails({ id }: any) {
  const [pageItem, setPageItem] = useState(null) // Initialize as null
  const [isOpen, setIsOpen] = useState(false) // Fix useState syntax
  const [activeTab, setActiveTab] = useState(1)

  const { course, loading } = useCourseById(id)

  if (loading) {
    return <div>Loading...</div>
  }
  if (!course) return <div>Course not found</div>
  console.log("course", course)
  return (
    <>
      <div className="js-pin-container relative">
        {/* <section className="page-header -type-5"> */}
        <div className="page-header__bg">
          <div
            className="bg-image js-lazy"
            data-bg="img/event-single/bg.png"
          ></div>
        </div>

        <div className="container">
          <div className="page-header__content pt-90 mt-30">
            <div className="row relative">
              <div className="col-xl-7 col-lg-10 mt-30">
                {/* <div className="d-flex x-gap-15 y-gap-10 pb-20">
                  <div>
                    <div className="badge px-15 py-8 text-11 bg-green-1 text-dark-1 fw-400">
                      BEST SELLER
                    </div>
                  </div>
                  <div>
                    <div className="badge px-15 py-8 text-11 bg-orange-1 text-white fw-400">
                      NEW
                    </div>
                  </div>
                  <div>
                    <div className="badge px-15 py-8 text-11 bg-purple-1 text-white fw-400">
                      POPULAR
                    </div>
                  </div>
                </div> */}

                <div>
                  <h1 className="text-30 lh-14 pr-60 lg:pr-0">
                    {course.title}
                  </h1>
                </div>

                <p className="col-xl-9 text-green-8">
                  {course.shortDescription}
                </p>

                {/* <div className="d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20">
                  <div className="d-flex items-center text-light-1">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">
                      {pageItem.rating}
                    </div>
                    <div className="d-flex x-gap-10 items-center">
                      <Star star={pageItem.rating} />
                    </div>
                    <div className="text-14 lh-1 ml-10">
                      ({pageItem.ratingCount})
                    </div>
                  </div>

                  <div className="d-flex items-center text-light-1">
                    <div className="icon icon-person-3 text-13"></div>
                    <div className="text-14 ml-8">
                      853 enrolled on this course
                    </div>
                  </div>

                  <div className="d-flex items-center text-light-1">
                    <div className="icon icon-wall-clock text-13"></div>
                    <div className="text-14 ml-8">Last updated 11/2021</div>
                  </div>
                </div> */}

                {/* <div className="d-flex items-center pt-20">
                  <div
                    className="bg-image size-30 rounded-full js-lazy"
                    style={{
                      backgroundImage: `url(${pageItem.authorImageSrc})`,
                    }}
                  ></div>
                  <div className="text-14 lh-1 ml-10">
                    {pageItem.authorName}
                  </div>
                </div> */}
              </div>

              <div className="col-lg-5">
                <div className="relative pt-40">
                  <Image
                    width={510}
                    height={360}
                    className="w-1/1"
                    src={course?.image}
                    alt="image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </section> */}
        {/* <PinContentTwo pageItem={pageItem} /> */}

        <section className="pt-30 layout-pb-md">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="pt-25 pb-30 px-30 bg-white shadow-2 rounded-8 border-light">
                  <div className="tabs -active-purple-2 js-tabs pt-0">
                    <div className="tabs__controls d-flex js-tabs-controls">
                      {menuItems.map((elm, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveTab(elm.id)}
                          className={`tabs__button js-tabs-button js-update-pin-scene ${
                            i != 0 ? "ml-30" : ""
                          } ${activeTab == elm.id ? "is-active" : ""} `}
                          type="button"
                        >
                          {elm.text}
                        </button>
                      ))}
                    </div>

                    <div className="tabs__content   js-tabs-content">
                      <div
                        className={`tabs__pane -tab-item-1 ${
                          activeTab == 1 ? "is-active" : ""
                        } `}
                      >
                        {/* <Overview /> */}
                        {course.description}
                      </div>

                      <div
                        className={`tabs__pane -tab-item-2 ${
                          activeTab == 2 ? "is-active" : ""
                        } `}
                      >
                        {course.providerName}
                        {course.providerDescription}
                        <button className="btn btn-primary">
                          <a href={course?.providerUrl} target="__blank">
                            View {course.providerName}
                          </a>
                        </button>
                      </div>
                      <div
                        className={`tabs__pane -tab-item-3 ${
                          activeTab == 3 ? "is-active" : ""
                        } `}
                      >
                        {course.rolesName}
                        {course.rolesDescription}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
