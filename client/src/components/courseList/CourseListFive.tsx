"use client";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import Link from "next/link";
async function fetchCourses() {
  const res = await fetch("http://localhost:3000/api/courses");

  const courses = await res.json();
  console.log(courses);
  return courses;
}

export default function CourseListFive() {
  const { data, isFetching, error } = useQuery({
    queryKey: ["courses"],
    queryFn: fetchCourses,
  });

  return (
    <section className="layout-pt-lg layout-pb-lg">
      <div className="container">
        <div className="row y-gap-30">
          {data &&
            data.map((course) => (
              <div key={course.id} className="col-lg-4 col-md-6">
                <div className="coursesCard -type-1 rounded-8 bg-white shadow-3">
                  <div className="relative">
                    <div className="coursescard_image overflow-hidden rounded-top-8">
                      <Image
                        width={510}
                        height={360}
                        className="w-1/1"
                        src={`data:image/jpeg;base64,${course.image}`}
                        alt="image"
                      />
                      <div className="coursesCard__image_overlay rounded-top-8"></div>
                      <div className="h-100 pt-20 pb-15 px-30">
                        <div className="text-17 lh-15 fw-500 text-dark-1 mt-10 text-center">
                          <Link className="linkCustom" href="#" target="_blank">
                            {course.title}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
