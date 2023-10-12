import { useState, useEffect } from "react"
import { ICourse, ICourseResponse, ICourseForm } from "@/types/types"
import toast from "react-hot-toast"

export function useCourseData(allFilters?: any[]) {
  const [courseData, setCourseData] = useState<ICourse[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error] = useState<string | null>(null)

  useEffect(() => {
    // Replace this with your actual API endpoint

    let newFilter = null

    if (allFilters && allFilters?.length > 0) {
      newFilter = allFilters
        .map((item) => {
          if (Object.values(item)[0] === "all") {
            return
          }
          return `${Object.keys(item)[0]}=${Object.values(item)[0]}`
        })
        .join("&")
    }

    let url = "http://localhost:3000/api/courses"
    if (newFilter) {
      url += `?${newFilter}`
    }

    fetch(url)
      .then((response) => response.json())
      .then((data: ICourseResponse) => {
        // Check if data.courses is defined before setting the state
        if (data?.courses !== undefined) {
          setCourseData(data?.courses)
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching course data:", error)
        setLoading(false)
      })
  }, [allFilters])

  return {
    courseData: courseData,
    loading,
    error,
  }
}

export function useCourseById(courseId: number) {
  const [course, setCourse] = useState<ICourse | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    // Replace this with your actual API endpoint
    fetch(`http://localhost:3000/api/courses/${courseId}`)
      .then((response) => response.json())
      .then((data: any) => {
        // Check if data.courses is defined before setting the state
        if (data?.courses !== undefined) {
          setCourse(data?.courses)
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching course data by ID:", error)
        setLoading(false)
      })
  }, [courseId])

  return {
    course,
    loading,
  }
}
// for admin panel mutation hooks to create a course
export function useCreateCourse() {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const createCourse = async (course: ICourseForm) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:3000/api/courses", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      })

      if (response.ok) {
        setLoading(false)
        return true
      } else {
        throw new Error("Something went wrong while creating the course")
      }
    } catch (error) {
      console.error(error)
      setLoading(false)
      return false
    }
  }

  const editCourse = async (course: any, id: string) => {
    // setLoading(true)
    // setError(null)

    try {
      const response = await fetch(`http://localhost:3000/api/courses/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(course),
      })

      if (response.ok) {
        // setLoading(false)
        return true
      } else {
        throw new Error("Something went wrong while editing the course")
      }
    } catch (error) {
      console.error(error)
      // setLoading(false)
      return false
    }
  }

  const deleteCourse = async (courseId: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/courses/${courseId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (response.ok) {
        setLoading(false)
        toast.error("Course deleted successfully")
        return true
      } else {
        throw new Error("Something went wrong while deleting the course")
      }
    } catch (error) {
      console.error(error)
      setLoading(false)
      return false
    }
  }

  return {
    loading,
    error,
    createCourse,
    deleteCourse,
    editCourse,
  }
}
