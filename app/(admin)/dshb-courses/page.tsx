"use client"
import CreateCourse from "@/components/adminComponents/dashboard/createCourse/Listing"

import toast from "react-hot-toast"
import { useState } from "react"
import { ICourseForm } from "@/types/types"
import { useCategoryData } from "@/hooks/useCourseCategory"
import { useDecisionPointData } from "@/hooks/useCourseDecisionPoint"
import { useCreateCourse } from "@/hooks/useCourses"

export default function Page() {
  const { categories } = useCategoryData()
  const { createCourse } = useCreateCourse()
  const { decisionPoint } = useDecisionPointData()
  const [formData, setFormData] = useState<ICourseForm>({
    title: "",
    shortDescription: "",
    description: "",
    level: "",
    duration: "",
    providerName: "",
    providerUrl: "",
    providerDescription: "",
    image: "",
    courseCategoryId: "",
    decisionPointId: "",
    category: {
      id: "", // Initial values for categoryId and title
      title: "",
    },
    decisionPoint: {
      id: "",
      title: "",
    },
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      title: formData.title,
      shortDescription: formData.shortDescription,
      description: formData.description,
      image: formData.image,
      level: formData.level,
      duration: formData.duration,
      providerName: formData.providerName,
      providerUrl: formData.providerUrl,
      providerDescription: formData.providerDescription,
      courseCategoryId: formData.courseCategoryId,
      decisionPointId: formData.decisionPointId,
    }

    const success = await createCourse(data as any)
    if (success) {
      toast.success("Course created successfully")
      setFormData({
        title: "",
        shortDescription: "",
        description: "",
        level: "",
        duration: "",
        providerName: "",
        providerUrl: "",
        providerDescription: "",
        image: "",
        courseCategoryId: "",
        decisionPointId: "",
        category: {
          id: "",
          title: "",
        },
        decisionPoint: {
          id: "",
          title: "",
        },
      })
    } else {
      toast.error("Error creating course")
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
      const selectedCategory = categories.find(
        (category) => category.title === value
      )
      if (selectedCategory && selectedDecisionPoint) {
        setFormData({
          ...formData,
          category: {
            id: selectedCategory.id, // Set category.id to the selected category's id
            title: value,
          },
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
          category: {
            id: "",
            title: "",
          },
        })
        console.log("Category not found in the 'categories' array.")
      }
    } else {
      setFormData({ ...formData, [name]: value })
    }
  }
  return (
    <CreateCourse
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
      setFormData={setFormData}
      categories={categories}
      decisionPoint={decisionPoint}
    />
  )
}
