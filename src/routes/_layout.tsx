import React from "react";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  
  return (
    <div
      id="content"
      className="bg-background-dark text-text-light flex h-full w-full flex-col"
    >
      <div id="top-wrapper" className="h-[6%] w-full bordered">
        <Header />
      </div>
      <div id="middle-wrapper" className="flex w-full flex-1 flex-row">
        <div id="sidebar-wrapper" className="w-1/5 bordered">
          <Sidebar />
        </div>
        <div id="main-content-wrapper" className="w-full flex-1"></div>
        <Outlet />
      </div>
      <div id="bottom-wrapper" className="h-[5%] w-full bordered">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
