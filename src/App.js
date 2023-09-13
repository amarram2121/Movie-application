import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import MovieDetails from "./components/MovieDetails";
import { AuthContextProvider } from "./context/AuthContext";
import Protected from "./components/Protected";
import Watchlist from "./components/Watchlist";
import Favorites from "./components/Favorites";
import RootLayout from "./layout/RootLayout";
function App() {
  return (
    <>
      <AuthContextProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<RootLayout />}>
              <Route
                index
                element={
                  <Protected>
                    <Home />
                  </Protected>
                }
              ></Route>
              <Route
                path="favorites"
                element={
                  <Protected>
                    <Favorites />
                  </Protected>
                }
              />
              <Route
                path="watchlist"
                element={
                  <Protected>
                    <Watchlist />
                  </Protected>
                }
              />
              <Route
                path="movie/:id"
                element={
                  <Protected>
                    <MovieDetails />
                  </Protected>
                }
              />
            </Route>
          </Routes>
        </Router>
      </AuthContextProvider>
    </>
  );
}

export default App;
