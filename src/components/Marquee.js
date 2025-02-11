
import React from "react";
import "./Marquee.css"; // Import the CSS file

// Import your images

import mar1 from "../components/Img/mar-1.jpg"
import mar2 from "../components/Img/mar-2.jpeg"
import mar3 from "../components/Img/mar-3.jpeg"
import mar4 from "../components/Img/mar-4.jpeg"
import mar5 from "../components/Img/mar-5.jpeg"
import mar6 from "../components/Img/mar-6.jpeg"

const Marquee = () => {
  const images = [mar1, mar2, mar3, mar4, mar5, mar6];

  return (
    <div className="marquee-container">
      <div className="marquee">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} />
        ))}
        {/* Duplicate images for seamless looping */}
        {images.map((image, index) => (
          <img key={`dup-${index}`} src={image} alt={`Slide ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Marquee;