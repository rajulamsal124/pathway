import { socialMediaLinks } from "../../../data/socialLinks"
import React from "react"

export default function Socials({ className, textSize }) {
  return (
    <>
      {socialMediaLinks.map((link, index) => (
        <a key={index} className={className ? className : ""} href={link.href}>
          <i className={`${link.iconClassName} ${textSize}`}></i>
        </a>
      ))}
    </>
  )
}
