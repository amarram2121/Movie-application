import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
const Navigation=()=> {
  return (
    <div className="footer">
      <Navbar expand="sm">
        <Container>
          <Link to="/" className="link">
            🎬Movies
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/home/favorites" className="link">
                ❣️Favorites
              </Link>
              <Link to="/home/watchlist" className="link">
                🕜Watchlist
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  );
}

export default Navigation;
