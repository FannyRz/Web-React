import "./BookCard.css";

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
        <p className="book-description-line">
    Date: <span className="information">{date}</span>
  </p>
        <div className="book-description-line">
    Authors:
    {authors.map((author, index) => (
      <p key={index} className="information">{author}</p>
    ))}
  </div>
      </div>
    </div>
  );
};
