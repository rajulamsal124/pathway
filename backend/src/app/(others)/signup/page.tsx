import Preloader from "@/app/components/common/Preloader";
import HeaderAuth from "@/app/components/layout/headers/HeaderAuth";
import SignUpForm from "@/app/components/others/SignUpForm";
import React from "react";

export default function page() {
  return (
    <div className="main-content  ">
      <Preloader />

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
  );
}
