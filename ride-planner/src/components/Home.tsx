import { Component } from "react";
import { Nav } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <div>
        <Nav defaultActiveKey="/home" as="ul" className="bg-dark">
          <Nav.Item as="li">
            <Nav.Link href="/">Logo</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-1" href="/maps">
              Maps
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2" href="/calendar">
              Calendar
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Log-in</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link eventKey="link-2">Sign-up</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    );
  }
}

export default Home;
