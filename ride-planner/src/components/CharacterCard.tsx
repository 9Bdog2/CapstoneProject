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
            Character Name : <strong>{character.name}</strong>
          </Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          {character.aliases !== [""] && (
            <ListGroupItem>
              Character Aliases : <strong>{character.aliases}</strong>
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
              Character Father :
              <Card.Link href={character.father}>
                <strong>{character.father}</strong>
              </Card.Link>
            </ListGroupItem>
          )}
          {character.mother && (
            <ListGroupItem>
              Character Mother :{" "}
              <Card.Link href={character.mother}>
                <strong>{character.mother}</strong>
              </Card.Link>
            </ListGroupItem>
          )}
          {character.spouse && (
            <ListGroupItem>
              Character Spouse :
              <Card.Link href={character.spouse}>
                <strong>{character.spouse}</strong>
              </Card.Link>
            </ListGroupItem>
          )}
          {character.allegiances && (
            <ListGroupItem>
              <div className="houseCard_elements">
                <span>Character Allegiances:</span>
                <span>
                  <Card.Link href={character.allegiances}>
                    <strong>{character.allegiances}</strong>
                  </Card.Link>
                </span>
              </div>
            </ListGroupItem>
          )}
          {character.povBooks && (
            <ListGroupItem>
              Character PovBooks : <strong>{character.povBooks}</strong>
            </ListGroupItem>
          )}
          {character.tvSeries && (
            <ListGroupItem>
              Character TvSeries :
              <ul>
                {character.tvSeries.map((e, i) => (
                  <li key={i}>{e}</li>
                ))}
              </ul>
            </ListGroupItem>
          )}
          {character.playedBy && (
            <ListGroupItem>
              Character PlayedBy : <strong>{character.playedBy}</strong>
            </ListGroupItem>
          )}
          {character.books && (
            <ListGroupItem>
              Character Books :
              <ul>
                {character.books.map((e, i) => (
                  <li key={i}>
                    {
                      <Card.Link href={e}>
                        <Card.Link href={e}>
                          <strong>{e}</strong>
                        </Card.Link>
                      </Card.Link>
                    }
                  </li>
                ))}
              </ul>
            </ListGroupItem>
          )}
        </ListGroup>
        <Card.Body>
          Url :
          <Card.Link href={character.url}>
            <strong>{character.url}</strong>
          </Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CharacterCard;
