import { useEffect, useState } from "react";
import Home from "./Home";
import BooksCard from "./BooksCard";

const Books = () => {
  const [books, setBooks] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const perPage = 12;

  const fetchedBooks = async () => {
    try {
      const response = await fetch(
        "https://www.anapioficeandfire.com/api/books?page=" +
          page +
          "&pageSize=" +
          (perPage + 1)
      );
      if (response.ok) {
        const data = await response.json();
        setHasMore(data.length > perPage);
        setBooks(data.slice(0, perPage));
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
    fetchedBooks();
  }, [page]);

  return (
    <div>
      <Home />
      <div className="container p-3">
        <div className="row m-0">
          {books.map((book, index) => (
            <BooksCard book={book} key={index} />
          ))}
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

export default Books;
