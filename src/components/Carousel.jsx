import './Carousel.css';
import { useState } from "react";
import newsData from "../newsData.js";

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const selectPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? newsData.length - 1 : prevIndex - 1
    );
  };

  const selectNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === newsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <div>
        <button className="arrow left" onClick={selectPrevious}>
          &#8592;
        </button>

        <div
          style={{
            backgroundImage: `url(${newsData[currentIndex].pictureUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "70px",
          }}
        >
          <div className="news-content">
            <h3>{newsData[currentIndex].title}</h3>
            <p>{newsData[currentIndex].content}</p>
          </div>
        </div>

        <button className="arrow right" onClick={selectNext}>
          &#8594; 
        </button>
      </div>
    </div>
  );
}
