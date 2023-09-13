import React, { useEffect } from "react";
import { UserAuth } from "../context/AuthContext";
import axios from "axios";
import Navigation from "../components/BottomNavigation";
import Header from "../components/Header";
import Movies from "../components/Movies";

// const apiKey = "cae58fa33b0450d7b14df22496e63d27";
// const apiUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`;

const Home = () => {
  const { user } = UserAuth();
  return (
    <div>
      {/* <Header /> */}
      <Movies/>
      {/* <Navigation /> */}
    </div>
  );
};

export default Home;
