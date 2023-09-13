import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

const handlePlayNow = () => {
  toast.success("Movie is Playing", {
    position: "top-right",
    autoClose: 2000, // 2 seconds
  });
};

const MovieDetails = () => {
  const location = useLocation();
  const { data } = location.state;
  console.log(data);
  const movie = data;

  return (
    <Container className="d-flex justify-content-center">
      <ToastContainer className="notification" />
      <Card style={{ width: "35rem" }}>
        <Card.Img
          style={{ height: "25rem" }}
          variant="top"
          src={`https://image.tmdb.org/t/p/w500${movie.image}`}
          alt={movie.title}
        />
        <Card.Text className="circular-progress w-25">
          <CircularProgressbar
            value={movie.vote_average * 10}
            text={`${movie.vote_average * 10}%`}
          />
        </Card.Text>
        <Card.Body>
          <Card.Title>{movie.name}</Card.Title>
          <Card.Text>Overview :- {movie.overview}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Release Date :- {movie.release_date}</ListGroup.Item>
          <ListGroup.Item>Genre :- {movie.genre.join(", ")}</ListGroup.Item>
        </ListGroup>
        <Card.Body className="d-flex justify-content-center">
          <Button onClick={() => handlePlayNow()}>Play Now</Button>
        </Card.Body>
      </Card>
    </Container>

    // <div>
    //   <ToastContainer className="notification" />
    //   <img
    //     src={`https://image.tmdb.org/t/p/w500${movie.image}`}
    //     alt={movie.title}
    //   />
    //   <h2>{movie.title}</h2>
    //   <p>{movie.overview}</p>
    //   <p>Release Date: {movie.release_date}</p>
    //   <p>Genre: {movie.genre.join(", ")}</p>
    //   {/* <p>User Rating: {movie.vote_average}</p> */}
    //   <div style={{ width: "100px" }}>
    //     <CircularProgressbar
    //       value={movie.vote_average * 10}
    //       text={`${movie.vote_average * 10}%`}
    //     />
    //   </div>
    //   <button onClick={() => handlePlayNow()}>Play Now</button>
    // </div>
  );
};

export default MovieDetails;
