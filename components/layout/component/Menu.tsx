"use client"

import React, { useState, useEffect } from "react"
import Link from "next/link"
import MobileFooter from "./MobileFooter"
import { menuList } from "@/data/menu"
import { usePathname } from "next/navigation"
interface IMenuProps {
  allClasses: any
  headerPosition: any
  links: any
}

const Menu: React.FC<IMenuProps> = ({ allClasses, headerPosition }) => {
  const [menuItem, setMenuItem] = useState("")
  const pathname = usePathname()

  useEffect(() => {
    menuList.forEach((elm) => {
      elm?.links?.forEach((elm2) => {
        if (elm2.href?.split("/")[1] == pathname.split("/")[1]) {
          setMenuItem(elm.title)
        } else {
          elm2?.links?.map((elm3: any) => {
            if (elm3.href?.split("/")[1] == pathname.split("/")[1]) {
              setMenuItem(elm.title)
            }
          })
        }
      })
    })
  }, [pathname])

  return (
    <div
      className={`header-menu js-mobile-menu-toggle ${
        headerPosition ? headerPosition : ""
      }`}
    >
      <div className="header-menu__content">
        <div className="mobile-bg js-mobile-bg"></div>
        <div className="menu js-navList">
          <ul className={`${allClasses ? allClasses : ""}`}>
            <li className="menu-item-has-children">
              <Link
                data-barba
                href="/"
                className={menuItem == "Home" ? "activeMenu" : ""}
              >
                Home
              </Link>
            </li>

            <li className="menu-item-has-children -has-mega-menu">
              <Link
                data-barba
                href="/courses"
                className={
                  pathname == "/courses" ? "activeMenu" : "inActiveMenuTwo"
                }
              >
                Courses
              </Link>
            </li>
            <li>
              <Link
                data-barba
                href="/contact"
                className={
                  pathname == "/contact" ? "activeMenu" : "inActiveMenuTwo"
                }
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <MobileFooter />
      </div>
      <div
        className="header-menu-close"
        data-el-toggle=".js-mobile-menu-toggle"
      >
        <div className="size-40 d-flex items-center justify-center rounded-full bg-white">
          <div className="icon-close text-dark-1 text-16"></div>
        </div>
      </div>

      <div className="header-menu-bg"></div>
    </div>
  )
}
export default Menu
