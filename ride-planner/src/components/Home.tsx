import { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav
          defaultActiveKey="/home"
          className="bg-dark justify-content-center"
        >
          <Nav.Item as="li">
            <Nav.Link href="/" className="menu_item">
              Homepage
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/books" className="nav-link menu_item">
              Books
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/houses" className="nav-link menu_item">
              Houses
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/characters" className="nav-link menu_item">
              Characters
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/search" className="nav-link menu_item">
              Search
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/favourites" className="nav-link menu_item">
              Favourites
            </Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Home;
