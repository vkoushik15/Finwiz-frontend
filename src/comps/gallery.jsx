import React from 'react';
import '../styling/gallery.css'; // External CSS file

// Import your images (replace with your actual image paths)
import Image1 from '../clubimages/1.jpg';
import Image2 from '../clubimages/2.jpg';
import Image3 from '../clubimages/3.jpg';
import Image4 from '../clubimages/4.jpg';
import Image5 from '../clubimages/5.jpg';
import Image6 from '../clubimages/6.jpg';
import Image7 from '../clubimages/7.jpg';
import Image8 from '../clubimages/8.jpg';

// Import another set of images for the second gallery
import Image9 from '../clubimages/9.jpg';
import Image10 from '../clubimages/10.jpg';
import Image11 from '../clubimages/11.jpg';
import Image12 from '../clubimages/12.jpg';
import Image13 from '../clubimages/13.jpg';
import Image14 from '../clubimages/14.jpg';
import Image15 from '../clubimages/15.jpg';


const Gallery = () => {
  const imagesLeft = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8]; // First set of images
  const imagesRight = [Image9, Image10, Image11, Image12, Image13, Image14, Image15]; // Second set of images

  return (
    <div className="gallery-container">
      {/* First gallery (scrolls to the left) */}
      <div className="gallery gallery-left">
        {/* First set of images */}
        {imagesLeft.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
        {/* Duplicate set of images for seamless looping */}
        {imagesLeft.map((image, index) => (
          <div key={`dup-left-${index}`} className="gallery-item">
            <img src={image} alt={`Gallery Image ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Second gallery (scrolls to the right) */}
      <div className="gallery gallery-right">
        {/* First set of images */}
        {imagesRight.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image} alt={`Gallery Image ${index + 9}`} />
          </div>
        ))}
        {/* Duplicate set of images for seamless looping */}
        {imagesRight.map((image, index) => (
          <div key={`dup-right-${index}`} className="gallery-item">
            <img src={image} alt={`Gallery Image ${index + 9}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;