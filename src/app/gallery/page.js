"use client"
import React, { useState } from "react";
import "./GalleryCard.css";
import "./Gallery.css";
// import "./GalleryCarousel.css"
import GalleryCard from "./GalleryCard";
import Navbar from '../Navbar/Navbar';
import { gallerySections } from "./data";
import GalleryCarousel from "./GalleryCarousel";
import StarCanvas from "../StarCanvas";
import GalleryGrid from "./GalleryGrid";



const Gallery = () => {
  const [selectedSection, setSelectedSection] = useState(null);
  const [isCarouselOpen, setIsCarouselOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);


  const handleViewMore = (title) => {
    setSelectedSection(title);
  };

  const handleImageClick = (index) => {
    setCurrentImageIndex(index);
    setIsCarouselOpen(true);
  };

  const handleCloseCarousel = () => {
    setIsCarouselOpen(false);
  };

  const handleNext = () => {
    const images = gallerySections.find(s => s.title === selectedSection)?.gallery || [];
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    const images = gallerySections.find(s => s.title === selectedSection)?.gallery || [];
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const selectedImages = gallerySections.find(s => s.title === selectedSection)?.gallery || [];

  return (
    <div className="gallery-page">
      <StarCanvas />
      <Navbar />

      {!selectedSection ? (
        <div className="gallery-wrapper">
          <div className="gallery-container">
            {gallerySections.map((section, index) => (
              <GalleryCard
                key={index}
                title={section.title}
                image={section.image}
                description={section.description}
                onViewMore={handleViewMore}
              />
            ))}
          </div>
        </div>
      ) : (
        <div>
          {/* Go Back Button */}
          <div
  onClick={() => setSelectedSection(null)}
  className="group relative w-40 h-12 rounded-2xl cursor-pointer overflow-hidden"
>
  {/* Animated background */}
  <div className="absolute inset-0 bg-blue-400 w-10 group-hover:w-full transition-all duration-500 rounded-2xl z-0"></div>

  {/* Foreground content */}
  <div className="relative z-10 flex items-center justify-center h-full px-4 text-black font-semibold">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="mr-2"
      viewBox="0 0 1024 1024"
      height="20"
      width="20"
    >
      <path d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z" fill="black" />
      <path
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        fill="black"
      />
    </svg>
    Go Back
  </div>
</div>



          {/* Gallery Grid with clickable images */}
          <GalleryGrid
            sectionName={selectedSection}
            onImageClick={handleImageClick}
          />

          {/* Carousel for full-screen image viewer */}
          {isCarouselOpen && (
            <GalleryCarousel
              images={selectedImages}
              currentIndex={currentImageIndex}
              onClose={handleCloseCarousel}
              onPrev={handlePrev}
              onNext={handleNext}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default Gallery;
