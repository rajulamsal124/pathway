/* eslint-disable no-unused-vars */
"use client"

// import {
//   categories,
//   coursesData,
//   duration,
//   instractorNames,
//   languages,
//   levels,
//   prices,
//   rating,
//   sortingOptions,
// } from "@/data/courses"
import React, { useState, useEffect } from "react"
import {
  CategoryFilter,
  DecisionPointFilter,
  CourseLevelFilter,
} from "../common/courseFilter/component"

interface IProps {
  courseData: any[]
  onApplyFilter: (filter: any, type: any) => void
}

const CourseFilter: React.FC<IProps> = ({ courseData, onApplyFilter }) => {
  // const [allFilters, setAllFilters] = useState<any[]>([])

  // useEffect(() => {
  //   if (allFilters && allFilters?.length > 0) {
  //     onApplyFilter(allFilters)
  //   }
  // }, [allFilters])
  return (
    <>
      <section className="">
        <div className="row y-gap-20 items-center justify-between pb-30">
          <div className="col-12">
            <div className="text-14 lh-12">
              Showing{" "}
              <span className="text-dark-1 fw-500">{courseData?.length}</span>{" "}
              total results
            </div>
          </div>

          <div className="col-12">
            <div className="row x-gap-20 y-gap-20">
              <CategoryFilter
                onChangeCategory={(value: any) => {
                  if (value === "all") {
                    onApplyFilter(null, "category")
                  } else {
                    onApplyFilter(value, "category")
                  }
                }}
              />
              <DecisionPointFilter
                onChangeDecisionPoint={(value: any) => {
                  if (value === "all") {
                    onApplyFilter(null, "decisionPoint")
                  } else {
                    onApplyFilter(value, "decisionPoint")
                  }
                }}
              />
              <CourseLevelFilter
                onChangeCourseLevels={(value: any) => {
                  if (value === "all") {
                    onApplyFilter(null, "level")
                  } else {
                    onApplyFilter(value, "level")
                  }
                  // const filterValue = [...allFilters, { category: value }]
                  // setAllFilters(filterValue)
                }}
                // onChangeDecisionPoint={(value) => {
                //   const filterValue = [...allFilters, { decisionPoint: value }]
                //   setAllFilters(filterValue)
                // }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CourseFilter
