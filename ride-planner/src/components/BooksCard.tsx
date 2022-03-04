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
        <Card.Title>{book.name}</Card.Title>
        <Card.Text>{book.authors[0]}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{book.country}</ListGroupItem>
        <ListGroupItem>{book.isbn}</ListGroupItem>
        <ListGroupItem>{book.mediaType}</ListGroupItem>
        <ListGroupItem>{book.numberOfPages}</ListGroupItem>
        <ListGroupItem>{book.publisher}</ListGroupItem>
        <ListGroupItem>{book.released}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{book.url}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default BooksCard;
