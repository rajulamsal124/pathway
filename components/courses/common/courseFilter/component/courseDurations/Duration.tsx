/* eslint-disable no-unused-vars, react-hooks/exhaustive-deps */
"use client"
import React, { useState, useEffect } from "react"
import { useCourseData } from "@/hooks/useCourses"

interface IProps {
  onChangeCourseDuration: (value: string) => void
}

const CourseDurationFilter: React.FC<IProps> = ({ onChangeCourseDuration }) => {
  const [filterCourseDuration, setFilterCourseDuration] = useState<string>("")

  const handleFilterCourseDuration = (item: string) => {
    if (filterCourseDuration === item) {
      setFilterCourseDuration("")
    } else {
      setFilterCourseDuration(item)
    }
    const ddButton = document?.getElementById("dd58button")
    const ddContent = document?.getElementById("dd58content")
    ddButton?.classList.toggle("-is-dd-active")
    ddContent?.classList.toggle("-is-el-visible")
  }

  const { courseData: coursesData, loading, error } = useCourseData()

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>Error happened....</h1>

  return (
    <div className="col-auto">
      <div id="dd58button" className="dropdown js-dropdown js-ratings-active">
        <div
          className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
          onClick={() => {
            const ddButton = document?.getElementById("dd58button")
            const ddContent = document?.getElementById("dd58content")
            ddButton?.classList.toggle("-is-dd-active")
            ddContent?.classList.toggle("-is-el-visible")
          }}
          data-el-toggle=".js-duration-toggle"
          data-el-toggle-active=".js-duration-active"
        >
          <span className="js-dropdown-title">
            {filterCourseDuration
              ? `${filterCourseDuration} to ${filterCourseDuration}`
              : "Duration"}
          </span>
          <i className="icon text-9 ml-40 icon-chevron-down"></i>
        </div>

        <div
          id="dd58content"
          className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-duration-toggle"
        >
          <div className="text-14 y-gap-15 js-dropdown-list">
            <div
              onClick={() => {
                setFilterCourseDuration("")
                handleFilterCourseDuration("all")
                onChangeCourseDuration("all")
                const ddButton = document?.getElementById("dd58button")
                const ddContent = document?.getElementById("dd58content")
                ddButton?.classList.toggle("-is-dd-active")
                ddContent?.classList.toggle("-is-el-visible")
              }}
            >
              <span
                className={`d-block js-dropdown-link cursor ${
                  filterCourseDuration === "" ? "activeMenu" : ""
                } `}
              >
                All
              </span>
            </div>
            {coursesData.map((elm: any, i: any) => (
              <div
                key={i}
                onClick={() => {
                  onChangeCourseDuration(elm.duration)
                  handleFilterCourseDuration(elm.duration)
                }}
              >
                <span
                  className={`d-block js-dropdown-link cursor ${
                    filterCourseDuration === elm.duration ? "activeMenu" : ""
                  } `}
                >
                  {elm.duration}
                  {console.log(elm.duration)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { CourseDurationFilter }
