import { Card, ListGroup, ListGroupItem, Col } from "react-bootstrap";
import { IBook } from "../types/IBook";
import { Star, StarFill } from "react-bootstrap-icons";
import { addToFav, removeFromFav } from "../store/actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { InitialState } from "../store";

export interface IProps {
  book: IBook;
  favouriteData: IBook[];
  addToFavourites: any;
  removeFromFavourites: any;
}

const mapStateToProps = (state: InitialState) => ({
  favouriteData: state.favourites.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToFavourites: (book: IBook) => dispatch(addToFav(book)),
  removeFromFavourites: (book: IBook) => dispatch(removeFromFav(book)),
});

const BooksCard = ({
  book,
  favouriteData,
  addToFavourites,
  removeFromFavourites,
}: IProps) => {
  const hasFavs = favouriteData.length > 0 ? true : false;
  let isFav = 0;
  if (hasFavs) {
    isFav = favouriteData.filter((lib) => lib.isbn === book.isbn).length;
  }
  console.log(isFav, favouriteData);
  const toggleFavourite = (book: IBook) => {
    isFav > 0 ? removeFromFavourites(book) : addToFavourites(book);
    console.log(book);
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 p-2">
      <Card style={{ height: "100%" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Col xs={3} className="d-flex">
            {isFav ? (
              <StarFill
                color="gold"
                size={20}
                className="me-4 my-auto"
                onClick={(e) => toggleFavourite(book)}
              />
            ) : (
              <Star
                color="gold"
                size={20}
                className="me-4 my-auto"
                onClick={(e) => toggleFavourite(book)}
              />
            )}
          </Col>
          {book.name !== "" && <Card.Title>{book.name}</Card.Title>}
          {book.authors && <Card.Text>{book.authors[0]}</Card.Text>}
        </Card.Body>
        <ListGroup className="list-group-flush">
          {book.country !== "" && <ListGroupItem>{book.country}</ListGroupItem>}
          {book.isbn !== "" && <ListGroupItem>{book.isbn}</ListGroupItem>}
          {book.mediaType !== "" && (
            <ListGroupItem>{book.mediaType}</ListGroupItem>
          )}
          {book.numberOfPages && (
            <ListGroupItem>{book.numberOfPages}</ListGroupItem>
          )}
          {book.publisher !== "" && (
            <ListGroupItem>{book.publisher}</ListGroupItem>
          )}
          {book.released !== "" && (
            <ListGroupItem>{book.released}</ListGroupItem>
          )}
        </ListGroup>
        <Card.Body>
          <Card.Link href={book.url}>{book.url}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksCard);
