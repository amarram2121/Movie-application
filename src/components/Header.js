import React from "react";
import { UserAuth } from "../context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

const Header = () => {
  const { logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="header">
      <Navbar>
        <Container fluid>
          <Navbar.Brand href="/">Movie-Web-Task-1</Navbar.Brand>
          <Button variant="danger" onClick={handleSignOut}>
            Logout
          </Button>
        </Container>
      </Navbar>
    </div>

    // <div>
    //  <h1>Movie-Web-Task-1</h1>
    //  <button onClick={handleSignOut}>Logout</button>
    // </div>
    //
  );
};

export default Header;

