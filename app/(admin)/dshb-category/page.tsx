"use client"

import toast from "react-hot-toast"
import { ICategoryForm } from "@/types/types"
import { useCategoryData, useCreateCategory } from "@/hooks/useCourseCategory"
import { useDecisionPointData } from "@/hooks/useCourseDecisionPoint"
import CreateCategory from "@/components/adminComponents/dashboard/createCatgory/createCategory"
import { useState } from "react"

export default function Page() {
  const { categories } = useCategoryData()
  const { decisionPoint } = useDecisionPointData()
  const { createCategory } = useCreateCategory()
  const [formData, setFormData] = useState<ICategoryForm>({
    title: "",
    type: "",
    decisionPoint: {
      id: "",
      title: "",
    },
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      title: formData.title,
      type: formData.type,
      courseCategoryId: formData.courseCategoryId,
      decisionPointId: formData.decisionPointId,
    }

    const success = await createCategory(data as any)
    if (success) {
      toast.success("Category created successfully")
      setFormData({
        title: "",
        type: "",
        decisionPointId: "",
        decisionPoint: {
          id: "",
          title: "",
        },
      })
    } else {
      toast.error("Error creating category")
    }
  }

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    console.log(e.target.value)
    const { name, value } = e.target

    if (name === "courseCategoryId") {
      // When the category dropdown changes, set the category.id
      setFormData({
        ...formData,
        courseCategoryId: value,
      })
    } else if (name === "category") {
      // Assuming you have a 'categories' array that holds the available categories.
      const selectedDecisionPoint = decisionPoint.find(
        (decisionPoint) => decisionPoint.title === value
      )

      if (selectedDecisionPoint) {
        setFormData({
          ...formData,
          decisionPoint: {
            id: selectedDecisionPoint.id,
            title: value,
          },
        })
      } else {
        // Category not found, set both properties to null
        setFormData({
          ...formData,
          courseCategoryId: "",
          decisionPoint: {
            id: "",
            title: "",
          },
        })
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }
  return (
    <CreateCategory
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
      setFormData={setFormData}
      categories={categories}
      decisionPoint={decisionPoint}
    />
  )
}
