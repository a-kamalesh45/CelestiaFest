'use client';
import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import './Gall.css';
import Navbar from '../Navbar/Navbar';
import StarCanvas from "../StarCanvas";
import GalleryCarousel from "./GalleryCarousel";
import { gallerySections } from "./data"; // make sure this file exports your sections array

export default function GalleryPage() {
    const [images, setImages] = useState([]);
    const imgContainerRef = useRef(null);
    const borderContainerRef = useRef(null);

    // Carousel states
    const [isCarouselOpen, setIsCarouselOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [currentGroupImages, setCurrentGroupImages] = useState([]);

    // mapping border colors → section title in gallerySections
    const borderToSection = {
        blue: "STAC",
        white: "Events",
        violet: "Arena",
        green: "Exhibitions",
        orange: "Guest Lectures",
        pink: "Awards"
    };

    useEffect(() => {
        fetch('/assets/images.json')
            .then((res) => res.json())
            .then((data) => {
                const updated = Array.from({ length: 19 }, (_, i) => ({
                    src: data[i]?.src || '/assets/gallery/arena/1.jpg',
                    group: data[i]?.group || 'cyan',
                    text: data[i]?.text || null
                }));
                setImages(updated);
            });
    }, []);

    // Match heights after images load
    useEffect(() => {
        function matchHeights() {
            if (imgContainerRef.current && borderContainerRef.current) {
                borderContainerRef.current.style.height = imgContainerRef.current.offsetHeight + 'px';
            }
        }

        matchHeights();
        window.addEventListener('resize', matchHeights);
        return () => window.removeEventListener('resize', matchHeights);
    }, [images]);

    // Handle clicking a border group
    const handleBorderClick = (group) => {
        const sectionTitle = borderToSection[group];
        const section = gallerySections.find(s => s.title === sectionTitle);
        if (section) {
            setCurrentGroupImages(section.gallery);
            setCurrentImageIndex(0);
            setIsCarouselOpen(true);
        }
    };

    return (
        <div className="gallery-page">
            <StarCanvas />
            <Navbar />

            <div className="gallery-hero">
                <p>A Journey Through Images.</p>
            </div>

            <div className="gallery-wrapper">
                <div className='gallery-img-container' ref={imgContainerRef}>
                    {images.map((img, i) => (
                        <div
                            key={i}
                            className={`img-box item-${i + 1} ${img.text ? 'has-text' : ''}`}
                            data-group={img.group}
                        >
                            {img.text && (
                                <div
                                    className="img-text-overlay"
                                    style={{ fontFamily: img.font || 'inherit' }}
                                >
                                    {img.text}
                                </div>
                            )}
                            <Image
                                src={img.src}
                                alt={`Image ${i + 1}`}
                                fill
                                sizes="(max-width: 768px) 100vw, (min-width: 769px) 18vw"
                                priority={i < 10}
                            />
                        </div>
                    ))}
                </div>

                {/* Borders */}
                <div className="gallery-border-container" ref={borderContainerRef}>
                    <div
                        className="group-border"
                        data-group="blue"
                        style={{ gridColumn: '1 / span 3', gridRow: '1 / span 2' }}
                        onClick={() => handleBorderClick('blue')}
                    ></div>
                    <div
                        className="group-border"
                        data-group="white"
                        style={{ gridColumn: '4 / span 2', gridRow: '1 / span 3' }}
                        onClick={() => handleBorderClick('white')}
                    ></div>
                    <div
                        className="group-border"
                        data-group="violet"
                        style={{ gridColumn: '1 / span 3', gridRow: '3 / span 3' }}
                        onClick={() => handleBorderClick('violet')}
                    ></div>
                    <div
                        className="group-border"
                        data-group="green"
                        style={{ gridColumn: '4 / span 2', gridRow: '4 / span 2' }}
                        onClick={() => handleBorderClick('green')}
                    ></div>
                    <div
                        className="group-border"
                        data-group="orange"
                        style={{ gridColumn: '1 / span 2', gridRow: '6 / span 3' }}
                        onClick={() => handleBorderClick('orange')}
                    ></div>
                    <div
                        className="group-border"
                        data-group="pink"
                        style={{ gridColumn: '3 / span 3', gridRow: '6 / span 3' }}
                        onClick={() => handleBorderClick('pink')}
                    ></div>
                </div>
            </div>

            {/* Carousel */}
            {isCarouselOpen && (
                <GalleryCarousel
                    images={currentGroupImages}
                    currentIndex={currentImageIndex}
                    onClose={() => setIsCarouselOpen(false)}
                    onNext={() =>
                        setCurrentImageIndex((prev) => (prev + 1) % currentGroupImages.length)
                    }
                    onPrev={() =>
                        setCurrentImageIndex((prev) => (prev - 1 + currentGroupImages.length) % currentGroupImages.length)
                    }
                />
            )}
        </div>
    );
}
