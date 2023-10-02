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

  // const [filterCategories, setFilterCategories] = useState([])
  // const [filterRatingRange, setFilterRatingRange] = useState([])
  // const [filterInstractors, setFilterInstractors] = useState([])
  // const [filterPrice, setFilterPrice] = useState("All")
  // const [filterLevels, setFilterLevels] = useState([])
  // const [filterlanguange, setFilterlanguange] = useState([])
  // const [filterDuration, setFilterDuration] = useState([])

  // const [currentSortingOption, setCurrentSortingOption] = useState("Default")

  // const [filteredData, setFilteredData] = useState([])

  // const [sortedFilteredData, setSortedFilteredData] = useState([])

  // const [pageNumber, setPageNumber] = useState(1)

  // useEffect(() => {
  //   const refItems = coursesData.filter((elm) => {
  //     if (filterPrice == "All") {
  //       return true
  //     } else if (filterPrice == "Free") {
  //       return !elm.paid
  //     } else if (filterPrice == "Paid") {
  //       return elm.paid
  //     }
  //   })

  //   let filteredArrays = []

  //   if (filterInstractors.length > 0) {
  //     const filtered = refItems.filter((elm) =>
  //       filterInstractors.includes(elm.authorName)
  //     )
  //     filteredArrays = [...filteredArrays, filtered]
  //   }
  //   if (filterCategories.length > 0) {
  //     const filtered = refItems.filter((elm) =>
  //       filterCategories.includes(elm.category)
  //     )
  //     filteredArrays = [...filteredArrays, filtered]
  //   }
  //   if (filterLevels.length > 0) {
  //     const filtered = refItems.filter((elm) =>
  //       filterLevels.includes(elm.level)
  //     )
  //     filteredArrays = [...filteredArrays, filtered]
  //   }
  //   if (filterlanguange.length > 0) {
  //     const filtered = refItems.filter((elm) =>
  //       filterlanguange.includes(elm.languange)
  //     )
  //     filteredArrays = [...filteredArrays, filtered]
  //   }
  //   if (filterRatingRange.length > 0) {
  //     const filtered = refItems.filter(
  //       (elm) =>
  //         elm.rating >= filterRatingRange[0] &&
  //         elm.rating <= filterRatingRange[1]
  //     )
  //     filteredArrays = [...filteredArrays, filtered]
  //   }
  //   if (filterDuration.length > 0) {
  //     const filtered = refItems.filter(
  //       (elm) =>
  //         elm.duration >= filterDuration[0] && elm.duration <= filterDuration[1]
  //     )
  //     filteredArrays = [...filteredArrays, filtered]
  //   }

  //   const commonItems = refItems.filter((item) =>
  //     filteredArrays.every((array) => array.includes(item))
  //   )
  //   setFilteredData(commonItems)
  //   setPageNumber(1)
  // }, [
  //   filterCategories,
  //   filterRatingRange,
  //   filterInstractors,
  //   filterPrice,
  //   filterLevels,
  //   filterlanguange,
  //   filterDuration,
  // ])

  // const handleFilterCategories = (item) => {
  //   if (filterCategories.includes(item)) {
  //     setFilterCategories([])
  //   } else {
  //     setFilterCategories([item])
  //   }
  //   document.getElementById("dd52button").classList.toggle("-is-dd-active")
  //   document.getElementById("dd52content").classList.toggle("-is-el-visible")
  // }
  // const handleFilterRatingRange = (item) => {
  //   setFilterRatingRange(item)
  //   document.getElementById("dd53button").classList.toggle("-is-dd-active")
  //   document.getElementById("dd53content").classList.toggle("-is-el-visible")
  // }
  // const handleFilterInstractors = (item) => {
  //   if (filterInstractors.includes(item)) {
  //     setFilterInstractors([])
  //   } else {
  //     setFilterInstractors([item])
  //   }
  //   document.getElementById("dd54button").classList.toggle("-is-dd-active")
  //   document.getElementById("dd54content").classList.toggle("-is-el-visible")
  // }
  // const handleFilterPrice = (item) => {
  //   setFilterPrice(item)
  //   document.getElementById("dd55button").classList.toggle("-is-dd-active")
  //   document.getElementById("dd55content").classList.toggle("-is-el-visible")
  // }
  // const handleFilterLevels = (item) => {
  //   if (filterLevels.includes(item)) {
  //     const filtered = filterLevels.filter((elm) => elm != item)
  //     setFilterLevels([])
  //   } else {
  //     setFilterLevels([item])
  //   }
  //   document.getElementById("dd56button").classList.toggle("-is-dd-active")
  //   document.getElementById("dd56content").classList.toggle("-is-el-visible")
  // }
  // const handleFilterlanguange = (item) => {
  //   if (filterlanguange.includes(item)) {
  //     setFilterlanguange([])
  //   } else {
  //     setFilterlanguange([item])
  //   }
  //   document.getElementById("dd57button").classList.toggle("-is-dd-active")
  //   document.getElementById("dd57content").classList.toggle("-is-el-visible")
  // }
  // const handleFilterDuration = (item) => {
  //   setFilterDuration(item)
  //   document.getElementById("dd58button").classList.toggle("-is-dd-active")
  //   document.getElementById("dd58content").classList.toggle("-is-el-visible")
  // }
  return (
    <>
      <section className="layout-pt-md layout-pb-lg">
        <div className="container">
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
                    const filterValue = [
                      ...allFilters,
                      { decisionPoint: value },
                    ]
                    setAllFilters(filterValue)
                  }}
                />

                {/* <div className="col-auto">
                  <div
                    id="dd53button"
                    className="dropdown js-dropdown js-ratings-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      onClick={() => {
                        document
                          .getElementById("dd53button")
                          .classList.toggle("-is-dd-active")
                        document
                          .getElementById("dd53content")
                          .classList.toggle("-is-el-visible")
                      }}
                      data-el-toggle=".js-ratings-toggle"
                      data-el-toggle-active=".js-ratings-active"
                    >
                      <span className="js-dropdown-title">
                        {filterRatingRange.length
                          ? `${filterRatingRange[0]} to ${filterRatingRange[1]}`
                          : "Decision Point"}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd53content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-ratings-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div
                          onClick={() => {
                            setFilterRatingRange([])
                            document
                              .getElementById("dd53button")
                              .classList.toggle("-is-dd-active")
                            document
                              .getElementById("dd53content")
                              .classList.toggle("-is-el-visible")
                          }}
                        >
                          <span
                            className={`d-block js-dropdown-link cursor ${
                              filterRatingRange.length == 0 ? "activeMenu" : ""
                            } `}
                          >
                            All
                          </span>
                        </div>
                        {rating.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => handleFilterRatingRange(elm.range)}
                          >
                            <span
                              className={`d-block js-dropdown-link cursor ${
                                filterRatingRange.toString() ==
                                elm.range.toString()
                                  ? "activeMenu"
                                  : ""
                              } `}
                            >
                              {elm.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="col-auto">
                  <div
                    id="dd54button"
                    className="dropdown js-dropdown js-instructors-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      onClick={() => {
                        document
                          .getElementById("dd54button")
                          .classList.toggle("-is-dd-active")
                        document
                          .getElementById("dd54content")
                          .classList.toggle("-is-el-visible")
                      }}
                      data-el-toggle=".js-instructors-toggle"
                      data-el-toggle-active=".js-instructors-active"
                    >
                      <span className="js-dropdown-title">
                        {filterInstractors.length
                          ? filterInstractors[0]
                          : "Instructors"}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd54content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-instructors-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        <div
                          onClick={() => {
                            setFilterInstractors([])
                            document
                              .getElementById("dd54button")
                              .classList.toggle("-is-dd-active")
                            document
                              .getElementById("dd54content")
                              .classList.toggle("-is-el-visible")
                          }}
                        >
                          <span
                            className={`d-block js-dropdown-link cursor ${
                              filterInstractors.length == 0 ? "activeMenu" : ""
                            } `}
                          >
                            All
                          </span>
                        </div>
                        {instractorNames.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => handleFilterInstractors(elm.title)}
                          >
                            <span
                              className={`d-block js-dropdown-link cursor ${
                                filterInstractors[0] == elm.title
                                  ? "activeMenu"
                                  : ""
                              } `}
                            >
                              {elm.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* <div className="col-auto">
                  <div
                    id="dd55button"
                    className="dropdown js-dropdown js-price-active"
                  >
                    <div
                      className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
                      onClick={() => {
                        document
                          .getElementById("dd55button")
                          .classList.toggle("-is-dd-active")
                        document
                          .getElementById("dd55content")
                          .classList.toggle("-is-el-visible")
                      }}
                      data-el-toggle=".js-price-toggle"
                      data-el-toggle-active=".js-price-active"
                    >
                      <span className="js-dropdown-title">
                        {filterPrice != "All" ? filterPrice : "Price"}
                      </span>
                      <i className="icon text-9 ml-40 icon-chevron-down"></i>
                    </div>

                    <div
                      id="dd55content"
                      className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-price-toggle"
                    >
                      <div className="text-14 y-gap-15 js-dropdown-list">
                        {prices.map((elm, i) => (
                          <div
                            key={i}
                            onClick={() => handleFilterPrice(elm.title)}
                          >
                            <span
                              className={`d-block js-dropdown-link cursor ${
                                filterPrice == elm.title ? "activeMenu" : ""
                              } `}
                            >
                              {elm.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default CourseFilter
