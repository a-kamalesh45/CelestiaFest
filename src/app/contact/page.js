import React from "react";
import "./contact.css";
import Navbar from "../Navbar/Navbar";
import StarCanvas from "../StarCanvas";

export default function Contact() {
  return (
    <div>
      <StarCanvas />
      <Navbar />
      <div className="contact-container">
        <div className="contact-card">
          <div className="contact-left">
            <h2>Contact Us 🚀</h2>
            <p>We'd love to hear from you! Reach out with any questions or feedback.</p>

            <ul className="contact-info">
              <li><span>📍</span> Kalpana Chawla Space Technology Cell, IIT Kharagpur</li>
              <li><span>📞</span> +91 6200429087<br /> +91 9509574674</li>
              <li><span>🌐</span> spats.co.in</li>
              <li><span>✉️</span> spats.iitkgp@gmail.com</li>
            </ul>

            <div className="contact-social-icons">
              <a href="#"><img src="/assets/fb.svg" alt="Facebook" /></a>
              <a href="#"><img src="/assets/ig.svg" alt="Instagram" /></a>
              <a href="#"><img src="/assets/li.svg" alt="LinkedIn" /></a>
              <a href="#"><img src="/assets/yt.svg" alt="YouTube" /></a>
            </div>
          </div>

          <div className="contact-right">
            <h2>Send a Message ✉️</h2>
            <form>
              <input type="text" placeholder="Name" required />
              <input type="email" placeholder="Email address" required />
              <input type="tel" placeholder="Phone number" />
              <textarea placeholder="Your message" required></textarea>
              <button type="submit">Launch Message 🚀</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
