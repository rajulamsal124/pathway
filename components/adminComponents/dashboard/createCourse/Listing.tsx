"use client"

import { useCreateCourse } from "@/hooks/useCourses"
import { useCategoryData } from "@/hooks/useCourseCategory"
import toast from "react-hot-toast"
import { useState } from "react"
import { ICourseForm } from "@/types/types"

const CreateCourse: React.FC = () => {
  const { categories } = useCategoryData()
  const { createCourse } = useCreateCourse()
  const [formData, setFormData] = useState<ICourseForm>({
    title: "",
    shortDescription: "",
    description: "",
    level: "",
    duration: "",
    image: "",
    courseCategoryId: "",
    category: {
      id: "", // Initial values for categoryId and title
      title: "",
    },
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const success = await createCourse(formData)
    if (success) {
      toast.success("Course created successfully")
      setFormData({
        title: "",
        shortDescription: "",
        description: "",
        level: "",
        duration: "",
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

  return (
    <div className="dashboard__main">
      <div className="dashboard__content bg-light-4">
        <div className="row pb-50 mb-10">
          <div className="col-auto">
            <h1 className="text-30 lh-12 fw-700">Create New Course</h1>
            <div className="mt-10">
              Lorem ipsum dolor sit amet, consectetur.
            </div>
          </div>
        </div>

        <div className="row y-gap-60">
          <div className="col-12">
            <div className="rounded-16 bg-white -dark-bg-dark-1 shadow-4 h-100">
              <div className="d-flex items-center py-20 px-30 border-bottom-light">
                <h2 className="text-17 lh-1 fw-500">Basic Information</h2>
              </div>

              <div className="py-30 px-30">
                <form
                  className="contact-form row y-gap-30"
                  onSubmit={handleSubmit}
                >
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Title*
                    </label>

                    <input
                      required
                      type="text"
                      name="title"
                      placeholder="Course Title"
                      value={formData.title}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="category">Category:</label>
                    <select
                      id="courseCategoryId"
                      name="categoryCategoryId"
                      value={formData.category ? formData.category.id : ""}
                      onChange={handleChange}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.title}>
                          {category.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Short Description*
                    </label>

                    <textarea
                      required
                      placeholder="Short Description"
                      name="shortDescription"
                      value={formData.shortDescription}
                      onChange={handleChange}
                      rows={7}
                    ></textarea>
                  </div>

                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Description*
                    </label>

                    <textarea
                      required
                      name="description"
                      placeholder="Description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={7}
                    ></textarea>
                  </div>
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Level*
                    </label>
                    <input
                      required
                      type="text"
                      name="level"
                      placeholder="Course Level"
                      value={formData.level}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Duration*
                    </label>
                    <input
                      required
                      type="text"
                      name="duration"
                      value={formData.duration}
                      onChange={handleChange}
                      placeholder="Course Duration"
                    />
                  </div>
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Upload Image*
                    </label>
                    <input
                      required
                      type="text"
                      name="image"
                      value={formData.image}
                      onChange={handleChange}
                      placeholder="Course Image Url"
                    />
                  </div>
                  <div className="col-12">
                    <button
                      type="submit" // This makes it a submit button
                      className="button -md -purple-1 text-white"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateCourse
