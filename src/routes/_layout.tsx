import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";

const Layout = () => {
  return (
    <div
      id="content"
      className="flex h-full w-full flex-col bg-background-dark text-text-light"
    >
      <div id="top-wrapper" className="bordered h-[6%] w-full">
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
