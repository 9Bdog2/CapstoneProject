import Home from "./Home";
import { useState, useEffect } from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { IBook } from "../types/IBook";
import { ICharacter } from "../types/ICharacter";
import { IHouse } from "../types/IHouse";
/* import { IBook } from "../types/IBook"; */

/* export interface IProps {
  book: IBook;
} */

const Search = (/* { book }: IProps */) => {
  const [query, setQuery] = useState<string>("");
  const [books, setBooks] = useState<IBook[]>([]);
  const [characters, setCharacters] = useState<ICharacter[]>([]);
  const [houses, setHouses] = useState<IHouse[]>([]);
  const [bigData, setBigData] = useState<Array<IBook | ICharacter | IHouse>>(
    []
  );

  const fetchedBooks = async () => {
    try {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/books?page=1&pageSize=12"
      );
      if (response.ok) {
        const data = await response.json();
        setBooks(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchedCharacters = async () => {
    try {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/characters?page=1&pageSize=50"
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

  const fetchedHouses = async () => {
    try {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/houses?page=1&pageSize=50"
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

  /* setBigData([...books, ...characters, ...houses]);
  console.log(bigData);
 */
  useEffect(() => {
    fetchedBooks();
    fetchedCharacters();
    fetchedHouses();
  }, []);

  return (
    <div>
      <Home />
      <div className="container ">
        <div className="row">
          <div className="col-md-12 mt-5 ">
            <InputGroup>
              <InputGroup.Prepend>
                <InputGroup.Text>Search GOT</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                aria-label="Search GOT"
                onChange={(event) => setQuery(event.target.value)}
              />
            </InputGroup>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 mt-5 search-area">
            <div className="box-search-area">
              {books
                .filter((book) => {
                  if (query === "") {
                    return "";
                  } else if (
                    book.name.toLowerCase().includes(query.toLowerCase())
                  ) {
                    return book;
                  }
                })
                .map((book, index) => (
                  <div key={index}>
                    <p>
                      Name: {book.name} - Author : {book.authors}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
