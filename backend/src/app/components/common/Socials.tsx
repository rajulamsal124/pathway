import { socialMediaLinks } from "@/data/socialLinks";
import Link from "next/link";

import React from "react";

export default function Socials({ componentsClass, textSize }) {
  return (
    <>
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          className={componentsClass ? componentsClass : ""}
          href={link.href}
        >
          <i className={`${link.iconClassName} ${textSize}`}></i>
        </a>
      ))}
    </>
  );
}
