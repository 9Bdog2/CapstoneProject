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
        <Card.Title>House Name: {house.name}</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroupItem>House region:{house.region}</ListGroupItem>
        <ListGroupItem>House coatOfArms:{house.coatOfArms}</ListGroupItem>
        <ListGroupItem>House words:{house.words}</ListGroupItem>
        <ListGroupItem>House titles:{house.titles}</ListGroupItem>
        <ListGroupItem>House seats:{house.seats}</ListGroupItem>
        <ListGroupItem>House currentLord:{house.currentLord}</ListGroupItem>
        <ListGroupItem>House heir:{house.heir}</ListGroupItem>
        <ListGroupItem>House overlord:{house.overlord}</ListGroupItem>
        <ListGroupItem>House founded:{house.founded}</ListGroupItem>
        <ListGroupItem>House founder:{house.founder}</ListGroupItem>
        <ListGroupItem>House diedOut:{house.diedOut}</ListGroupItem>
        <ListGroupItem>
          House ancestralWeapons:{house.ancestralWeapons}
        </ListGroupItem>
        <ListGroupItem>House cadetBranches:{house.cadetBranches}</ListGroupItem>
        <ListGroupItem>House swornMembers:{house.swornMembers}</ListGroupItem>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">{house.url}</Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CharacterCard;
