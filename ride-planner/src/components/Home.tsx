import { Component } from "react";
import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav defaultActiveKey="/home" as="ul" className="bg-dark">
          <Nav.Item as="li">
            <Nav.Link href="/">Homepage</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link to="/books">
              <div className="nav-link">Books</div>
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2" href="/houses">
              Houses
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2" href="/calendar">
              Characters
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Home;
