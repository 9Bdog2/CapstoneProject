import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import Home from "./Home";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { removeFromFav } from "../store/actions";
import { IBook } from "../types/IBook";
import { IProps } from "./BooksCard";
import { StarFill } from "react-bootstrap-icons";

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeFromFav: (book: IBook) => {
    dispatch(removeFromFav(book));
  },
});

const Favourites = ({ book }: any) => {
  console.log("BOOK IS", book); // book is undefined

  return (
    <>
      <Home />
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>Favourites</ListGroup>
            <ListGroup>
              {/*  {book.map((book: IBook) => (
                <ListGroupItem>
                  <StarFill onClick={() => removeFromFav(book)} />
                  <span>{book}</span>
                </ListGroupItem>
              ))} */}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default connect((s) => s, mapDispatchToProps)(Favourites);
