"use client"

import React from "react"
import FooterLinks from "../component/FooterLinks"
import Socials from "@/components/common/socials/Socials"
export default function Footer() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <footer className="footer -type-1 bg-dark-1 -green-links">
      <div className="container">
        <div className="footer-header">
          <div className="row y-gap-20 justify-between items-center">
            <div className="col-auto">
              <div className="footer-header__logo">
                <h3 className="text-white">Gippsland</h3>
              </div>
            </div>
            <div className="col-auto">
              <div className="footer-header-socials">
                <div className="footer-header-socials__title text-white">
                  Follow us on social media
                </div>
                <div className="footer-header-socials__list d-inline-flex">
                  <Socials className="" textSize={25} />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-columns">
          <div className="row y-gap-30">
            <FooterLinks
              allClasses={"text-17 fw-500 text-white uppercase mb-25"}
            />

            <div className="col-xl-4 col-lg-4 col-md-6">
              <div className="text-17 fw-500 text-white uppercase mb-25">
                GET IN TOUCH
              </div>
              <div className="footer-columns-form">
                <div>We don’t send spam so don’t worry.</div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <input required type="text" placeholder="Email..." />
                    <button type="submit" className="button text-white">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div className="py-30 border-top-light-15">
          <div className="row justify-between items-center y-gap-20">
            <div className="col-auto">
              <div className="d-flex items-center h-100 text-white">
                © {new Date().getFullYear()} Gippsland. All Right Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
