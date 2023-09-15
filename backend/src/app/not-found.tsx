import React from "react";
import Preloader from "./components/common/Preloader";
import Header from "./components/layout/headers/Header";
import PageLinks from "./components/common/PageLinks";
import NotFound from "./components/not-found/NotFound";
import Footer from "./components/layout/footers/Footer";

export default function NotFoundpage() {
  return (
    <div className="main-content  ">
      <Preloader />

      <Header />
      <div className="content-wrapper js-content-wrapper overflow-hidden">
        <PageLinks />
        <NotFound />
        <Footer />
      </div>
    </div>
  );
}
