import React from "react";
import Book from "./Book";

function BookList() {
  const books = [
    { id: 1, title: "The Hobbit" },
    { id: 2, title: "1984" },
    { id: 3, title: "To Kill a Mockingbird" },
    { id: 4, title: "Pride and Prejudice" },
  ];

  return (
    <div>
      <h2>My Book List</h2>
      <ul>
        {books.map((book) => (
          <Book key={book.id} title={book.title} />
        ))}
      </ul>
    </div>
  );
}

export default BookList;
