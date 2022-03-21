import { Container, Row, Col, ListGroup } from "react-bootstrap";
import Home from "./Home";

const Favourites = () => {
  return (
    <>
      <Home />
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>Favourites</ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Favourites;
