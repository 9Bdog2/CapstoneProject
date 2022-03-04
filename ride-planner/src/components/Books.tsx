import React from "react";
import { useEffect, useState } from "react";
import Home from "./Home";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://www.anapioficeandfire.com/api/books")
      .then((response) => response.json())
      .then((data) => setBooks(data));
    console.log(books);
  }, []);

  return (
    <div>
      <Home />
      <h1>Books</h1>
    </div>
  );
};

export default Books;
