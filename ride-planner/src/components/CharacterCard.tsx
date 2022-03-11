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
        <Card.Title>Character Aliases : {character.aliases}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>Character Name : {character.name}</ListGroupItem>
        <ListGroupItem>Character Gender : {character.gender}</ListGroupItem>
        <ListGroupItem>
          Character Culture :{character.culture}
          {/* {character.culture.length ? character : character.culture} */}
        </ListGroupItem>
        <ListGroupItem>Character Born : {character.born}</ListGroupItem>
        <ListGroupItem>Character Died : {character.died}</ListGroupItem>
        <ListGroupItem>Character Titles : {character.titles}</ListGroupItem>
        <ListGroupItem>Character Father : {character.father}</ListGroupItem>
        <ListGroupItem>Character Mother : {character.mother}</ListGroupItem>
        <ListGroupItem>Character Spouse : {character.spouse}</ListGroupItem>
        <ListGroupItem>
          Character Allegiances : {character.allegiances}
        </ListGroupItem>
        <ListGroupItem>Character PovBooks : {character.povBooks}</ListGroupItem>
        <ListGroupItem>Character TvSeries : {character.tvSeries}</ListGroupItem>
        <ListGroupItem>Character PlayedBy : {character.playedBy}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{character.url}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
