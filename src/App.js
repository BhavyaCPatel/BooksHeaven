import "./styles.css";
import React from "react";
import { useState } from "react";

const bookDB = {
  Coding: [
    { name: "Eloquent JavaScript", rating: "4/5" },
    { name: "You Don't Know JS", rating: "3.5/5" },
    { name: "Python Crash Course", rating: "3/5" },
    { name: "HTML & CSS: Design and Build Web Sites", rating: "4/5" },
    { name: "Code Complete", rating: "3/5" }
  ],

  Fiction: [
    { name: "Shiva Trilogy", rating: "5/5" },
    { name: "INDIA: What it can teach us", rating: "5/5" },
    { name: "Journey to the center of the earth", rating: "4/5" },
    { name: "Ram", rating: "5/5" },
    { name: "Treasure Island", rating: "3.5/5" }
  ],

  Selfhelp: [
    { name: "I came upon a lighthouse", rating: "5/5" },
    { name: "Ikigai", rating: "4/5" },
    { name: "Atomic Habits", rating: "5/5" },
    { name: "Think & Grow Rich", rating: "4/5" },
    { name: "Rich Dad Poor Dad", rating: "5/5" }
  ]
};
export default function App() {
  const [selectedGenre, setGenre] = useState("Coding");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1>Books Heaven 📚</h1>
      <h4>Checkout my favorite books. Select a genre to get started</h4>
      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              borderRadius: "0.7rem",
              padding: "0.5rem  0.7rem",
              border: "1px solid black",
              margin: "1.3rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid black",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "1.5em" }}> {book.name} </div>
              <div style={{ fontSize: "small" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
