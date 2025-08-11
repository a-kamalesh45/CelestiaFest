"use client";
import React, { useRef, useEffect, useState } from "react";
import ColorThief from "color-thief-browser";
import "./GalleryCarousel.css";

const GalleryCarousel = ({ images, currentIndex, onClose, onPrev, onNext }) => {
  if (!images || images.length === 0) return null;

  const imgRef = useRef(null);
  const [borderColor, setBorderColor] = useState("#ffffff");

  // Extract border color from current image
  useEffect(() => {
    const img = imgRef.current;
    if (!img) return;

    const extractColor = () => {
      const colorThief = new ColorThief();
      try {
        const color = colorThief.getColor(img);
        setBorderColor(`rgb(${color[0]}, ${color[1]}, ${color[2]})`);
      } catch (error) {
        console.error("Color extraction failed", error);
      }
    };

    if (img.complete) {
      extractColor();
    } else {
      img.addEventListener("load", extractColor);
      return () => img.removeEventListener("load", extractColor);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") {
        onNext();
      } else if (e.key === "ArrowLeft") {
        onPrev();
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onNext, onPrev, onClose]);

  const ArrowButton = ({ direction, onClick }) => {
    const isNext = direction === "next";
    const buttonClass = `carousel-button ${isNext ? "next" : "prev"}`;
    const boxClass = `arrow-box ${isNext ? "next-box" : "prev-box"}`;

    return (
      <button className={buttonClass} onClick={onClick}>
        <div className={boxClass}>
          <span className="arrow-elem">
            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20.038c0-.7.3-1.5.8-2.1l16-17c1.1-1 3.2-1.4 4.4-.3 1.2 1.1 1.2 3.3 0 4.4L9.9 16.938H43c1.7 0 3 1.3 3 3s-1.3 3-3 3H9.9l11.3 11.9c1 1 1.2 3.3 0 4.4-1.2 1.1-3.3.8-4.4-.3l-16-17c-.5-.5-.8-1.1-.8-1.9z" />
            </svg>
          </span>
          <span className="arrow-elem">
            <svg viewBox="0 0 46 40" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 20.038c0-.7.3-1.5.8-2.1l16-17c1.1-1 3.2-1.4 4.4-.3 1.2 1.1 1.2 3.3 0 4.4L9.9 16.938H43c1.7 0 3 1.3 3 3s-1.3 3-3 3H9.9l11.3 11.9c1 1 1.2 3.3 0 4.4-1.2 1.1-3.3.8-4.4-.3l-16-17c-.5-.5-.8-1.1-.8-1.9z" />
            </svg>
          </span>
        </div>
      </button>
    );
  };

  return (
    <div className="gallery-carousel-overlay">
      <ArrowButton direction="prev" onClick={onPrev} />
      <div
        className="gallery-carousel-container"
        style={{
          border: `6px solid ${borderColor}`,
          borderRadius: "15px",
          boxShadow: `0 0 20px ${borderColor}`,
        }}
      >
        <button className="gallery-close-btn close-btn" onClick={onClose}>
          ×
        </button>
        <img
          ref={imgRef}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="gallery-carousel-image"
          crossOrigin="anonymous"
        />
      </div>
      <ArrowButton direction="next" onClick={onNext} />
    </div>
  );
};

export default GalleryCarousel;
