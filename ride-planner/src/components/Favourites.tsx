import {
  Container,
  Row,
  Col,
  ListGroup,
  ListGroupItem,
  Card,
  Spinner,
} from "react-bootstrap";
import Home from "./Home";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { removeFromFav } from "../store/actions";
import { IBook } from "../types/IBook";
import { StarFill } from "react-bootstrap-icons";
import { InitialState } from "../store";
import { useEffect, useState } from "react";

export interface IProps {
  removeFromFav: (book: IBook) => void;
  favourites: { data: IBook[] };
}

const mapStateToProps = (state: InitialState) => ({
  favourites: state.favourites,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  removeFromFav: (book: IBook) => dispatch(removeFromFav(book)),
});

function favouritesEmpty(favourites: { data: IBook[] }) {
  return (
    <>
      <Home />
      <div className="d-flex justify-content-center">
        <h1>There are no Favourites selected</h1>
      </div>
    </>
  );
}

const Favourites = ({ favourites, removeFromFav }: IProps) => {
  const books: IBook[] = favourites ? favourites.data : [];
  /* console.log("BOOK IS", books); */

  if (books.length === 0) {
    return favouritesEmpty(favourites);
  }

  return (
    <>
      <Home />
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>
              {books.map((book: IBook, i: number) => (
                <ListGroupItem key={i} className="my-1">
                  <div>
                    <StarFill
                      color="gold"
                      size={20}
                      className="me-4 my-auto"
                      onClick={() => removeFromFav(book)}
                    />
                  </div>
                  <div>
                    <div>
                      <span>Book name : {book.name}</span>
                      <span>
                        <ul>
                          Url :<Card.Link href={book.url}>{book.url}</Card.Link>
                        </ul>
                      </span>
                    </div>
                  </div>
                </ListGroupItem>
              ))}
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Favourites);
