import React from "react";
import Navber from "../components/Navber";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div>
      <Navber />
      <div className="min-h-[calc(100vh-300px)] bg-gray-100">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
