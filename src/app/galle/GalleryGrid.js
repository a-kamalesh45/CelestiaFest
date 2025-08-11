import React, { useState, useEffect, useRef } from 'react';
import './GalleryGrid.css';
import ColorThief from 'color-thief-browser';
import { gallerySections } from './data';

const GalleryGrid = ({ sectionName, onImageClick }) => {
  const section = gallerySections.find(
    (s) => s.title.toLowerCase() === sectionName.toLowerCase()
  );

  const imageRefs = useRef([]);
  const [borderColors, setBorderColors] = useState({});

  useEffect(() => {
    const colorThief = new ColorThief();
    section?.gallery?.forEach((_, index) => {
      const img = imageRefs.current[index];
      if (!img) return;

      const handleLoad = () => {
        try {
          const color = colorThief.getColor(img);
          setBorderColors((prev) => ({
            ...prev,
            [index]: `rgb(${color[0]}, ${color[1]}, ${color[2]})`,
          }));
        } catch (error) {
          console.error("Color extraction failed", error);
        }
      };

      if (img.complete) {
        handleLoad();
      } else {
        img.addEventListener("load", handleLoad);
        return () => img.removeEventListener("load", handleLoad);
      }
    });
  }, [section]);

  if (!section) return <div>Section not found</div>;

  return (
    <div className="gallery-wrapper">
      <h2 className="gallery-title">{section.title}</h2>
      <p className="gallery-description">{section.description}</p>
      <div className="gallery-grid-section">
        {section.gallery.map((image, index) => (
          <div
            key={index}
            className="gallery-image-wrapper"
            onClick={() => onImageClick(index)}
            style={{
              border: `4px solid ${borderColors[index] || '#ffffff'}`,
              padding: '2px',
              // borderRadius: '18px',
              backgroundColor: '#000', // ensures black behind glow
              boxShadow: `
              0 0 5px ${borderColors[index] || '#ffffff'},
              0 0 8px ${borderColors[index] || '#ffffff'},
              0 0 10px ${borderColors[index] || '#ffffff'}
            `,
              transition: 'box-shadow 0.3s ease',
            }}
          >
            <img
              ref={(el) => (imageRefs.current[index] = el)}
              src={image}
              alt={`Gallery ${index + 1}`}
              className="gallery-image"
              style={{
                width: '100%',
                // borderRadius: '12px',
                display: 'block',
              }}
            />
          </div>

        ))}
      </div>
    </div>
  );
};

export default GalleryGrid;
