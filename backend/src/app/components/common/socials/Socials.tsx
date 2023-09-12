import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

type SocialLink = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ size?: string | number }>;
};

const links: SocialLink[] = [
  { href: "#", label: "Facebook", Icon: FaFacebook },
  { href: "#", label: "Twitter", Icon: FaTwitter },
  { href: "#", label: "Instagram", Icon: FaInstagram },
  { href: "#", label: "LinkedIn", Icon: FaLinkedin },
];

type Props = {
  className?: string;
  iconSize?: string | number;
};

const Socials: React.FC<Props> = ({ className, iconSize = 18 }) => {
  return (
    <div className={className}>
      {links.map((link, idx) => (
        <a
          key={idx}
          href={link.href}
          aria-label={link.label}
          target="_blank"
          rel="noopener noreferrer"
          className="mr-10"
        >
          <link.Icon size={iconSize} />
        </a>
      ))}
    </div>
  );
};

export default Socials;
