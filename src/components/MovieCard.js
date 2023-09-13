import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ButtonGroup from "react-bootstrap/ButtonGroup";


const MovieCard = ({ movie }) => {
  const [genre, setGenre] = useState([]);
  const { user } = UserAuth();
  const navigate = useNavigate();

  const genres = [
    { id: 28, name: "Action" },
    { id: 12, name: "Adventure" },
    { id: 16, name: "Animation" },
    { id: 35, name: "Comedy" },
    { id: 80, name: "Crime" },
    { id: 99, name: "Documentary" },
    { id: 18, name: "Drama" },
    { id: 10751, name: "Family" },
    { id: 14, name: "Fantasy" },
    { id: 36, name: "History" },
    { id: 27, name: "Horror" },
    { id: 10402, name: "Music" },
    { id: 9648, name: "Mystery" },
    { id: 10749, name: "Romance" },
    { id: 878, name: "Science Fiction" },
    { id: 10770, name: "TV Movie" },
    { id: 53, name: "Thriller" },
    { id: 10752, name: "War" },
    { id: 37, name: "Western" },
  ];
  // console.log(movie.genre_ids);

  const findGenre = (arr) => {
    const genreNames = genres
      .filter((it) => arr.includes(it.id))
      .map((it) => it.name);

    setGenre(genreNames);
  };

  useEffect(() => {
    findGenre(movie.genre_ids);
  }, []);

  // console.log(genre)

  // console.log(movie);
  const data = {
    image: movie.poster_path,
    name: movie.title,
    overview: movie.overview,
    release_date: movie.release_date,
    genre: genre,
    vote_average: movie.vote_average,
  };
  // console.log(data);

  const addToFavorites = async () => {
    if (user) {
      const res = fetch(
        `https://competitun-task-default-rtdb.firebaseio.com/users/${user.uid}/favorites.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ movie }),
        }
      );
      if (res) {
        alert("added to favorites");
      } else {
        alert("error happened");
      }
    } else {
      navigate("/");
    }
  };

  const addToWatchlist = () => {
    if (user) {
      const res = fetch(
        `https://competitun-task-default-rtdb.firebaseio.com/users/${user.uid}/watchlist.json`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ movie}),
        }
      );
      if (res) {
        alert("added to watchlist");
      } else {
        alert("error happened");
      }
    } else {
      navigate("/");
    }
  };

  return (
    <Card className="m-2" style={{ width: "15rem" }}>
      <Link to={`/home/movie/${movie.id}`} state={{ data: data }}>
        <Card.Img
          style={{ height: "15rem" }}
          variant="top"
          src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
          alt={movie.title}
        />
      </Link>
      <Card.Body>
        <Card.Title>{movie.title}</Card.Title>
        <Card.Text>{genre.join(", ")}</Card.Text>
        <ButtonGroup aria-label="Basic example" >
          <Button variant="secondary" onClick={() => addToFavorites()}>
            Add to Favorites
          </Button>
          <Button variant="info" onClick={() => addToWatchlist()}>
            Add to Watchlist
          </Button>
        </ButtonGroup>
      </Card.Body>
    </Card>

    //  <>
    //   <Link to={`/home/movie/${movie.id}`} state={{ data: data }}>
    //     <img
    //       src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
    //       alt={movie.title}
    //     />
    //   </Link>
    //   <h2>{movie.title}</h2>
    //   <p>{genre.join(", ")}</p>
    //   <button onClick={() => addToFavorites(movie.id)}>Add to Favorites</button>
    //   <button onClick={() => addToWatchlist(movie.id)}>Add to Watchlist</button>
    // </>
  );
};

export default MovieCard;
