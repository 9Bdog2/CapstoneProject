import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { IBook } from "../types/IBook";
import { Star, StarFill } from "react-bootstrap-icons";
import { addToFav, removeFromFav } from "../store/actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { InitialState } from "../store";

export interface IProps {
  book: IBook;
  favourites: {data: IBook[]};
  addToFavourites: any;
  removeFromFavourites: any;
}

const mapStateToProps = (s: InitialState) => s;

const mapDispatchToProps = (dispatch: Dispatch) => ({
  addToFavourites: ({ book }: IProps) => dispatch(addToFav(book)),
  removeFromFavourites: ({ book }: IProps) => dispatch(removeFromFav(book)),
});

const BooksCard = ({
  book,
  favourites,
  addToFavourites,
  removeFromFavourites,
}: IProps) => {
  const isFav = favourites.data.includes(book);
  console.log(isFav, favourites);
  const toggleFavourite = () => {
    isFav ? removeFromFavourites(book) : addToFavourites(book);
  };

  return (
    <Card style={{ width: "18rem" }}>
      {isFav ? (
        <StarFill
          color="gold"
          size={16}
          className="me-4 my-auto"
          onClick={toggleFavourite}
        />
      ) : (
        <Star
          color="gold"
          size={16}
          className="me-4 my-auto"
          onClick={toggleFavourite}
        />
      )}
      <Card.Img variant="top" src="" />
      <Card.Body>
        {book.name && <Card.Title>{book.name}</Card.Title>}
        {book.authors && <Card.Text>{book.authors[0]}</Card.Text>}
      </Card.Body>
      <ListGroup className="list-group-flush">
        {book.country && <ListGroupItem>{book.country}</ListGroupItem>}
        {book.isbn && <ListGroupItem>{book.isbn}</ListGroupItem>}
        {book.mediaType && <ListGroupItem>{book.mediaType}</ListGroupItem>}
        {book.numberOfPages && (
          <ListGroupItem>{book.numberOfPages}</ListGroupItem>
        )}
        {book.publisher && <ListGroupItem>{book.publisher}</ListGroupItem>}
        {book.released && <ListGroupItem>{book.released}</ListGroupItem>}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{book.url}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksCard);
