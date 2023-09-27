"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"


export default function Sidebar() {
  const pathname = usePathname()


  // Define your navigation links here
  const sidebarItems = [
    { href: "/dashboard", text: "Dashboard", iconClass: "icon-dashboard" },
    { href: "/dshb-courses", text: "Create Course", iconClass: "icon-profile" },
    { href: "/dshb-settings", text: "Settings", iconClass: "icon-settings" },
    // Add more links as needed
  ]

  return (
    <div className="content-wrapper js-content-wrapper overflow-hidden">
      <div
        id="dashboardOpenClose"
        className="dashboard -home-9 js-dashboard-home-9"
      >
        <div className="dashboard__sidebar scroll-bar-1">
          <div className="sidebar -dashboard">
            {sidebarItems.map((elm, i) => (
              <div
                key={i}
                className={`sidebar__item   ${
                  pathname == elm.href ? "-is-active" : ""
                } `}
              >
                <Link
                  key={i}
                  href={elm.href}
                  className="d-flex items-center text-17 lh-1 fw-500 "
                >
                  <i className={`${elm.iconClass} mr-15`}></i>
                  {elm.text}
                </Link>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </div>
  )
}
