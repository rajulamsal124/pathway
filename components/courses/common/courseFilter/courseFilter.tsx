"use client"
import React from "react"
import {
  ICourse,
  ICourseCategory,
  IDecisionPoint,
  IProvider,
  IRole,
} from "@/types/types"
const CourseFilter: React.FC<{
  courses: ICourse[]
  categories: ICourseCategory[]
  decisionPoints: IDecisionPoint[]
  roles: IRole[]
  onFilterChange: (filterType: string, value: string) => void
  onSearchChange: (searchText: string) => void
}> = ({
  categories,
  decisionPoints,
  roles,
  onFilterChange,
  onSearchChange,
}) => {
  console.log("categories", categories)
  return (
    <div>
      <h2>Course Filters</h2>
      {/* Category Filter */}
      <label htmlFor="category">Category:</label>
      <select
        id="category"
        onChange={(e) => onFilterChange("category", e.target.value)}
      >
        <option value="">All Categories</option>
        {/* {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.categoryName}
          </option>
        ))} */}
      </select>

      {/* Decision Point Filter */}
      <label htmlFor="decisionPoint">Decision Point:</label>
      <select
        id="decisionPoint"
        onChange={(e) => onFilterChange("decisionPoint", e.target.value)}
      >
        <option value="">All Decision Points</option>
        {/* {decisionPoints.map((decisionPoint) => (
          <option key={decisionPoint.id} value={decisionPoint.id}>
            {decisionPoint.decisionPointName}
          </option>
        ))} */}
      </select>

      {/* Role Filter */}
      <label htmlFor="role">Role:</label>
      <select
        id="role"
        onChange={(e) => onFilterChange("role", e.target.value)}
      >
        <option value="">All Roles</option>
        {/* {roles.map((role) => (
          <option key={role.id} value={role.id}>
            {role.rolesName}
          </option>
        ))} */}
      </select>

      {/* Search Bar */}
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        placeholder="Search courses..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  )
}

export default CourseFilter
