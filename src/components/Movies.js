import React, { useEffect, useState } from "react";
import axios from "axios";
import Search from "./Search";
import MovieCard from "./MovieCard";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

const apiKey = "cae58fa33b0450d7b14df22496e63d27";
const apiUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    // Fetching popular movies
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(apiUrl);
        const movieData = response.data.results;
        // console.log(movieData);
        setMovies(movieData);
      } catch (error) {
        console.error("Error fetching popular movies:", error);
      }
    };
    fetchPopularMovies();
  }, []);

  const handleSearchResult = (data) => {
    setSearchResults(data);
  };

  return (
    <div>
      <div className="search">
        <Search onSearchResult={handleSearchResult} />
      </div>
      {searchResults.length > 0 ? (
        <div>
          <h2>!!! Search Results !!!</h2>
          <Container className="d-flex flex-wrap align-content-center">
            {searchResults.map((movie) => (
              <MovieCard className=" m-10" key={movie.id} movie={movie} />
            ))}
          </Container>
        </div>
      ) : (
        <div>
          <h2>!!! Movies !!!</h2>
          <Container className="d-flex flex-wrap justify-content-center text-align-center">
            {movies.map((movie) => (
              <MovieCard className=" m-10" key={movie.id} movie={movie} />
            ))}
          </Container>
        </div>
      )}
      <div></div>
    </div>
  );
};

export default Movies;
