import React from "react"

import Headers from "@/components/layout/headers/Headers"
import Hero from "@/components/heros/Heors"
import Footer from "@/components/layout/footers/Footer"

export default function page() {
  return (
    <>
      <Headers />
      <div className="main-content overflow-hidden">
        <Hero />
        <Footer />
      </div>
    </>
  )
}
