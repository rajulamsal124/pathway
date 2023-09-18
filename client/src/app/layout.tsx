"use client";

import "../../public/assets/sass/styles.scss";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "react-calendar/dist/Calendar.css";

config.autoAddCss = false;

import AOS from "aos";
import "aos/dist/aos.css";

import { useEffect } from "react";
import Providers from "./providers";
export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 700,
      offset: 120,
      easing: "ease-out",
      once: true,
    });
  }, []);

  return (
    <html lang="en" className="">
      <head></head>
      <body>
        <Providers> {children}</Providers>
      </body>
    </html>
  );
}
