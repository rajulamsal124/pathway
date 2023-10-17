"use client"
import FooterCopyright from "@/components/layout/footers/FooterCopyright"
import { useCategoryData, useCreateCategory } from "@/hooks/useCourseCategory"

import React from "react"
import { FaEdit, FaTrash } from "react-icons/fa"

export default function Listing() {
  const { categories } = useCategoryData()
  const { deleteCategory } = useCreateCategory()

  const handleDelete = async (id: string) => {
    try {
      const res: any = await deleteCategory(id)
    } catch (err) {
      console.log("Errorroror", err)
    }
  }
  const handelEdit = async (id: string) => {
    // if (window) {
    // window?.href.location = `/dshb-courseedit/${id}`
    // }
    // router.push(`/dshb-courseedit/${id}`)
  }
  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4 ">
        <div className="row pb-50">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Course Category List</h1>
            <div className="mt-10">
              <button>
                <a href="/dshb-courses" className="btn btn-primary">
                  Create New Course Category
                </a>
              </button>
            </div>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col"> ID</th>
                  <th scope="col">Title</th>
                  <th scope="col">Type</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((category) => (
                  <tr key={category.id}>
                    <td>{category.id}</td>
                    <td>{category.title}</td>
                    <td>{category.type}</td>
                    <td>
                      <>
                        {/* <a href={`/dshb-courseedit/${category?.id}`}>
                          <FaEdit onClick={() => handleEdit(category?.id)} />
                        </a>
                        <FaTrash onClick={() => handleDelete(catgory?.id)} /> */}
                        <a href="#">
                          <FaEdit />
                        </a>
                        <FaTrash onClick={() => handleDelete(category?.id)} />
                      </>
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
