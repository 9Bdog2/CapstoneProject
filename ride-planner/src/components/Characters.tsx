import { useEffect, useState } from "react";
import Home from "./Home";
import CharacterCard from "./CharacterCard";
import { Spinner } from "react-bootstrap";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const perPage = 53;

  const fetchedCharacters = async () => {
    try {
      const response = await fetch("https://thronesapi.com/api/v2/Characters");
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setHasMore(data.length > perPage);
        setCharacters(data.slice(0, perPage));
        scrollTop();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const scrollTop = () => {
    const body = document.querySelector("#root");
    body?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    fetchedCharacters();
    setLoading(false);
  }, [page]);

  return (
    <div>
      <Home />
      <div className="container p-3">
        <div className="row m-0 justify-content-center">
          {isLoading ? (
            <Spinner animation="border" role="status">
              <span className="sr-only ">Loading...</span>
            </Spinner>
          ) : (
            characters.map((character, index) => (
              <CharacterCard character={character} key={index} />
            ))
          )}
        </div>
        <div className="col-12 py-2">
          <h6>Page {page}</h6>
          <button
            disabled={page == 1}
            onClick={() => setPage(page > 0 ? page - 1 : 1)}
          >
            PREV
          </button>
          <button disabled={!hasMore} onClick={() => setPage(page + 1)}>
            NEXT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Characters;
