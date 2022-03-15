import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { IBook } from "../types/IBook";

export interface IProps {
  book: IBook;
}

const BooksCard = ({ book }: IProps) => {
  return (
    <Card style={{ width: "18rem" }}>
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

export default BooksCard;
