"use client"
import { useState } from "react";
import "./gl.css";
import Navbar from "../Navbar/Navbar";
import StarCanvas from "../StarCanvas";
import guestLectures from "./data";

export default function GuestLectures() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const openDetails = (i) => {
        setExpandedIndex(i);
        document.body.style.overflow = "hidden"; // prevent scroll when expanded
    };

    const closeDetails = () => {
        setExpandedIndex(null);
        document.body.style.overflow = "auto";
    };

    return (
        <div className="gl-page">
            <StarCanvas />
            <Navbar />
            <div className="gl-grid">
                {guestLectures.map((guest, i) => {
                    const isExpanded = i === expandedIndex;
                    return (
                        <div
                            key={i}
                            className={`gl-card-container ${isExpanded ? "gl-expanded" : ""}`}
                            onClick={() => {
                                if (!isExpanded) openDetails(i);
                            }}
                        >
                            <div className="gl-card-inner">
                                {/* Front Face */}
                                <div className="gl-card-front">
                                    <img
                                        src={guest.image}
                                        alt={guest.name}
                                        className={`gl-image ${isExpanded ? "gl-hidden" : ""}`}
                                    />
                                    <div className="gl-overlay">
                                        <div className="gl-name">{guest.name}</div>
                                        <div className="gl-title">👤 {guest.title}</div>
                                    </div>
                                    {!isExpanded && (
                                        <div className="gl-hover-panel">
                                            <button
                                                className="gl-button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    openDetails(i);
                                                }}
                                            >
                                                View Details
                                            </button>
                                        </div>
                                    )}
                                </div>

                                {/* Expanded Back Content */}
                                {isExpanded && (
                                    <div className="gl-card-back-expanded">
                                        <button
                                            className="gl-close-button"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                closeDetails();
                                            }}
                                        >
                                            ✕
                                        </button>
                                        <h2 className="gl-expanded-name">{guest.name}</h2>
                                        <h4 className="gl-expanded-title">{guest.title}</h4>
                                        <p>
                                            <strong>Venue:</strong> {guest.venue}
                                        </p>
                                        <p>
                                            <strong>Time:</strong> {guest.time}
                                        </p>
                                        <p>{guest.details}</p>
                                        <p>
                                            <strong>Achievements:</strong> {guest.achievements}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
