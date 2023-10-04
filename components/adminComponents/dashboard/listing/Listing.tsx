"use client"

import { useCreateCourse } from "@/hooks/useCourses"
import { useCategoryData } from "@/hooks/useCourseCategory"
import { ICourse } from "@/types/types"
import toast from "react-hot-toast"
import { useState } from "react"

const CreateCourse: React.FC = () => {
  const { createCourse } = useCreateCourse() // Use the custom hook
  const { categories } = useCategoryData()

  const [courseData, setCourseData] = useState<ICourse>({
    title: "",
    shortDescription: "",
    description: "",
    level: "",
    duration: "",
    providerName: "", // Optional properties can be initialized as needed
    providerDescription: "",
    providerUrl: "",
    rolesName: [],
    rolesDescription: "",
    courseCategoryId: "", // Initialize with a suitable default value
    decisionPointId: "", // Initialize with a suitable default value
    rolesId: "", // Initialize with a suitable default value
    image: Buffer.from([]), // Initialize with an empty Buffer or as needed
  })

  const handleSubmit = async (e: any) => {
    e.preventDefault()

    // Call the createCourse function from the custom hook
    const success = await createCourse(courseData)
    console.log(courseData)

    if (success) {
      // Handle successful course creation, e.g., redirect to a success page
      toast.success("Hurray, Course created successfully!")
      console.log("Course created successfully!")
    } else {
      // Handle error case
      toast.error("Failed to create course.")
      console.error("Failed to create course.")
    }
  }

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setCourseData({
      ...courseData,
      [name]: value,
    })
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
                  onSubmit={handleSubmit}
                  action="http://localhost:3000/api/courses"
                  className="contact-form row y-gap-30"
                >
                  <div className="col-12">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Title*
                    </label>

                    <input
                      required
                      type="text"
                      name="title"
                      value={courseData.title}
                      onChange={handleInputChange}
                      placeholder="Course Title"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="category">Category:</label>
                    <select
                      id="category"
                      onChange={(e: any) => {
                        setCourseData({
                          ...courseData,
                          courseCategoryId: e.target.value,
                        })
                      }}
                    >
                      <option value="">All Categories</option>
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.title}
                          {console.log(category.title)}
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
                      value={courseData.shortDescription}
                      onChange={handleInputChange}
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
                      value={courseData.description}
                      onChange={handleInputChange}
                      placeholder="Description"
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
                      value={courseData.level}
                      onChange={handleInputChange}
                      placeholder="Course Level"
                    />
                  </div>
                  <div className="col-md-6">
                    <label className="text-16 lh-1 fw-500 text-dark-1 mb-10">
                      Course Level*
                    </label>
                    <input
                      required
                      type="text"
                      name="duration"
                      value={courseData.duration}
                      onChange={handleInputChange}
                      placeholder="Course Duration"
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
