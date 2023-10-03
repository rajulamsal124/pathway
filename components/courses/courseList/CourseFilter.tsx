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
} from "../common/courseFilter/component"

interface IProps {
  courseData: any[]
  onApplyFilter: (filters: any[]) => void
}

const CourseFilter: React.FC<IProps> = ({ courseData, onApplyFilter }) => {
  const [allFilters, setAllFilters] = useState<any[]>([])

  useEffect(() => {
    if (allFilters && allFilters?.length > 0) {
      onApplyFilter(allFilters)
    }
  }, [allFilters, onApplyFilter])
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
                onChangeCategory={(value) => {
                  const filterValue = [...allFilters, { categories: value }]
                  setAllFilters(filterValue)
                }}
              />
              <DecisionPointFilter
                onChangeDecisionPoint={(value) => {
                  const filterValue = [...allFilters, { decisionPoint: value }]
                  setAllFilters(filterValue)
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CourseFilter
