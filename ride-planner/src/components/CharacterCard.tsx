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
            Character Aliases : <strong>{character.aliases}</strong>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {character.name !== "" && (
            <ListGroupItem>
              Character Name : <strong>{character.name}</strong>
            </ListGroupItem>
          )}
          {character.gender !== "" && (
            <ListGroupItem>
              Character Gender : <strong>{character.gender}</strong>
            </ListGroupItem>
          )}
          {character.culture !== "" && (
            <ListGroupItem>
              Character Culture :<strong>{character.culture}</strong>
            </ListGroupItem>
          )}
          {character.born !== "" && (
            <ListGroupItem>
              Character Born : <strong>{character.born}</strong>
            </ListGroupItem>
          )}
          {character.died !== "" && (
            <ListGroupItem>
              Character Died : <strong>{character.died}</strong>
            </ListGroupItem>
          )}
          {character.titles && (
            <ListGroupItem>
              Character Titles : <strong>{character.titles}</strong>
            </ListGroupItem>
          )}
          {character.aliases && (
            <ListGroupItem>
              Character Father : <strong>{character.father}</strong>
            </ListGroupItem>
          )}
          {character.mother && (
            <ListGroupItem>
              Character Mother : <strong>{character.mother}</strong>
            </ListGroupItem>
          )}
          {character.spouse && (
            <ListGroupItem>
              Character Spouse : <strong>{character.spouse}</strong>
            </ListGroupItem>
          )}
          {character.allegiances && (
            <ListGroupItem>
              Character Allegiances:
              <Card.Link href={character.allegiances}>
                <strong>{character.allegiances}</strong>
              </Card.Link>
            </ListGroupItem>
          )}
          {character.povBooks && (
            <ListGroupItem>
              Character PovBooks : <strong>{character.povBooks}</strong>
            </ListGroupItem>
          )}
          {character.tvSeries && (
            <ListGroupItem>
              Character TvSeries : <strong>{character.tvSeries}</strong>
            </ListGroupItem>
          )}
          {character.playedBy && (
            <ListGroupItem>
              Character PlayedBy : <strong>{character.playedBy}</strong>
            </ListGroupItem>
          )}
        </ListGroup>
        <Card.Body>
          <Card.Link href={character.url}>
            <strong>{character.url}</strong>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CharacterCard;
