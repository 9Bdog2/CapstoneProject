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
        {character.name && (
          <ListGroupItem>Character Name : {character.name}</ListGroupItem>
        )}
        {character.gender && (
          <ListGroupItem>Character Gender : {character.gender}</ListGroupItem>
        )}
        {character.culture && (
          <ListGroupItem>Character Culture :{character.culture}</ListGroupItem>
        )}
        {character.born && (
          <ListGroupItem>Character Born : {character.born}</ListGroupItem>
        )}
        {character.died && (
          <ListGroupItem>Character Died : {character.died}</ListGroupItem>
        )}
        {character.titles && (
          <ListGroupItem>Character Titles : {character.titles}</ListGroupItem>
        )}
        {character.aliases && (
          <ListGroupItem>Character Father : {character.father}</ListGroupItem>
        )}
        {character.mother && (
          <ListGroupItem>Character Mother : {character.mother}</ListGroupItem>
        )}
        {character.spouse && (
          <ListGroupItem>Character Spouse : {character.spouse}</ListGroupItem>
        )}
        {character.allegiances && (
          <ListGroupItem>
            Character Allegiances : {character.allegiances}
          </ListGroupItem>
        )}
        {character.povBooks && (
          <ListGroupItem>
            Character PovBooks : {character.povBooks}
          </ListGroupItem>
        )}
        {character.tvSeries && (
          <ListGroupItem>
            Character TvSeries : {character.tvSeries}
          </ListGroupItem>
        )}
        {character.playedBy && (
          <ListGroupItem>
            Character PlayedBy : {character.playedBy}
          </ListGroupItem>
        )}
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{character.url}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
