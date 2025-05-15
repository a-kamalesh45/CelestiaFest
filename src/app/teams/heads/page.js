"use client";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import TeamCard from "./../TeamCard";
import "./../team.css";
import Navbar from "./../../Navbar/Navbar";
import StarCanvas from "./../../StarCanvas";
import Link from "next/link";

const teamData = [
  {
    name: "Abhinav Gothwal",
    title: "Finance Head",
    image: "nssc.in/_next/image?url=%2FImage_team%2FAbhinav%20Gothwal.webp&w=1080&q=75",
    socials: [
      "https://www.facebook.com/profile.php?id=100087397276828&mibextid=ZbWKwL",
      "mailto:abhinavgothwal100@gmail.com",
      "https://www.linkedin.com/in/abhinav-gothwal-97a37119b/"
    ]
  },
  {
    name: "Akshil Jain",
    title: "Events Management Head",
    image: "nssc.in/_next/image?url=%2FImage_team%2FAkshil%20Jain.webp&w=1080&q=75",
    socials: [
      "https://www.facebook.com/profile.php?id=100087934951129&mibextid=ZbWKwL",
      "mailto:akshiljain12345@gmail.com",
      "https://www.linkedin.com/in/akshil-jain-a98787251"
    ]
  },
  {
    name: "Bibhabasu Debnath",
    title: "Tech Head",
    image: "nssc.in/_next/image?url=%2FImage_team%2FBibhabasu%20Debnath.webp&w=1080&q=75",
    socials: [
      "https://www.facebook.com/profile.php?id=100089234116472",
      "mailto:bibhabasucvsc@gmail.com",
      "https://www.linkedin.com/in/bibhabasu-debnath-b43a6a252/"
    ]
  },
  {
    name: "Bipin Kumar",
    title: "Tech Head",
    image: "nssc.in/_next/image?url=%2FImage_team%2FBipin%20Kumar.webp&w=1080&q=75",
    socials: [
      "https://www.facebook.com/profile.php?id=100014267166612&mibextid=ZbWKwL",
      "mailto:bk3284488@gmail.com",
      "https://www.linkedin.com/in/bipin-kumar-1a5b79256"
    ]
  },
  {
    name: "Heramb Warke",
    title: "Sponsorship And Marketing & Guest Lectures And Workshops Head",
    image: "nssc.in/_next/image?url=%2FImage_team%2FHeramb_r.webp&w=1080&q=75",
    socials: [
      "https://www.facebook.com/heramb.warke.9",
      "mailto:herambwarke25@gmail.com",
      "https://www.linkedin.com/in/heramb-warke-7721bb25a/"
    ]
  },
  {
    name: "Nakul sharma",
    title: "Events Management Head",
    image: "nssc.in/_next/image?url=%2FImage_team%2FNakul%20sharma.webp&w=1080&q=75",
    socials: [
      "https://www.facebook.com/profile.php?id=100087654607839",
      "mailto:nakulsharmas2005@gmail.com",
      "https://www.linkedin.com/in/nakul-sharma-a80b36252/"
    ]
  }
];

export default function TeamPage() {
  const router = useRouter();
  const pathname = usePathname();

  const isHeads = pathname.includes("heads");
  const [viewHeads, setViewHeads] = useState(isHeads);

  return (
    <div>
      <StarCanvas />
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h1 className="teams-teams-heading">Heads</h1>
        <div className="teams-btn-group">
          <button
            className="teams-btn teams-left"
            type="button"
            onClick={() => router.push("/teams/subheads")}
          >
            Sub-Heads
          </button>
          <button
            className="teams-btn teams-middle"
            type="button"
            onClick={() => router.push("/teams/secy")}
          >
            G-Secs
          </button>
          <button className="teams-btn teams-right" type="button">
            Heads
          </button>
        </div>
      </div>

      <div
        style={{
          minHeight: "100vh",
          padding: "40px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        {teamData.map((member, idx) => (
          <TeamCard key={idx} member={member} />
        ))}
      </div>
    </div>
  );
}
