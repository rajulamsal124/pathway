import NotFound from "@/components/not-found/NotFound"

import Preloader from "@/components/common/Preloader"
import Footer from "@/components/layout/footers/Footer"
import Header from "@/components/layout/headers/Header"
import React from "react"
export const metadata = {
  title:
    "Page not found || Gippsland - Professional LMS Online Education Course NextJS Template",
  description:
<<<<<<< HEAD:client/src/app/not-found.tsx
    "Elevate your e-learning content with Gippsland, the most impressive LMS template for online courses, education and LMS platforms.",
};
=======
    "Elevate your e-learning content with Tafegippsland, the most impressive LMS template for online courses, education and LMS platforms.",
}
>>>>>>> ff0e0447ca9e1aa20357f0dc4b3d5a0b1e66cd67:app/(others)/not-found/page.tsx
export default function page() {
  return (
    <div className="main-content  ">
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        {/* <PageLinks /> */}
        <NotFound />
        <Footer />
      </div>
    </div>
  )
}
