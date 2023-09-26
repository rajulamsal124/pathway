import SignUpForm from "@/components/others/SignUpForm"
import React from "react"

export default function page() {
  return (
    <div className="main-content  ">
      {/* <HeaderAuth /> */}
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <section className="form-page js-mouse-move-container">
          <div className="container">
            <div className="row justify-center items-center">
              <SignUpForm />
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
