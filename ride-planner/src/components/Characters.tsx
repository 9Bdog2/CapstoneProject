import { useEffect, useState } from "react";
import Home from "./Home";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  const fetchedCharacters = async () => {
    try {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/characters"
      );
      if (response.ok) {
        const data = await response.json();
        setCharacters(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchedCharacters();
  }, []);

  return (
    <div>
      <Home />
      <div className="container">
        <div className="row">
          {characters.map((character, index) => (
            <CharacterCard character={character} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Characters;
