"use client"
import React, { useEffect, useState } from "react"
import { notifications } from "@/data/notifications"
import Link from "next/link"
import Image from "next/image"
export default function HeaderDashboard() {
  const [isfullScreen, setIsfullScreen] = useState<boolean>(false)
  const [isOnNotification, setIsOnNotification] = useState<boolean>(false)
  const [documentElement, setDocumentElement] = useState<HTMLElement | null>(
    null
  )

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  // }

  const handleFullScreenToggle = () => {
    setIsfullScreen((prev) => !prev)
    if (!isfullScreen) {
      openFullscreen()
    } else {
      closeFullscreen()
    }
  }

  useEffect(() => {
    setDocumentElement(document.documentElement)
  }, [])

  const openFullscreen = () => {
    if (documentElement?.requestFullscreen) {
      documentElement.requestFullscreen()
    } else if ((documentElement as any)?.webkitRequestFullscreen) {
      // Use type assertion (as any)
      /* Safari */
      ;(documentElement as any).webkitRequestFullscreen() // Type assertion
    } else if ((documentElement as any)?.msRequestFullscreen) {
      // Use type assertion (as any)
      /* IE11 */
      ;(documentElement as any).msRequestFullscreen() // Type assertion
    }
  }

  const handleDarkmode = () => {
    if (document) {
      document.getElementsByTagName("html")[0].classList.toggle("-dark-mode")
    }
  }
  const closeFullscreen = () => {
    if (document?.exitFullscreen) {
      document.exitFullscreen()
    } else if ((document as any)?.webkitExitFullscreen) {
      // Use type assertion (as any)
      /* Safari */
      ;(document as any).webkitExitFullscreen() // Type assertion
    } else if ((document as any)?.msExitFullscreen) {
      // Use type assertion (as any)
      /* IE11 */
      ;(document as any).msExitFullscreen() // Type assertion
    }
  }

  const handleResize = () => {
    if (window.innerWidth < 990) {
      const dashboardOpenClose = document.getElementById("dashboardOpenClose")
      if (dashboardOpenClose) {
        dashboardOpenClose.classList.add("-is-sidebar-hidden")
      }
    }
  }

  useEffect(() => {
    handleResize()

    // Add event listener to window resize event
    window.addEventListener("resize", handleResize)

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <header className="header -dashboard -dark-bg-dark-1 js-header">
        <div className="header__container py-20 px-30">
          <div className="row justify-between items-center">
            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="header__explore text-dark-1">
                  {/* <button
                    onClick={() => {
                      document
                        .getElementById("dashboardOpenClose")
                        .classList.toggle("-is-sidebar-hidden");
                    }}
                    className="d-flex items-center js-dashboard-home-9-sidebar-toggle"
                  >
                    <i className="icon -dark-text-white icon-explore"></i>
                  </button> */}
                </div>

                <div className="header__logo ml-30 md:ml-20">
                  <Link href="/dashboard">
                    {/* <Image
                      width={140}
                      height={50}
                      className="-light-d-none"
                      src="/assets/img/general/logo.svg"
                      alt="logo"
                    /> */}
                    {/* <Image
                      width={140}
                      height={50}
                      className="-dark-d-none"
                      src="/assets/img/general/logo-dark.svg"
                      alt="logo"
                    /> */}
                    <h3>Gippsland Pathway Expoler</h3>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-auto">
              <div className="d-flex items-center">
                <div className="text-white d-flex items-center lg:d-none mr-15">
                  <div className="dropdown bg-transparent px-0 py-0">
                    <div className="d-flex items-center text-14 text-dark-1">
                      All Pages
                      <i className="text-9 icon-chevron-down ml-10"></i>
                    </div>
                    <div className="dropdown__item -dark-bg-dark-2 -dark-border-white-10">
                      <div className="text-14 y-gap-15">
                        <div>
                          <Link
                            href="/dashboard"
                            className="d-block text-dark-1"
                          >
                            Dashboard
                          </Link>
                        </div>

                        <div>
                          <Link href="/courses" className="d-block text-dark-1">
                            Add Listing
                          </Link>
                        </div>

                        <div>
                          <Link
                            href="/dshb-settings"
                            className="d-block text-dark-1"
                          >
                            Settings
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* <MyCourses /> */}
                </div>

                <div className="d-flex items-center sm:d-none">
                  <div className="relative">
                    <button
                      onClick={handleDarkmode}
                      className="js-darkmode-toggle text-light-1 d-flex items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                    >
                      <i className="text-24 icon icon-night"></i>
                    </button>
                  </div>

                  <div className="relative">
                    <button
                      onClick={handleFullScreenToggle}
                      className="d-flex text-light-1 items-center justify-center size-50 rounded-16 -hover-dshb-header-light"
                    >
                      <i className="text-24 icon icon-maximize"></i>
                    </button>
                  </div>

                  {/* <div
                    className="relative"
                    onClick={() => setMessageOpen(true)}
                  >
                    <a
                      href="#"
                      className="d-flex items-center text-light-1 justify-center size-50 rounded-16 -hover-dshb-header-light"
                      data-el-toggle=".js-msg-toggle"
                    >
                      <i className="text-24 icon icon-email"></i>
                    </a>
                  </div> */}

                  <div
                    className="relative"
                    onClick={() => setIsOnNotification((prev) => !prev)}
                  >
                    <a
                      href="#"
                      className="d-flex items-center text-light-1 justify-center size-50 rounded-16 -hover-dshb-header-light"
                      data-el-toggle=".js-notif-toggle"
                    >
                      <i className="text-24 icon icon-notification"></i>
                    </a>

                    <div
                      className={`toggle-element js-notif-toggle  ${
                        isOnNotification ? "-is-el-visible" : ""
                      } -`}
                    >
                      <div className="toggle-bottom -notifications bg-white shadow-4 border-light rounded-8 mt-10">
                        <div className="py-30 px-30">
                          <div className="y-gap-40">
                            {notifications.map((elm, i) => (
                              <div
                                key={i}
                                className={`d-flex items-center  ${
                                  i !== 0
                                    ? "border-top-light -dark-border-top-light-5"
                                    : ""
                                } `}
                              >
                                <div className="shrink-0">
                                  <Image
                                    width={40}
                                    height={40}
                                    src={elm.imageSrc}
                                    alt="image"
                                  />
                                </div>
                                <div className="ml-12">
                                  <h4 className="text-15 lh-1 fw-500 -dark-text-dark-1">
                                    {elm.heading}
                                  </h4>
                                  <div className="text-13 lh-1 mt-10">
                                    {elm.time} Hours Ago
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div
                  className="relative d-flex items-center ml-10"
                  onClick={() => setIsOnProfile((prev) => !prev)}
                >
                  <a href="#" data-el-toggle=".js-profile-toggle">
                    <Image
                      width={50}
                      height={50}
                      className="size-50"
                      src="/assets/img/misc/user-profile.png"
                      alt="image"
                    />
                  </a>

                  <div
                    className={`toggle-element js-profile-toggle ${
                      isOnProfile ? "-is-el-visible" : ""
                    } -`}
                  >
                    <div className="toggle-bottom -profile bg-white shadow-4 border-light rounded-8 mt-10">
                      <div className="px-30 py-30">
                        <div className="sidebar -dashboard">
                          {sidebarItems.map((elm, i) => (
                            <div
                              key={i}
                              className={`sidebar__item ${
                                elm.id === 1 ? "-is-active -dark-bg-dark-2" : ""
                              }`}
                            >
                              <a
                                href={elm.href}
                                className="d-flex items-center text-17 lh-1 fw-500 "
                              >
                                <i className={elm.iconClass}></i>
                                {elm.text}
                              </a>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <Messages setMessageOpen={setMessageOpen} messageOpen={messageOpen} /> */}
      </header>
    </>
  )
}
