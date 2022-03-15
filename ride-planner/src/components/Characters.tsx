import { useEffect, useState } from "react";
import Home from "./Home";
import CharacterCard from "./CharacterCard";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  const fetchedCharacters = async () => {
    try {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/characters?page=" +
          page +
          "&pageSize=50"
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
  }, [page]);

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
      <button onClick={() => setPage(page - 1)}>PREV</button>
      <button onClick={() => setPage(page + 1)}>NEXT</button>
    </div>
  );
};

export default Characters;
