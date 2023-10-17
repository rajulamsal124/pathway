"use client"
import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { signOut, useSession } from "next-auth/react"

export default function Sidebar() {
  const { data: session } = useSession()
  const pathname = usePathname()

  // Define your navigation links here
  const sidebarItems = [
    { href: "/dashboard", text: "Dashboard", iconClass: "icon-dashboard" },
    { href: "/dshb-courses", text: "Create Course", iconClass: "icon-profile" },
    {
      href: "/dshb-courselists",
      text: "Course Lists",
      iconClass: "icon-settings",
    },
    {
      href: "/dshb-category",
      text: "Create Category",
      iconClass: "icon-profile",
    },
    {
      href: "/dshb-categorylist",
      text: "Category List",
      iconClass: "icon-profile",
    },

    // { href: "/dshb-settings", text: "Settings", iconClass: "icon-settings" },

    // Add more links as needed
  ]

  const handleSignout = async () => {
    const { url }: any = await signOut({ callbackUrl: "/login" })
    window.location.href = url // Redirect to the login page after signing out
  }

  return (
    <>
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
                  className={`sidebar__item ${
                    pathname == elm.href ? "-is-active" : ""
                  }`}
                >
                  <Link
                    key={i}
                    href={elm.href}
                    className="d-flex items-center text-17 lh-1 fw-500"
                  >
                    <i className={`${elm.iconClass} mr-15`}></i>
                    {elm.text}
                  </Link>
                </div>
              ))}
              {session ? (
                <div className="sidebar__item">
                  <button
                    onClick={handleSignout}
                    className="d-flex items-center text-17 lh-1 fw-500"
                  >
                    <i className="icon-logout mr-15"></i>
                    Logout
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
