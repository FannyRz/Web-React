import './BookModal.css';

export default function BookModal({ title, date, authors, theme, description, pictureUrl, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>✖</button>

        <div id="book-card-modal">
          <img id="book-picture" src={pictureUrl} alt="Book" />
          <div id="book-description">
            <h3>{title}</h3>

            <p className="book-description-line">
              Date: <span className="information">{date}</span>
            </p>

            <div className="book-description-line">
  <p>
    Authors: <span className="information">{authors.join(", ")}</span>
  </p>
  </div>
  <div className="book-description-line">
  <p>
    Thèmes: <span className="information">{theme.join(", ")}</span>
  </p>
</div>

            <span>{description}</span> 
          </div>
        </div>
      </div>
    </div>
  );
};
