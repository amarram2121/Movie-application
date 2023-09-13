import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import axios from "axios";
import Navigation from "../components/BottomNavigation";
import Header from "../components/Header";
import Movies from "../components/Movies";


const Home = () => {
  const { user } = UserAuth();
  return (
    <div>
      {/* <Header /> */}
      <Movies />
      {/* <Navigation /> */}
    </div>
  );
};

export default Home;
