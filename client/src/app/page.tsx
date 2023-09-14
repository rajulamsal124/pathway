import React from "react";
import HeaderTwo from "@/components/layout/headers/HeaderTwo";
import HeroTwo from "@/components/homes/heros/HeroTwo";
import CoursesThree from "../components/homes/courses/CoursesThree";
import FindLearningPath from "@/components/homes/FindLearningPath";
import LearningSolutions from "../components/homes/LearningPath/LearningSolutions";
import CategoriesTwo from "@/components/homes/categories/CategoriesTwo";
import BecomeInstactor from "@/components/common/BecomeInstactor";
import BecomeStudent from "../components/common/BecomeInstactor";
import Brands from "@/components/common/Brands";

import Footer from "@/components/layout/footers/Footer";
import Preloader from "@/components/common/Preloader";
export const metadata = {
  title:
    "Home || Tafegippsland - Professional LMS Online Education Course NextJS Template",
  description:
    "Elevate your e-learning content with Tafegippsland, the most impressive LMS template for online courses, education and LMS platforms.",
};
export default function page() {
  return (
    <>
      <Preloader />
      <HeaderTwo />
      <div className="main-content overflow-hidden   ">
        <HeroTwo />
        <CoursesThree />
        <FindLearningPath />
        <LearningSolutions />
        <CategoriesTwo />
        <Footer />
      </div>
    </>
  );
}
