"use client";
import React, { useState } from 'react';
import './Navbar.css';
import '../style.css';
import Link from 'next/link';

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  return (
    <header className="navbar">
      <div className="navbar2">
        <Link href="/" className="nav-logo" onClick={() => setMenuActive(false)}>
          <img className="nav-nssc-logo" src="/assets/nssc-logo.webp" alt="NSSC Logo" />
          <img src="/assets/nssc.png" alt="NSSC" />
          {/* <span>Celestia</span> */}
        </Link>

        {/* Hamburger toggle button */}
        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={menuActive}
          onClick={toggleMenu}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuActive ? 'active' : ''}`}>
          <li>
            <Link href="/schedule" className="nav-btn" onClick={() => setMenuActive(false)}>
              SCHEDULE
            </Link>
          </li>
          <li>
            <Link href="/teams/heads" className="nav-btn" onClick={() => setMenuActive(false)}>
              TEAMS
            </Link>
          </li>
          <li>
            <Link href="/guest-lecture" className="nav-btn" onClick={() => setMenuActive(false)}>
              GUEST LECTURE
            </Link>
          </li>
          <li>
            <Link href="/gallery" className="nav-btn" onClick={() => setMenuActive(false)}>
              GALLERY
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-btn" onClick={() => setMenuActive(false)}>
              CONTACT
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
