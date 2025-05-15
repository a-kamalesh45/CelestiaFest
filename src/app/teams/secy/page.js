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
        "name": "Dolly Verma",
        "title": "General Secretary & Design and Media Head",
        "image": "nssc.in/_next/image?url=%2FImage_team%2FDolly%20Verma.webp&w=1080&q=75",
        "socials": [
            "https://www.facebook.com/profile.php?id=100087812076115",
            "mailto:dvrm3207@gmail.com",
            "https://www.linkedin.com/in/dolly-verma-542302265"
        ]
    },
    {
        "name": "Harsh Gupta",
        "title": "General Secretary & Public Relations Head",
        "image": "nssc.in/_next/image?url=%2FImage_team%2FHarsh%20Gupta.webp&w=1080&q=75",
        "socials": [
            "https://www.facebook.com/profile.php?id=100032787145475",
            "mailto:Harsh200415@gmail.com",
            "https://www.linkedin.com/in/harsh-gupta-699939259/"
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
        <h1 className="teams-teams-heading">General Secretaries</h1>
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
            >
            G-Secs
          </button>
          <button 
          className="teams-btn teams-right" 
          type="button"
          onClick={() => router.push("/teams/heads")}
          >
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
