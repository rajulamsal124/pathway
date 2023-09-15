import Preloader from "./components/common/Preloader";
import Sidebar from "./components/dashboard/Sidebar";
import HeaderDashboard from "./components/layout/headers/HeaderDashboard";

export default function Home() {
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
