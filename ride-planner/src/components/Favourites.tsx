import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import Home from "./Home";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { removeFromFav } from "../store/actions";
import { IBook } from "../types/IBook";
import { StarFill } from "react-bootstrap-icons";
import { InitialState } from "../store";

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

const Favourites = ({ favourites, removeFromFav }: IProps) => {
  const books: IBook[] = favourites ? favourites.data : [];
  console.log("BOOK IS", books);

  return (
    <>
      <Home />
      <Container>
        <Row>
          <Col xs={12}>
            <ListGroup>Favourites</ListGroup>
            <ListGroup>
                
              {books.map((book: IBook, i: number) => (
                <ListGroupItem key={i}>
                  <StarFill
                    color="gold"
                    size={20}
                    className="me-4 my-auto"
                    onClick={() => removeFromFav(book)}
                  />
                  <span>{book.name}</span>
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
