import React from 'react';
import './GalleryGrid.css';
import { gallerySections } from './data'; // Adjust path as needed

const GalleryGrid = ({ sectionName, onImageClick }) => {
  const section = gallerySections.find(
    (s) => s.title.toLowerCase() === sectionName.toLowerCase()
  );

  if (!section) return <div>Section not found</div>;

  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">{section.title}</h2>
      <p className="gallery-description">{section.description}</p>
      <div className="gallery-grid-section">
        {section.gallery.map((image, index) => (
          <div key={index} className="gallery-image-wrapper" onClick={() => onImageClick(index)}>
            <img src={image} alt={`Gallery ${index + 1}`} className="gallery-image" />
            {/* <img src="/assets/gallery-frame2.png" alt="" className="gallery-image-frame" /> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
