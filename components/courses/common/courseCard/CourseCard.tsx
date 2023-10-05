// import React, { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

export default function CourseCard({ data }: any) {
  return (
    <div className="col-lg-3 col-md-6">
      <div className="coursesCard -type-1">
        <div className="relative">
          <div className="coursesCard__image overflow-hidden rounded-8">
            <Image
              width={500}
              height={500}
              style={{ height: "100%", width: "100%" }}
              className="w-1/1"
              src={data.imageSrc}
              alt="image"
            />
            <div className="coursesCard__image_overlay rounded-8"></div>
          </div>
          <div className="d-flex justify-between py-10 px-10 absolute-full-center z-3"></div>
        </div>

        <div className="h-100 pt-15">
          {/* <div className="d-flex items-center">
            <div className="text-14 lh-1 text-yellow-1 mr-10">
              {data.rating}
            </div>
            <div className="d-flex x-gap-5 items-center">
              {rating.map((itm, i) => (
                <div key={i} className="icon-star text-9 text-yellow-1"></div>
              ))}
            </div>
            <div className="text-13 lh-1 ml-10">({data.ratingCount})</div>
          </div> */}

          <div className="text-17 lh-15 fw-500 text-dark-1 mt-10">
            <Link className="linkCustom" href={`/courses/${data.id}`}>
              {data.title}
            </Link>
          </div>

          <div className="d-flex x-gap-10 items-center pt-10">
            <div className="d-flex items-center">
              <div className="mr-8">
                <Image
                  width={16}
                  height={17}
                  src="assets/img/coursesCards/icons/2.svg"
                  alt="icon"
                />
              </div>
              <div className="text-14 lh-1">{`${Math.floor(
                data.duration / 60
              )}h ${Math.floor(data.duration % 60)}m`}</div>
            </div>

            <div className="d-flex items-center">
              <div className="mr-8">
                <Image
                  width={16}
                  height={17}
                  src="assets/img/coursesCards/icons/3.svg"
                  alt="icon"
                />
              </div>
              <div className="text-14 lh-1">{data.level}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
