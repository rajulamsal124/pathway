"use client"
import { useDecisionPointData } from "@/hooks/useCourseDecisionPoint"
import { get } from "lodash"
import { useState, useEffect } from "react"
interface IProps {
  onChangeDecisionPoint: (value: string) => void
}

const DecisionPointFilter: React.FC<IProps> = ({ onChangeDecisionPoint }) => {
  const [filterDecisionPoint, setFilterDecisionPoint] = useState<any>([])

  const handleFilterDecisionPoint = (item: any) => {
    if (filterDecisionPoint.includes(item)) {
      setFilterDecisionPoint([])
    } else {
      setFilterDecisionPoint([item])
    }
    document?.getElementById("dd52button")?.classList.toggle("-is-dd-active")
    document?.getElementById("dd52content")?.classList.toggle("-is-el-visible")
  }

  const { decisionPoint, loading, error } = useDecisionPointData()

  useEffect(() => {
    if (filterDecisionPoint && filterDecisionPoint?.length > 0) {
      onChangeDecisionPoint(filterDecisionPoint[0])
    }
  }, [filterDecisionPoint, onChangeDecisionPoint])

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>error happen....</h1>
  return (
    <div className="col-auto">
      <div id="dd53button" className="dropdown js-dropdown js-ratings-active">
        <div
          className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
          onClick={() => {
            // document
            //   ?.getElementById("dd53button")
            //   .classList.toggle("-is-dd-active");
            // document
            //   .getElementById("dd53content")
            //   .classList.toggle("-is-el-visible");
            document
              ?.getElementById("dd53button")
              ?.classList.toggle("-is-dd-active")
            document
              ?.getElementById("dd53content")
              ?.classList.toggle("-is-el-visible")
          }}
          data-el-toggle=".js-ratings-toggle"
          data-el-toggle-active=".js-ratings-active"
        >
          <span className="js-dropdown-title">
            {filterDecisionPoint.length
              ? `${filterDecisionPoint[0]} to ${filterDecisionPoint[1]}`
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
                setFilterDecisionPoint([])
                //     document
                //       ?.getElementById("dd53button")
                //       .classList.toggle("-is-dd-active");
                //     document
                //       .getElementById("dd53content")
                //       .classList.toggle("-is-el-visible");
                //   }}
                document
                  ?.getElementById("dd53button")
                  ?.classList.toggle("-is-dd-active")
                document
                  ?.getElementById("dd53content")
                  ?.classList.toggle("-is-el-visible")
              }}
            >
              <span
                className={`d-block js-dropdown-link cursor ${
                  filterDecisionPoint.length == 0 ? "activeMenu" : ""
                } `}
              >
                All
              </span>
            </div>
            {decisionPoint.map((elm, i) => (
              <div key={i} onClick={() => handleFilterDecisionPoint(elm.title)}>
                <span
                  className={`d-block js-dropdown-link cursor ${
                    filterDecisionPoint[0] == elm.title ? "activeMenu" : ""
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
