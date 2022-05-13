import {
  Card,
  ListGroup,
  ListGroupItem,
  Col,
  Form,
  Button,
} from "react-bootstrap";
import { IBook } from "../types/IBook";
import { Star, StarFill } from "react-bootstrap-icons";
import { addToFav, removeFromFav } from "../store/actions";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { InitialState } from "../store";
import { useEffect, useState } from "react";
import uniqid from "uniqid";

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
  const [comment, setComment] = useState({});
  const [commentHistory, setCommentHistory] = useState([]);

  const hasFavs = favouriteData.length > 0 ? true : false;
  let isFav = 0;
  if (hasFavs) {
    isFav = favouriteData.filter((lib) => lib.isbn === book.isbn).length;
  }
  /* console.log(isFav, favouriteData); */
  const toggleFavourite = (book: IBook) => {
    isFav > 0 ? removeFromFavourites(book) : addToFavourites(book);
    /* console.log(book); */
  };

  const fetchBookComments = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/book_comments?bookId=${book.isbn}`
      );
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setCommentHistory(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const createBookComment = async () => {
    let commentObj = { ...comment, id: uniqid(), bookId: book.isbn };
    try {
      const response = await fetch("http://localhost:3000/book_comments", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(commentObj),
      });
      if (response.ok) {
        const data = await response.json();
        console.log(data);
       /*  window.location.reload(); */
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBookComments();
  }, []);

  return (
    <div className="col-12 col-sm-6 col-md-4 p-2 card_body">
      <Card style={{ height: "100%" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Col xs={3} className="d-flex col-12 justify-content-center">
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
          {book.name !== "" && <Card.Title>Book Name : {book.name}</Card.Title>}
          {book.authors && <Card.Text>{book.authors[0]}</Card.Text>}
        </Card.Body>
        <ListGroup className="list-group-flush">
          {book.country !== "" && (
            <ListGroupItem>Book Country : {book.country}</ListGroupItem>
          )}
          {book.isbn !== "" && (
            <ListGroupItem>Book ISBN : {book.isbn}</ListGroupItem>
          )}
          {book.mediaType !== "" && (
            <ListGroupItem>Book Media Type : {book.mediaType}</ListGroupItem>
          )}
          {book.numberOfPages && (
            <ListGroupItem>Book Pages : {book.numberOfPages}</ListGroupItem>
          )}
          {book.publisher !== "" && (
            <ListGroupItem>Book Publisher : {book.publisher}</ListGroupItem>
          )}
          {book.characters !== [] && (
            <ListGroupItem>
              <div className="houseCard_elements">
                <span>Book Characters :</span>
                <span>
                  <ul>
                    {book.characters.map((e, i) => (
                      <li key={i}>{<Card.Link href={e}>{e}</Card.Link>}</li>
                    ))}
                  </ul>
                </span>
              </div>
            </ListGroupItem>
          )}
          {book.povCharacters !== [] && (
            <ListGroupItem>
              <div className="houseCard_elements">
                <span>Book Pov Characters :</span>
                <span>
                  <ul>
                    {book.povCharacters.map((e, i) => (
                      <li key={i}>{<Card.Link href={e}>{e}</Card.Link>}</li>
                    ))}
                  </ul>
                </span>
              </div>
            </ListGroupItem>
          )}
          {book.released !== "" && (
            <ListGroupItem>Book Release : {book.released}</ListGroupItem>
          )}
          {/* {data.book_comments !== "" && (
            <ListGroupItem>Comments : {data.book_comments}</ListGroupItem>
          )} */}
        </ListGroup>
        <Card.Body>
          Book Url :<Card.Link href={book.url}> {book.url}</Card.Link>
        </Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Title</Form.Label>
            <Form.Control
              name="title"
              size="lg"
              type="text"
              placeholder="Large text"
              onChange={(e) =>
                setComment({ ...comment, title: e.target.value })
              }
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Comment</Form.Label>
            <ul className="list-group list-group-flush">
              {commentHistory &&
              commentHistory.map((comment: any) => (
                <li className="list-group-item d-flex flex-wrap justify-content-between align-items-center">
                  <span className="badge badge-dark">{comment.id}</span>
                  {comment.body}
                </li>
              ))}
            </ul>
            <Form.Control
              name="body"
              as="textarea"
              rows={3}
              onChange={(e) => setComment({ ...comment, body: e.target.value })}
            />
          </Form.Group>
          <Button type="button" onClick={(e) => createBookComment()}>
            Submit
          </Button>
        </Form>
      </Card>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksCard);
