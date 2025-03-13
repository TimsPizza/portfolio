import React, { useEffect } from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/footer/Footer";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/landing");
  }, []); // Run only once on mount
  return (
    <div
      id="content"
      className="flex h-full w-full flex-col bg-background-dark text-text-light"
    >
      <ToastContainer />
      <div id="top-wrapper" className="bordered h-[5%] w-full">
        <Header />
      </div>
      <div id="middle-wrapper" className="flex w-full flex-1 flex-row">
        <div id="sidebar-wrapper" className="bordered w-72">
          <Sidebar />
        </div>
        <div id="main-content-wrapper" className="w-full flex-1">
          <div className="h-full min-h-0 w-full bg-[#071321]">
            <Outlet />
          </div>
        </div>
      </div>
      <div id="bottom-wrapper" className="bordered h-[5%] w-full">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
