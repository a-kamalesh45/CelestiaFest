"use client";
import React from "react";
import "./GalleryCarousel.css";

const GalleryCarousel = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  if (!images || images.length === 0) return null;

  return (
    <div className="gallery-carousel-overlay">
        <button className="gallery-carousel-nav-btn prev" onClick={onPrev}>&lt;</button>
      <div className="gallery-carousel-container">
        <button className="gallery-close-btn" onClick={onClose}>×</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="gallery-carousel-image" />
      </div>
        <button className="gallery-carousel-nav-btn next" onClick={onNext}>&gt;</button>
    </div>
  );
};

export default GalleryCarousel;
