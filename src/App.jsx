import './App.css';
import BookCard from './components/BookCard.jsx'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import booksData from "./api-book-disney.js";

export default function App(){
  return (
    <div>
      <Header />
      <h1>Book Center</h1>
      <div id="book-gallery">
        {booksData.map((book) => (
        <BookCard
        key={book.id}  
        name={book.name}
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