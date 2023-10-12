/* eslint-disable no-unused-vars */
"use client"

import React, { useState, useEffect } from "react"
import {
  CategoryFilter,
  DecisionPointFilter,
  CourseLevelFilter,
  CourseDurationFilter,
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
                }}
              />
              <CourseDurationFilter
                onChangeCourseDuration={(value: any) => {
                  if (value === "all") {
                    onApplyFilter(null, "duration")
                  } else {
                    onApplyFilter(value, "duration")
                  }
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
