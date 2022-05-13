import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { ICharacter } from "../types/ICharacter";

export interface IProps {
  character: ICharacter;
}

const CharacterCard = ({ character }: IProps) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 p-2 card_body">
      <Card style={{ height: "100%" }}>
        <Card.Img variant="top" src="" />
        <Card.Body>
          <Card.Title>
            <div className="image_container">
              <img src={character.imageUrl} alt="character" />
            </div>
            <strong>{character.fullName}</strong>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroupItem>
            Character Title : <strong>{character.title}</strong>
          </ListGroupItem>
          <ListGroupItem>
            Character Family : <strong>{character.family}</strong>
          </ListGroupItem>
        </ListGroup>
      </Card>
    </div>
  );
};

export default CharacterCard;
