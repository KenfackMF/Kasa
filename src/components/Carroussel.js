import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-images">
        <img src={images[currentIndex]} alt={`Imge ${currentIndex + 1}`} />
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
