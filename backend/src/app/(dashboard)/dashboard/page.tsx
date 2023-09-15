import React from "react";
import Preloader from "../../components/common/preloader/Preloader";
import HeaderDashboard from "../../components/layout/headers/HeaderDashboard";
import Sidebar from "../../components/dashboard/Sidebar";

export default function page() {
  const menuItems = [
    { href: "/dashboard", text: "Dashboard" },
    { href: "/about", text: "About" },
    { href: "/courses", text: "Courses" },
  ];
  return (
    <div className="barba-container" data-barba="container">
      <main className="main-content">
        <Preloader />
        <HeaderDashboard />
        <div className="content-wrapper js-content-wrapper overflow-hidden">
          <div
            id="dashboardOpenClose"
            className="dashboard -home-9 js-dashboard-home-9"
          >
            <div className="dashboard__sidebar scroll-bar-1">
              <Sidebar menuItems={menuItems} />
            </div>
            {/* <DashboardOne /> */}
          </div>
        </div>
      </main>
    </div>
  );
}
