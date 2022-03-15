import { useEffect, useState } from "react";
import Home from "./Home";
import BooksCard from "./BooksCard";

const Books = () => {
  const [books, setBooks] = useState([]);

  const fetchedBooks = async () => {
    try {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/books?page=1&pageSize=50"
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
          {books.map((book, index) => (
            <BooksCard book={book} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Books;
