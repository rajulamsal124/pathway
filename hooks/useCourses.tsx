import { useState, useEffect } from "react"
import { ICourse } from "@/types/types"

export function useCourseData() {
  const [courseData, setCourseData] = useState<ICourse[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Replace this with your actual API endpoint
    fetch("http://localhost:3000/api/courses")
      .then((response) => response.json())
      .then((data: ICourse[]) => {
        setCourseData(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error("Error fetching course data:", error)
        setLoading(false)
      })
  }, [])

  return {
    courseData,
    loading,
    error
  }
}


export function useCourseById(courseId:number) {
  const [course, setCourse] = useState<ICourse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Replace this with your actual API endpoint
    fetch(`http://localhost:3000/api/courses/${courseId}`)
      .then((response) => response.json())
      .then((data: ICourse) => {
        setCourse(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching course data by ID:", error);
        setLoading(false);
      });
  }, [courseId]);

  return {
    course,
    loading,
  };
}
