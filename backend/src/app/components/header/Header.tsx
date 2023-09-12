import React, { useState, useEffect } from "react";
import TopBar from "./topbar/TopBar";
import Navbar from "./navbar/Navbar";

export default function Header() {
  const [activeMobileMenu, setActiveMobileMenu] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header>
      <TopBar />
      <Navbar />
    </header>
  );
}
