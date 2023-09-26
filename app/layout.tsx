"use client"

import "../public/assets/sass/styles.scss"

import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
// import "react-calendar/dist/Calendar.css";
import { Toaster } from "react-hot-toast"

config.autoAddCss = false

import AOS from "aos"
import "aos/dist/aos.css"

import { useEffect } from "react"
import Providers from "./provider"

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 120,
      easing: "ease-out",
      once: true,
    })
  }, [])

  return (
    <html lang="en" className="">
      <head></head>
      <body>
        <Providers> {children} <Toaster /></Providers>
      </body>
    </html>
  )
}
