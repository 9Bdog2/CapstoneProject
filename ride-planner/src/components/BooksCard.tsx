import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

interface IProps {
  books: any;
}

const BooksCard = ({ books }: IProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
      <Card.Body>
        <Card.Title>{books.name}</Card.Title>
        <Card.Text>{books.authors[0]}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{books.country}</ListGroupItem>
        <ListGroupItem>{books.isbn}</ListGroupItem>
        <ListGroupItem>{books.mediaType}</ListGroupItem>
        <ListGroupItem>{books.numberOfPages}</ListGroupItem>
        <ListGroupItem>{books.publisher}</ListGroupItem>
        <ListGroupItem>{books.released}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{books.url}</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default BooksCard;
