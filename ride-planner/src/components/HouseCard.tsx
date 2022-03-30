import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { IHouse } from "../types/IHouse";
import IoBookSharp from "react-icons/io";

export interface IProps {
  house: IHouse;
}

const CharacterCard = ({ house }: IProps) => {
  return (
    <div className="col-12 col-sm-6 col-md-4 p-2">
      <Card style={{ height: "100%" }}>
        {/* <IoBookSharp /> */}
        <Card.Body>
          {house.name !== "" && (
            <Card.Title>House Name: {house.name}</Card.Title>
          )}
        </Card.Body>
        <ListGroup className="list-group-flush">
          {house.region !== "" && (
            <ListGroupItem>House Region: {house.region}</ListGroupItem>
          )}
          {house.coatOfArms !== "" && (
            <ListGroupItem>House coatOfArms:{house.coatOfArms}</ListGroupItem>
          )}
          {house.words !== "" && (
            <ListGroupItem>House Words: {house.words}</ListGroupItem>
          )}

          {house.titles && (
            <ListGroupItem>House Titles: {house.titles}</ListGroupItem>
          )}
          {house.seats && (
            <ListGroupItem>House Seats: {house.seats}</ListGroupItem>
          )}
          {house.currentLord !== "" && (
            <ListGroupItem>
              House CurrentLord: {house.currentLord}
            </ListGroupItem>
          )}
          {house.heir !== "" && (
            <ListGroupItem>House heir:{house.heir}</ListGroupItem>
          )}
          {house.overlord !== "" && (
            <ListGroupItem>House overlord:{house.overlord}</ListGroupItem>
          )}
          {house.founded !== "" && (
            <ListGroupItem>House founded:{house.founded}</ListGroupItem>
          )}
          {house.founder !== "" && (
            <ListGroupItem>House founder:{house.founder}</ListGroupItem>
          )}
          {house.diedOut !== "" && (
            <ListGroupItem>House diedOut:{house.diedOut}</ListGroupItem>
          )}
          {house.ancestralWeapons !== [] && (
            <ListGroupItem>
              House ancestralWeapons:{house.ancestralWeapons}
            </ListGroupItem>
          )}
          {house.cadetBranches && (
            <ListGroupItem>
              House cadetBranches:{house.cadetBranches}
            </ListGroupItem>
          )}
          {house.swornMembers && (
            <ListGroupItem>
              House swornMembers:{house.swornMembers}
            </ListGroupItem>
          )}
        </ListGroup>
        <Card.Body>
          <Card.Link href={house.url}>{house.url}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CharacterCard;
