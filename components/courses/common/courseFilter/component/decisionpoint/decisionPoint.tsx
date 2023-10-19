/* eslint-disable no-unused-vars, react-hooks/exhaustive-deps */
"use client"
import React, { useState, useEffect } from "react"
import { useDecisionPointData } from "@/hooks/useCourseDecisionPoint"

interface IProps {
  onChangeDecisionPoint: (value: string) => void
}

const DecisionPointFilter: React.FC<IProps> = ({ onChangeDecisionPoint }) => {
  const [filterDecisionPoint, setFilterDecisionPoint] = useState<string>("")

  const handleFilterDecisionPoint = (item: string) => {
    if (filterDecisionPoint === item) {
      setFilterDecisionPoint("")
    } else {
      setFilterDecisionPoint(item)
    }
    const ddButton = document?.getElementById("dd53button")
    const ddContent = document?.getElementById("dd53content")
    ddButton?.classList.toggle("-is-dd-active")
    ddContent?.classList.toggle("-is-el-visible")
  }

  const { decisionPoint, loading, error } = useDecisionPointData()

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>Error happened....</h1>

  return (
    <div className="col-auto">
      <div id="dd53button" className="dropdown js-dropdown js-ratings-active">
        <div
          className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
          onClick={() => {
            const ddButton = document?.getElementById("dd53button")
            const ddContent = document?.getElementById("dd53content")
            ddButton?.classList.toggle("-is-dd-active")
            ddContent?.classList.toggle("-is-el-visible")
          }}
          data-el-toggle=".js-ratings-toggle"
          data-el-toggle-active=".js-ratings-active"
        >
          <span className="js-dropdown-title">
            {filterDecisionPoint
              ? `${filterDecisionPoint} to ${filterDecisionPoint}`
              : "I want"}
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
                setFilterDecisionPoint("")
                handleFilterDecisionPoint("all")
                onChangeDecisionPoint("all")
                const ddButton = document?.getElementById("dd53button")
                const ddContent = document?.getElementById("dd53content")
                ddButton?.classList.toggle("-is-dd-active")
                ddContent?.classList.toggle("-is-el-visible")
              }}
            >
              <span
                className={`d-block js-dropdown-link cursor ${
                  filterDecisionPoint === "" ? "activeMenu" : ""
                } `}
              >
                All
              </span>
            </div>
            {decisionPoint.map((elm, i) => (
              <div
                key={i}
                onClick={() => {
                  onChangeDecisionPoint(elm.title)
                  handleFilterDecisionPoint(elm.title)
                }}
              >
                <span
                  className={`d-block js-dropdown-link cursor ${
                    filterDecisionPoint === elm.title ? "activeMenu" : ""
                  } `}
                >
                  {elm.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export { DecisionPointFilter }
