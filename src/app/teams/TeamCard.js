"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import "./TeamCard.css";

const bgCards = [
  "/assets/card-frame-1.png",
  "/assets/card-frame-2.png",
  "/assets/card-frame-3.png",
  "/assets/card-frame-4.png",
  // "/assets/card-frame-6.png",
];

const getRandomCard = () => {
  return bgCards[Math.floor(Math.random() * bgCards.length)];
};

const getIconPath = (url) => {
  if (url.includes("facebook.com")) return "/assets/fb.png";
  if (url.startsWith("mailto:")) return "/assets/gm.png";
  if (url.includes("linkedin.com")) return "/assets/li.png";
  return null;
};

export default function TeamCard({ member }) {
  const [bgCard, setBgCard] = useState(null);

  useEffect(() => {
    setBgCard(getRandomCard());
  }, []);

  return (
    <div
      className="teams-card"
      style={{ backgroundImage: bgCard ? `url(${bgCard})` : "none" }}
    >
      <div className="teams-imageWrapper">
        <Image
          src={`https://${member.image}`}
          alt={member.name}
          fill
          className="teams-profileImage"
        />
        <Image src="/assets/frame7.png" alt="Frame" fill className="teams-frame" />
      </div>

      <div className="teams-info">
        <h2>{member.name}</h2>
        <p>{member.title}</p>
        <div className="teams-socials">
          {member.socials.map((url, index) => {
            const iconPath = getIconPath(url);
            return (
              iconPath && (
                <a
                  key={index}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="teams-social-link"
                >
                  <Image src={iconPath} alt="icon" width={24} height={24} />
                </a>
              )
            );
          })}
        </div>
      </div>
    </div>
  );
}
