import { useEffect, useState } from "react";
import Home from "./Home";
import BooksCard from "./BooksCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  const fetchedBooks = async () => {
    try {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/books"
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

  useEffect(() => {
    fetchedBooks();
  }, []);

  return (
    <div>
      <Home />
      <div className="container">
        <div className="row">
          {books.map((book) => (
            <BooksCard book={book} /* key={book.isbn} */ />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
