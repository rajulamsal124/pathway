"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuItem {
  href: string;
  text: string;
}

interface SidebarMenuProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarMenuProps> = ({ menuItems }) => {
  const pathname = usePathname();

  return (
    <div className="sidebar -dashboard">
      {menuItems.map((elm, i) => (
        <div
          key={i}
          className={`sidebar__item   ${
            pathname == elm.href ? "-is-active" : ""
          } `}
        >
          <Link
            key={i}
            href={elm.href}
            className="d-flex items-center text-17 lh-1 fw-500 "
          >
            {/* <i className={`${elm.iconClass} mr-15`}></i> */}
            {elm.text}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
