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
  const [booksOrderBy, setBooksOrderBy] = useState("croissant");

  const filteredBooksData = useMemo(() => {
    let result = booksData.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    result = result.toSorted((a, b) => {
      let comparaison =0;
      if (booksSortBy === "date") {
        // date can be null
        comparaison = (a.date || 0) - (b.date || 0);
      } else {
        comparaison = a.title.localeCompare(b.title);
      }
      return booksOrderBy === "croissant" ? comparaison : -comparaison;
    });
    return result;
  }, [booksData, search, booksSortBy, booksOrderBy]);
 
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
        <label htmlFor="order"> Dans l'ordre : </label>
        <select
          id="order"
          value={booksOrderBy}
          onChange={(e) => setBooksOrderBy(e.target.value)}
        >
          <option value="croissant">Croissant</option>
          <option value="decroissant">Décroissant</option>
        </select>
      </div>

      <div id="book-gallery">
        {filteredBooksData.map((book) => (
        <BookCard
        key={book.id}  
        title={book.title}
        date={book.date}
        authors={book.authors}
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