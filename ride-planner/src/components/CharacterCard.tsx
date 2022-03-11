import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { ICharacter } from "../types/ICharacter";

export interface IProps {
  character: ICharacter;
}

const CharacterCard = ({ character }: IProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{character.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{character.culture}</ListGroupItem>
        <ListGroupItem>{character.born}</ListGroupItem>
        <ListGroupItem>{character.died}</ListGroupItem>
        <ListGroupItem>{character.titles}</ListGroupItem>
        <ListGroupItem>{character.father}</ListGroupItem>
        <ListGroupItem>{character.mother}</ListGroupItem>
        <ListGroupItem>{character.spouse}</ListGroupItem>
        <ListGroupItem>{character.allegiances}</ListGroupItem>
        <ListGroupItem>{character.povBooks}</ListGroupItem>
        <ListGroupItem>{character.tvSeries}</ListGroupItem>
        <ListGroupItem>{character.playedBy}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{character.url}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
