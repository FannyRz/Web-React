import './App.css';
import { useState, useMemo } from 'react'
// import React, { useState } from "react";
import BookCard from './components/BookCard.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import booksData from "./api-book-disney.js";



export default function App(){
  const [search, setSearch] = useState("");
  const [booksSortBy, setBooksSortBy] = useState("date");

  const filteredBooksData = useMemo(() => {
    let result = booksData.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    result = result.toSorted((a, b) => {
      if (booksSortBy === "date") {
        // date can be null
        return (a.date || 0) - (b.date || 0);
      } else {
        //sort in alphabetical order
        return a.title.localeCompare(b.title);
      }
    });
    return result;
  }, [booksData, search, booksSortBy]);
 
  return (
    <div>
      <Header />
      <h1>Book Center</h1>
      <div id="gallery-options">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Chercher un livre"
        />
        <label htmlFor="book-sort"> Filtré par : </label>
        <select
          id="book-sort"
          value={booksSortBy}
          onChange={(e) => setBooksSortBy(e.target.value)}
        >
          <option value="date">Date</option>
          <option value="title">Titre</option>
        </select>
      </div>

      <div id="book-gallery">
        {filteredBooksData.map((book) => (
        <BookCard
        key={book.id}  
        title={book.title}
        date={book.date}
        theme={book.theme}
        description={book.description}
        pictureUrl={book.pictureUrl}
        />
      ))} 
      </div>
      <Footer />
    </div>
  )
}