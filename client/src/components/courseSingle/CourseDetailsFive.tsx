"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";

import Overview from "./Overview";
import CourseContent from "./CourseContent";
import Reviews from "./Reviews";

const menuItems = [
  { id: 1, href: "#overview", text: "Overview", isActive: true },
  { id: 2, href: "#course-content", text: "Course Content", isActive: false },
  { id: 3, href: "#instructors", text: "Instructors", isActive: false },
  { id: 4, href: "#reviews", text: "Reviews", isActive: false },
];

async function fetchCourseById(courseId) {
  const res = await fetch(`http://localhost:3000/api/courses/${courseId}`);
  if (!res.ok) {
    throw new Error(
      `Failed to fetch course with ID ${courseId}: ${res.statusText}`
    );
  }
  return await res.json();
}

export default function CourseDetailsFive({ id }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(1);

  const {
    data: course,
    error,
    isLoading,
  } = useQuery(["course", id], () => fetchCourseById(id));

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error has occurred: {error.message}</div>;

  return (
    <>
      <div className="d-flex justify-content-center align-item-center"></div>
      <div className="relative">
        <section className="page-header -type-5 ">
          <div className="container">
            <div className="page-header__content pt-60">
              <div className="row relative">
                <div className="col-xl-6 col-lg-8">
                  <div className="mt-50">
                    <h1 className="text-30 lh-14 pr-60 lg:pr-0">
                      {course.title}
                    </h1>
                  </div>

                  <p className="col-xl-9 mt-20">
                    Use XD to get a job in UI Design, User Interface, User
                    Experience design, UX design & Web Design
                  </p>

                  <div className="d-flex x-gap-30 y-gap-10 items-center flex-wrap pt-20">
                    {/* <div className="d-flex items-center text-light-1">
                    <div className="text-14 lh-1 text-yellow-1 mr-10">
                      {pageItem.rating}
                    </div>
                    <div className="d-flex x-gap-10 items-center">
                      <Star star={pageItem.rating} />
                    </div>
                    <div className="text-14 lh-1 ml-10">
                      ({pageItem.ratingCount})
                    </div>
                  </div> */}

                    <div className="d-flex items-center text-light-1">
                      <div className="icon icon-person-3 text-13"></div>
                      <div className="text-14 ml-8">
                        853 enrolled on this course
                      </div>
                    </div>

                    <div className="d-flex items-center text-light-1">
                      <div className="icon icon-wall-clock text-13"></div>
                      <div className="text-14 ml-8">Last updated 11/2021</div>
                    </div>
                  </div>

                  <div className="d-flex items-center pt-20">
                    {/* <div
                    className="bg-image size-30 rounded-full js-lazy"
                    style={{
                      backgroundImage: `url(${pageItem.authorImageSrc})`,
                    }}
                  ></div> */}
                    {/* <div className="text-14 lh-1 ml-10">
                    {pageItem.authorName}
                  </div> */}
                  </div>
                </div>

                <div className="col-lg-8">
                  <div className="relative pt-40">
                    <Image
                      width={510}
                      height={360}
                      className="w-1/1"
                      src={`data:image/jpeg;base64,${course.image}`}
                      alt="image"
                    />
                    {/* <div className="absolute-full-center d-flex justify-center items-center">
                      <div
                        onClick={() => setIsOpen(true)}
                        className="d-flex justify-center items-center size-60 rounded-full bg-white js-gallery cursor"
                        data-gallery="gallery1"
                      >
                        <div className="icon-play text-18"></div>
                      </div>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <PinContentTwo pageItem={pageItem} /> */}

        <section className="pt-30 layout-pb-md">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="pt-25 pb-30 px-30 bg-white shadow-2 rounded-8 border-light">
                  <div className="tabs -active-purple-2 js-tabs pt-0">
                    <div className="tabs__controls d-flex js-tabs-controls">
                      {menuItems.map((elm, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveTab(elm.id)}
                          className={`tabs__button js-tabs-button js-update-pin-scene ${
                            i != 0 ? "ml-30" : ""
                          } ${activeTab == elm.id ? "is-active" : ""} `}
                          type="button"
                        >
                          {elm.text}
                        </button>
                      ))}
                    </div>

                    <div className="tabs__content   js-tabs-content">
                      <div
                        className={`tabs__pane -tab-item-1 ${
                          activeTab == 1 ? "is-active" : ""
                        } `}
                      >
                        <Overview />
                      </div>

                      <div
                        className={`tabs__pane -tab-item-2 ${
                          activeTab == 2 ? "is-active" : ""
                        } `}
                      >
                        <CourseContent />
                      </div>

                      <div
                        className={`tabs__pane -tab-item-3 ${
                          activeTab == 3 ? "is-active" : ""
                        } `}
                      >
                        {/* <Instractor /> */}
                      </div>

                      <div
                        className={`tabs__pane -tab-item-4 ${
                          activeTab == 4 ? "is-active" : ""
                        } `}
                      >
                        {/* <Reviews /> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* <ModalVideoComponent
        videoId={"LlCwHnp3kL4"}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      /> */}
    </>
  );
}
