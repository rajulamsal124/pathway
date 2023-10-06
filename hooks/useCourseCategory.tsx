import { useQuery, QueryKey } from "@tanstack/react-query"
import { useState, useEffect } from "react"

export function useCategoryData() {
  const [courseCategory, setCourseCategory] = useState<any[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error] = useState<string | null>(null)

  useEffect(() => {
    // Replace this with your actual API endpoint
    fetch("http://localhost:3000/api/category")
      .then((response) => response.json())
      .then((data: any[]) => {
        if (data && data?.length > 0) {
          const newData = data?.map((item) => {
            return {
              id: item?.id,
              title: item?.title,
              type: item?.type,
            }
          })
          setCourseCategory(newData)
        }
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching course data:", error)
        setLoading(false)
      })
  }, [])

  return {
    categories: courseCategory,
    loading,
    error,
  }
}

export function useCourseCategories() {
  const queryKey = ["categories"] // Define your query key as an array of strings
  return useQuery(queryKey, async () => {
    const response = await fetch("http://localhost:3000/api/category")
    if (!response.ok) {
      throw new Error("Something went wrong")
    }
    return response.json()
  })
}
