import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { IHouse } from "../types/IHouse";

export interface IProps {
  house: IHouse;
}

const CharacterCard = ({ house }: IProps) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{house.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>{house.region}</ListGroupItem>
        <ListGroupItem>{house.coatOfArms}</ListGroupItem>
        <ListGroupItem>{house.words}</ListGroupItem>
        <ListGroupItem>{house.titles}</ListGroupItem>
        <ListGroupItem>{house.seats}</ListGroupItem>
        <ListGroupItem>{house.currentLord}</ListGroupItem>
        <ListGroupItem>{house.heir}</ListGroupItem>
        <ListGroupItem>{house.overlord}</ListGroupItem>
        <ListGroupItem>{house.founded}</ListGroupItem>
        <ListGroupItem>{house.founder}</ListGroupItem>
        <ListGroupItem>{house.diedOut}</ListGroupItem>
        <ListGroupItem>{house.ancestralWeapons}</ListGroupItem>
        <ListGroupItem>{house.cadetBranches}</ListGroupItem>
        <ListGroupItem>{house.swornMembers}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{house.url}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
