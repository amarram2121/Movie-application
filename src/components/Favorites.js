import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { UserAuth } from "../context/AuthContext";
import { getDatabase, ref, onValue } from "firebase/database";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const Favorites = () => {
  const { user } = UserAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fun = async () => {
      if (user) {
        const db = getDatabase();
        const dataRef = ref(db, `users/${user.uid}/favorites`);
        onValue(dataRef, (snapshot) => {
          const data = snapshot.val();
          const moviedata = Object.values(data).map((item) => item.movie);
          setMovies(moviedata);
        });
      }
    }
    fun();
  }, []);


  return (
    <div>
      <h2>Favorite Movies</h2>
      <Container className="d-flex flex-wrap justify-content-center text-align-center">
        {movies.map((movie) => (
          <MovieCard className=" m-10" key={movie.id} movie={movie} />
        ))}
      </Container>
    </div>
  );
};

export default Favorites;
