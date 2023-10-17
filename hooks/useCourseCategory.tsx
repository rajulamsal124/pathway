import { ICategoryForm } from "@/types/types"
import { useState, useEffect } from "react"
import toast from "react-hot-toast"

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
export function useCreateCategory() {
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)

  const createCategory = async (category: ICategoryForm) => {
    setLoading(true)
    setError(null)

    try {
      const response = await fetch("http://localhost:3000/api/category", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      })

      if (response.ok) {
        setLoading(false)
        return true
      } else {
        throw new Error("Something went wrong while creating the category")
      }
    } catch (error) {
      console.error(error)
      setLoading(false)
      return false
    }
  }

  const editCategory = async (category: any, id: string) => {
    // setLoading(true)
    // setError(null)

    try {
      const response = await fetch(`http://localhost:3000/api/category/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(category),
      })

      if (response.ok) {
        // setLoading(false)
        return true
      } else {
        throw new Error("Something went wrong while editing the category")
      }
    } catch (error) {
      console.error(error)
      // setLoading(false)
      return false
    }
  }

  const deleteCategory = async (categoryId: string) => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/category/${categoryId}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )

      if (response.ok) {
        setLoading(false)
        toast.error("Category deleted successfully")
        return true
      } else {
        throw new Error("Something went wrong while deleting the category")
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
    createCategory,
    editCategory,
    deleteCategory,
  }
}
