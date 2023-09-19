import React from "react";
import HeaderTwo from "@/components/layout/headers/HeaderTwo";
import HeroTwo from "@/components/homes/heros/HeroTwo";
import FindLearningPath from "@/components/homes/FindLearningPath";
import LearningSolutions from "../components/homes/LearningPath/LearningSolutions";
import CategoriesTwo from "@/components/homes/categories/CategoriesTwo";

import Footer from "@/components/layout/footers/Footer";
import Preloader from "@/components/common/Preloader";
import CourseListFive from "@/components/courseList/CourseListFive";

export default function page() {
  return (
    <>
      <Preloader />
      <HeaderTwo />
      <div className="main-content overflow-hidden   ">
        <HeroTwo />

        <CourseListFive />
        <FindLearningPath />
        <LearningSolutions />
        <CategoriesTwo />
        <Footer />
      </div>
    </>
  );
}
