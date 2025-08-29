import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { useAnalytics } from "../hooks/useAnalytics";

const Layout = () => {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  useAnalytics();

  useEffect(() => {
    navigate("/landing");
  }, []); // Run only once on mount

  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location]); // Close sidebar on route change

  return (
    <div
      id="content"
      className="flex h-screen max-h-screen min-h-screen w-screen flex-col overflow-hidden"
      style={{
        backgroundColor: "var(--theme-background-dark)",
        color: "var(--theme-text-light)",
      }}
    >
      <ToastContainer />
      <div
        id="top-wrapper"
        className="bordered h-[5%] min-h-[40px] w-full flex-shrink-0"
      >
        <Header />
      </div>
      <div
        id="middle-wrapper"
        className="flex h-[90%] w-full flex-shrink-0 flex-row"
      >
        <div
          id="sidebar-wrapper"
          className="bordered hidden h-full w-72 flex-shrink-0 lg:block"
        >
          <Sidebar />
        </div>

        <div id="main-content-wrapper" className="h-full w-full flex-1">
          <div
            className="h-full w-full overflow-auto md:overflow-y-hidden"
            style={{ backgroundColor: "var(--theme-background-dark)" }}
          >
            <Outlet />
          </div>
        </div>
      </div>
      <div
        id="bottom-wrapper"
        className="bordered h-[5%] min-h-[40px] w-full flex-shrink-0"
      >
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
