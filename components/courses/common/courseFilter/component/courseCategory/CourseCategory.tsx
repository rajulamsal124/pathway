/* eslint-disable no-unused-vars, , react-hooks/exhaustive-deps */
"use client"
import { useCategoryData } from "@/hooks/useCourseCategory"
import { useState, useEffect } from "react"

interface IProps {
  onChangeCategory: (value: string) => void
}

const CategoryFilter: React.FC<IProps> = ({ onChangeCategory }) => {
  const [filterCategories, setFilterCategories] = useState<any>("")

  const handleFilterCategories = (item: any) => {
    setFilterCategories(item)
    document?.getElementById("dd52button")?.classList.toggle("-is-dd-active")
    document?.getElementById("dd52content")?.classList.toggle("-is-el-visible")
  }

  const { categories, loading, error } = useCategoryData()

  if (loading) return <h1>Loading...</h1>

  if (error) return <h1>error happen....</h1>

  return (
    <div className="col-auto">
      <div id="dd52button" className="dropdown js-dropdown js-category-active">
        <div
          className="dropdown__button d-flex items-center text-14 rounded-8 px-20 py-10 text-14 lh-12"
          onClick={() => {
            document
              ?.getElementById("dd52button")
              ?.classList.toggle("-is-dd-active")
            document
              ?.getElementById("dd52content")
              ?.classList.toggle("-is-el-visible")
          }}
          data-el-toggle=".js-category-toggle"
          data-el-toggle-active=".js-category-active"
        >
          <span className="js-dropdown-title">
            {filterCategories !== "" ? filterCategories : "Category"}
          </span>
          <i className="icon text-9 ml-40 icon-chevron-down"></i>
        </div>

        <div
          id="dd52content"
          className="toggle-element -dropdown -dark-bg-dark-2 -dark-border-white-10 js-click-dropdown js-category-toggle"
        >
          <div
            className="text-14 y-gap-15 js-dropdown-list"
            // onClick={() => handleFilterCategories("all")}
          >
            <div
              onClick={() => {
                handleFilterCategories("all")
                onChangeCategory("all")

                document
                  ?.getElementById("dd52button")
                  ?.classList.toggle("-is-dd-active")
                document
                  ?.getElementById("dd52content")
                  ?.classList.toggle("-is-el-visible")
              }}
            >
              <span
                className={`d-block js-dropdown-link cursor ${
                  filterCategories == "all" ? "activeMenu" : ""
                } `}
              >
                All
              </span>
            </div>
            {categories.map((elm, i) => (
              <div key={i} onClick={() => {
                handleFilterCategories(elm.title)
                onChangeCategory(elm.title)
              }}>
                <span
                  className={`d-block js-dropdown-link cursor ${
                    filterCategories == elm.title ? "activeMenu" : ""
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

export { CategoryFilter }
