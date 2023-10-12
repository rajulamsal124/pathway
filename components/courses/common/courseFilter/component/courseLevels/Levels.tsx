/* eslint-disable no-unused-vars, react-hooks/exhaustive-deps */
"use client"
import React, { useState, useEffect } from "react"
import { useCourseData } from "@/hooks/useCourses"

interface IProps {
  onChangeCourseLevels: (value: string) => void
}

const CourseLevelFilter: React.FC<IProps> = ({ onChangeCourseLevels }) => {
  const [filterCourseLevels, setFilterCourseLevels] = useState<string>("")

  const handleFilterCourseLevels = (item: string) => {
    if (filterCourseLevels === item) {
      setFilterCourseLevels("")
    } else {
      setFilterCourseLevels(item)
    }
    const ddButton = document?.getElementById("dd56button")
    const ddContent = document?.getElementById("dd56content")
    ddButton?.classList.toggle("-is-dd-active")
    ddContent?.classList.toggle("-is-el-visible")
  }

  const { courseData: coursesData, loading, error } = useCourseData()

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>Error happened....</h1>

  return (
    <div className="col-auto">
      <div id="dd56button" className="dropdown js-dropdown js-ratings-active">
        <div
          className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
          onClick={() => {
            const ddButton = document?.getElementById("dd56button")
            const ddContent = document?.getElementById("dd56content")
            ddButton?.classList.toggle("-is-dd-active")
            ddContent?.classList.toggle("-is-el-visible")
          }}
          data-el-toggle=".js-levels-toggle"
          data-el-toggle-active=".js-levels-active"
        >
          <span className="js-dropdown-title">
            {filterCourseLevels
              ? `${filterCourseLevels} to ${filterCourseLevels}`
              : "Levels"}
          </span>
          <i className="icon text-9 ml-40 icon-chevron-down"></i>
        </div>

        <div
          id="dd56content"
          className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-ratings-toggle"
        >
          <div className="text-14 y-gap-15 js-dropdown-list">
            <div
              onClick={() => {
                setFilterCourseLevels("")
                handleFilterCourseLevels("all")
                onChangeCourseLevels("all")
                const ddButton = document?.getElementById("dd56button")
                const ddContent = document?.getElementById("dd56content")
                ddButton?.classList.toggle("-is-dd-active")
                ddContent?.classList.toggle("-is-el-visible")
              }}
            >
              <span
                className={`d-block js-dropdown-link cursor ${
                  filterCourseLevels === "" ? "activeMenu" : ""
                } `}
              >
                All
              </span>
            </div>
            {coursesData.map((elm: any, i: any) => (
              <div
                key={i}
                onClick={() => {
                  onChangeCourseLevels(elm.level)
                  handleFilterCourseLevels(elm.level)
                }}
              >
                <span
                  className={`d-block js-dropdown-link cursor ${
                    filterCourseLevels === elm.level ? "activeMenu" : ""
                  } `}
                >
                  {elm.level}
                  {console.log(elm.level)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { CourseLevelFilter }
