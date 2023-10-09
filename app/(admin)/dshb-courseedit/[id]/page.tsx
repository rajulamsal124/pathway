"use client"
import CreateCourse from "@/components/adminComponents/dashboard/createCourse/Listing"
import React, { useEffect } from "react"

import toast from "react-hot-toast"
import { useState } from "react"
import { ICourseForm } from "@/types/types"
import { useCategoryData } from "@/hooks/useCourseCategory"
import { useCreateCourse, useCourseById } from "@/hooks/useCourses"

export default function Page({ params }: any) {
  const id = params.id
  const { categories } = useCategoryData()
  const { course, loading } = useCourseById(id)
  const { editCourse } = useCreateCourse()

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
    category: {
      id: "", // Initial values for categoryId and title
      title: "",
    },
  })

  useEffect(() => {
    console.log(course)
    if (course) {
      const data: any = {
        title: course?.title,
        shortDescription: course?.shortDescription,
        description: course?.description,
        level: course?.level,
        duration: course?.duration,
        providerName: course?.providerName,
        providerUrl: course?.providerUrl,
        providerDescription: course?.providerDescription,
        image: course?.image,
        courseCategoryId: course?.courseCategoryId,
        category: {
          id: "", // Initial values for categoryId and title
          title: "",
        },
      }
      setFormData(data)
    }
  }, [course])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const id = params.id
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
    }
    const success = await editCourse(data as any, id)
    if (success) {
      toast.success("Course Updated successfully")
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
        category: {
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
      const selectedCategory = categories.find(
        (category) => category.title === value
      )

      if (selectedCategory) {
        setFormData({
          ...formData,
          category: {
            id: selectedCategory.id, // Set category.id to the selected category's id
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
  if (loading) {
    return <div>Loading...</div>
  }
  return (
    <CreateCourse
      handleSubmit={handleSubmit}
      handleChange={handleChange}
      formData={formData}
      setFormData={setFormData}
      categories={categories}
    />
  )
}
