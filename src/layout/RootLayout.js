import React from "react";
import Header from "../components/Header";
import Navigation from "../components/BottomNavigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Header />
      <div className="outlet">
        <Outlet />
      </div>
      <Navigation />
    </div>
  );
};

export default RootLayout;
