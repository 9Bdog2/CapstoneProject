import { useEffect, useState } from "react";
import Home from "./Home";
import HouseCard from "./HouseCard";

const Houses = () => {
  const [houses, setHouses] = useState([]);

  const fetchedHouses = async () => {
    try {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/houses"
      );
      if (response.ok) {
        const data = await response.json();
        setHouses(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchedHouses();
  }, []);

  return (
    <div>
      <Home />
      <div className="container">
        <div className="row">
          {houses.map((house, index) => (
            <HouseCard house={house} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Houses;
