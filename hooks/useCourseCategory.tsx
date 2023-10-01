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
