import { useState, useEffect } from "react"
import { ICourse, ICourseResponse } from "@/types/types"

export function useCourseData(allFilters: any[]) {
  const [courseData, setCourseData] = useState<ICourse[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error] = useState<string | null>(null)

  useEffect(() => {
    // Replace this with your actual API endpoint

    let newFilter = null

    if (allFilters && allFilters?.length > 0) {
      newFilter = allFilters
        .map((item) => {
          return `${Object.keys(item)[0]}=${Object.values(item)[0]}`
        })
        .join("&&")
    }

    let url = "http://localhost:3000/api/courses"
    if (newFilter) {
      url += `?${newFilter}`
    }

    fetch(url)
      .then((response) => response.json())
      .then((data: ICourseResponse) => {
        setCourseData(data?.courses)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching course data:", error)
        setLoading(false)
      })
  }, [allFilters])

  return {
    courseData,
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
      .then((data: ICourseResponse) => {
        setCourse(data?.courses)
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
