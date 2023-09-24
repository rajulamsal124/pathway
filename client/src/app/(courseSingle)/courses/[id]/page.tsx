"use client";
import PageLinks from "@/components/common/PageLinks";
import Preloader from "@/components/common/Preloader";

import CourseDetailsFive from "@/components/courseSingle/CourseDetailsFive";

import CourseSlider from "@/components/courseSingle/CourseSlider";
import Footer from "@/components/layout/footers/Footer";

import Header from "@/components/layout/headers/Header";
import React from "react";

export default function page({ params }) {
  return (
    <div className="main-content  ">
      <Preloader />
      <Header />
      <div className="content-wrapper  js-content-wrapper">
        {/* <PageLinks dark={true} /> */}
        <CourseDetailsFive id={params.id} />
        <CourseSlider />
        <Footer />
      </div>
    </div>
  );
}
