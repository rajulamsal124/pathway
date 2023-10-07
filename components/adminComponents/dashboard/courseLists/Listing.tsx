"use client"
import FooterCopyright from "@/components/layout/footers/FooterCopyright"
import { useCategoryData } from "@/hooks/useCourseCategory"
import { useDecisionPointData } from "@/hooks/useCourseDecisionPoint"
import { useCourseData } from "@/hooks/useCourses"
import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"
export default function Listing() {
  const { courseData } = useCourseData()
  const { categories } = useCategoryData()
  const { decisionPoint } = useDecisionPointData()
  const getCategoryTitle = (categoryId: any) => {
    const category = categories.find((c) => c.id === categoryId)
    return category ? category.title : ""
  }

  const getDecisionPointTitle = (decisionPointId: any) => {
    const decisionpoint = decisionPoint.find(
      (dp: any) => dp.id === decisionPointId
    )
    return decisionpoint ? decisionpoint.title : ""
  }

  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4 ">
        <div className="row pb-50">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Course List</h1>
            <div className="mt-10"></div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Course ID</th>
                  <th scope="col">Course Title</th>
                  <th scope="col">Decision Point</th>
                  <th scope="col">Category</th>
                  <th scope="col">Duration</th>
                  <th scope="col">Level</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {courseData.map((course) => (
                  <tr key={course.id}>
                    <td>{course.id}</td>
                    <td>{course.title}</td>
                    <td>{getDecisionPointTitle(course.decisionPointId)}</td>
                    <td>{getCategoryTitle(course.courseCategoryId)}</td>
                    <td>{course.duration}</td>
                    <td>{course.level}</td>
                    <td>
                      <FaEdit />
                      <FaTrash />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <FooterCopyright />
    </div>
  )
}
