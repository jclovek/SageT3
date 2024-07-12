import React, { useState } from 'react';

const imageSets = [
  [
    { src: '/images/image 27.png', alt: 'Image 1', className: 'image-1' },
    { src: '/images/image 28.png', alt: 'Image 2', className: 'image-2' },
    { src: '/images/image30.jpg', alt: 'Image 3', className: 'image-3' },
    { src: '/images/image 31.jpg', alt: 'Image 4', className: 'image-4' },
  ],
  [
    { src: '/images/image32.jpg', alt: 'Image 1', className: 'image-1' },
    { src: '/images/image33.jpg', alt: 'Image 2', className: 'image-2' },
    { src: '/images/image34.jpg', alt: 'Image 3', className: 'image-3' },
    { src: '/images/image 28.png', alt: 'Image 4', className: 'image-4' },
  ],
];

function ImageCarousel() {
  const [currentSetIndex, setCurrentSetIndex] = useState(0);

  const nextSet = () => {
    setCurrentSetIndex((prevIndex) => (prevIndex + 1) % imageSets.length);
  };

  const prevSet = () => {
    setCurrentSetIndex((prevIndex) => (prevIndex - 1 + imageSets.length) % imageSets.length);
  };

  return (
    <div className="carousel">
      <button className="carousel-arrow left-arrow" onClick={prevSet}>❮</button>
      <div className="carousel-inner">
        {imageSets[currentSetIndex].map((image, index) => (
          <div key={index} className={`image-container ${image.className}`}>
            <a href='/Blog'>
              <img src={image.src} alt={image.alt} className={image.className} />
            </a>
          </div>
        ))}
      </div>
      <button className="carousel-arrow right-arrow" onClick={nextSet}>❯</button>
      <div className="carousel-indicators">
        {imageSets.map((_, index) => (
          <span
            key={index}
            className={`carousel-indicator ${currentSetIndex === index ? 'active' : ''}`}
            onClick={() => setCurrentSetIndex(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default ImageCarousel;