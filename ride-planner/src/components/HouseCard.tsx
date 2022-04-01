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
            <ListGroupItem>House coat of Arms:{house.coatOfArms}</ListGroupItem>
          )}
          {house.words !== "" && (
            <ListGroupItem>House Words: {house.words}</ListGroupItem>
          )}
          {house.titles !== [] && (
            <ListGroupItem>House Titles: {house.titles}</ListGroupItem>
          )}
          {house.seats !== [] && (
            <ListGroupItem>House Seats: {house.seats}</ListGroupItem>
          )}
          {house.currentLord !== "" && (
            <ListGroupItem>
              <div className="houseCard_elements">
                <span> House CurrentLord:</span>
                <span>
                  <Card.Link href={house.currentLord}>
                    {house.currentLord}
                  </Card.Link>
                </span>
              </div>
            </ListGroupItem>
          )}
          {house.heir !== "" && (
            <ListGroupItem>
              <div className="houseCard_elements">
                <span> House heir:</span>
                <span>
                  {" "}
                  <Card.Link href={house.heir}>{house.heir}</Card.Link>
                </span>
              </div>
            </ListGroupItem>
          )}
          {house.overlord !== "" && (
            <ListGroupItem>
              <div className="houseCard_elements">
                <span>House overlord:</span>
                <span>
                  <Card.Link href={house.overlord}>{house.overlord}</Card.Link>
                </span>
              </div>
            </ListGroupItem>
          )}
          {house.founded !== "" && (
            <ListGroupItem>House Founded: {house.founded}</ListGroupItem>
          )}
          {house.founder !== "" && (
            <ListGroupItem>House Founder: {house.founder}</ListGroupItem>
          )}
          {house.diedOut !== "" && (
            <ListGroupItem>House Died Out: {house.diedOut}</ListGroupItem>
          )}
          {house.ancestralWeapons !== [] && (
            <ListGroupItem>
              House Ancestral Weapons:{house.ancestralWeapons}
            </ListGroupItem>
          )}
          {house.cadetBranches !== [] && (
            <ListGroupItem>
              House Cadet Branches:{house.cadetBranches}
            </ListGroupItem>
          )}
          {house.words !== "" && (
            <ListGroupItem>House Words: {house.words}</ListGroupItem>
          )}
          {house.swornMembers && (
            <ListGroupItem>
              <div className="houseCard_elements">
                <span>House swornMembers:</span>
                <span>
                  <ul>
                    {house.swornMembers.map((e, i) => (
                      <li key={i}>{<Card.Link href={e}>{e}</Card.Link>}</li>
                    ))}
                  </ul>
                </span>
              </div>
            </ListGroupItem>
          )}
        </ListGroup>
        <Card.Body>
          Url :<Card.Link href={house.url}>{house.url}</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CharacterCard;
