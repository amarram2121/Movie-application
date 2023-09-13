import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Search = ({ onSearchResult }) => {
  const [query, setQuery] = useState("");

  const apiKey = "cae58fa33b0450d7b14df22496e63d27";
  const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

  const handleSearch = async () => {
    try {
      const res = await axios.get(apiUrl);
      const searchData = res.data.results;
      onSearchResult(searchData);
    } catch (error) {
      console.error("error during searching for movie", error);
    }
  };

  return (
    <Form className="d-flex">
      <Form.Control
        className="m-1 "
        type="text"
        placeholder="Search for movies..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></Form.Control>
      <Button onClick={handleSearch}>Search</Button>
    </Form>
  );
};

export default Search;
