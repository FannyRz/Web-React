import './Collection.css';
import { useState, useMemo, useEffect } from "react";
import BookCard from '../BookCard.jsx';
import BookModal from '../BookModal.jsx';
import Header from '../Header.jsx';
import Footer from '../Footer.jsx';
import ResetButton from "../ResetButton.jsx";
import booksData from "../../api-book-disney.js";


export default function Collection() {

  const [selectedBook, setSelectedBook] = useState(null);

  const [search, setSearch] = useState(
    localStorage.getItem("search") || ""
  );
  const [booksSortBy, setBooksSortBy] = useState(
    localStorage.getItem("booksSortBy") || "date"
  );
  const [booksOrderBy, setBooksOrderBy] = useState(
    localStorage.getItem("booksOrderBy") || "croissant"
  );
  const [selectedTheme, setSelectedTheme] = useState(
    localStorage.getItem("selectedTheme") || ""
  );

  useEffect(() => {
    localStorage.setItem("search", search)
  }, [search])
  useEffect(() => {
    localStorage.setItem("booksSortBy", booksSortBy)
  }, [booksSortBy])
  useEffect(() => {
    localStorage.setItem("booksOrderBy", booksOrderBy)
  }, [booksOrderBy])
  useEffect(() => {
    localStorage.setItem("selectedTheme", selectedTheme)
  }, [selectedTheme])

  const resetFilters = () => {
    setSearch("");
    setBooksSortBy("date");
    setBooksOrderBy("croissant");
    setSelectedTheme("");
  
    localStorage.removeItem("search");
    localStorage.removeItem("booksSortBy");
    localStorage.removeItem("booksOrderBy");
    localStorage.removeItem("selectedTheme");
  };
    
  const allThemes = useMemo(() => {
    const themes = booksData.flatMap(book => book.theme);
      return [...new Set(themes)]; // Supprimer les doublons
  }, [booksData]);
    
  const filteredBooksData = useMemo(() => {
    
    let result = booksData.filter((book) =>
      book.title.toLowerCase().includes(search.toLowerCase())
    );
    
        if (selectedTheme) {
          result = result.filter((book) => book.theme.includes(selectedTheme));
        }
    
        result = result.toSorted((a, b) => {
          let comparaison = 0;
          if (booksSortBy === "date") {
            comparaison = (a.date || 0) - (b.date || 0);
          } else {
            comparaison = a.title.localeCompare(b.title);
          }
    
          return booksOrderBy === "croissant" ? comparaison : -comparaison;
        });
        
        return result;
      }, [booksData, search, booksSortBy, booksOrderBy, selectedTheme]);
    
      return (
        <div>
          <Header />
          <div className="filters-container">
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
    
            <label htmlFor="selected-theme"> Choisit ton thème : </label>
            <select
            id="selected-theme"
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value)}  
          >
            <option value="">Tous les Thèmes</option>  
            {allThemes.map((theme, index) => (
              <option key={index} value={theme}>
                {theme}
              </option>
            ))}
          </select>
          <div id="reset-button-wrapper">
              <ResetButton onClick={resetFilters} />
          </div>
          </div>
    
          <div id="book-gallery">
          {filteredBooksData.length === 0 ? (
              <p>Aucun livre ne correspond à votre recherche</p>
            ) : (
              filteredBooksData.map((book) => (
              <BookCard
              key={book.id}  
              title={book.title}
              date={book.date}
              authors={book.authors}
              theme={book.theme}
              description={book.description}
              pictureUrl={book.pictureUrl}
              onClick={() => setSelectedBook(book)}
              />
          )))}

{selectedBook && (
  <BookModal
    title={selectedBook.title}
    date={selectedBook.date}
    authors={selectedBook.authors}
    theme={selectedBook.theme}
    description={selectedBook.description}
    pictureUrl={selectedBook.pictureUrl}
    onClose={() => setSelectedBook(null)}
  />
)}
          </div>
          <Footer />
        </div>
      )
}