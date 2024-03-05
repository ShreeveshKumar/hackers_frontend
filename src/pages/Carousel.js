import React, { useState } from 'react';
import image1 from "./images/Carouselpic1.png";
import image2 from "./images/cyber1.jpg";
import image3 from "./images/cyber2.jpg";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [
    { src: image1, alt: 'Image 1', text: 'Supply Chain Disruption: Hackers infiltrated the GitHub repository of a popular software supply chain management platform, potentially impacting numerous downstream organizations. This highlights the importance of securing not just our own systems but also the broader ecosystem we rely on' },
    { src: image2, alt: 'Image 2', text: 'Supply Chain Disruption: Hackers infiltrated the GitHub repository of a popular software supply chain management platform, potentially impacting numerous downstream organizations. This highlights the importance of securing not just our own systems but also the broader ecosystem we rely on' },
    { src: image3, alt: 'Image 3', text: 'Supply Chain Disruption: Hackers infiltrated the GitHub repository of a popular software supply chain management platform, potentially impacting numerous downstream organizations. This highlights the importance of securing not just our own systems but also the broader ecosystem we rely on' },
  ];

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? images.length - 1 : prevSlide - 1));
  };

  return (
    <div className="carousel flex flex-col items-center justify-center py-4 bg-[#404040]">
      <h1 className="text-white mb-8 text-5xl font-bold">Recent Cyber Crimes</h1>
      <div className="slides relative w-full md:max-w-4xl">
        {images.map((image, index) => (
          <div
            key={index}
            className={index === currentSlide ? 'slide block' : 'slide hidden'}
          >
            <div className="flex justify-center"> 
              <img src={image.src} alt={image.alt} className="mb-4 h-80 md:h-auto" /> 
            </div>
            <div className="text-center mb-8 text-white px-4 md:px-0">{image.text}</div> 
          </div>
        ))}
        <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot mx-1 h-3 w-3 rounded-full ${index === currentSlide ? 'bg-black hover:bg-red-600' : 'bg-gray-400'}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>
      {/* <div className="flex">
        <button className="prev mr-2" onClick={prevSlide}>Previous</button>
        <button className="next" onClick={nextSlide}>Next</button>
      </div> */}
    </div>
  );
};

export default Carousel;
