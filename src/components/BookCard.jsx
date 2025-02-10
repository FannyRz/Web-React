export default function BookCard({ title, date, authors, pictureUrl }) {
  return (
    <div id="book-card">
      <img
        id="book-picture"
        src={pictureUrl}
        alt="Book"
      />
      <div id="book-description">
        <h3>{title}</h3>
        <p className="book-description-line">Date: {date} </p>
        <p className="book-description-line">Authors: {authors}</p>
      </div>
    </div>
  );
};
