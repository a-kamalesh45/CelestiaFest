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
      "name": "Aaradhya Shukla",
      "title": "Public Relations Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FAaradhya.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/aaradhya1729?mibextid=ZbWKwL",
        "mailto:aaradhyashukla231@gmail.com",
        "https://www.linkedin.com/in/aaradhya-shukla-205289280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Abhishek Saha",
      "title": "Tech Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FAvishek.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=100094570903087&mibextid=LQQJ4d",
        "mailto:abhisheksaha9760@gmail.com",
        "https://www.linkedin.com/in/abhishek-saha-2531aa287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
      ]
    },
    {
      "name": "Adarsh Satappa Patil",
      "title": "Public Relations Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FPatil.webp&w=1080&q=75",
      "socials": [
        "mailto:adarshspatil9299@gmail.com",
        "https://www.linkedin.com/in/adarsh-patil-08aa42255?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Adarsh Tipradi",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FAdarsh.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=100095417897377&mibextid=9R9pXO",
        "mailto:undefined",
        "http://linkedin.com/in/adarsh-tipradi-81236b282"
      ]
    },
    {
      "name": "Anaya Dixit",
      "title": "Design Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FAnaya.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61551109799111",
        "mailto:anayadixit14@gmail.com",
        "https://www.linkedin.com/in/anaya-dixit-272746231?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Annu Chaurasiya",
      "title": "Public Relations Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FAnnu.webp&w=1080&q=75",
      "socials": [
        "mailto:chaurasiyaannu262@gmail.com",
        "https://www.linkedin.com/in/annu-chaurasiya-a0698328a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Anurag Kumar Singh",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FAnurag.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61550124260784&mibextid=ZbWKwL",
        "mailto:anurag452518@gmail.com",
        "https://www.linkedin.com/in/anurag-kumar-b795122a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Anushesh Jumale",
      "title": "Public Relations Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FAnushesh.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/anushesh.jumale/",
        "mailto:anusheshjumale88@gmail.com",
        "https://www.linkedin.com/in/anushesh-jumale-b6774828b/"
      ]
    },
    {
      "name": "Anwesha Barman",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FAnweshaBarman.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61556356970943&mibextid=ZbWKwL",
        "mailto:anweshaacademics@gmail.com",
        "www.linkedin.com/in/anwesha-barman-2b4116259"
      ]
    },
    {
      "name": "Aparajita Verma",
      "title": "Public Relations Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2Faparajita.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=100095500124117",
        "mailto:aparajitasushma28@gmail.com",
        "https://www.linkedin.com/in/aparajitaverma42/"
      ]
    },
    {
      "name": "Arnav Gupta",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FArnav_Gupta.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=100094503500415&mibextid=ZbWKwL",
        "mailto:arnavgupta151@gmail.com",
        "https://www.linkedin.com/in/arnav-gupta-0468422b2/"
      ]
    },
    {
      "name": "Bhushan Deshmane",
      "title": "Public Relations Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FBhushan.webp&w=1080&q=75",
      "socials": [
        "https://m.facebook.com/profile.php/?id=100093696440245",
        "mailto:bhushandeshmane2005@gmail.com",
        "https://www.linkedin.com/in/bhushan-deshmane-83b296287?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Chirag Sharma",
      "title": "Sponsorship Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FChirag.webp&w=1080&q=75",
      "socials": [
        "mailto:chirag003214@gmail.com",
        "https://www.linkedin.com/in/chirag-sharma-30161226b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Devansh Gupta",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FDevansh_Gupta.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61550024608509&mibextid=ZbWKwL",
        "mailto:devanshg308@gmail.com",
        "https://www.linkedin.com/in/devansh308"
      ]
    },
    {
      "name": "Dnyaneshwari Ghare",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FDnyaneshwari_Ghare.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61550666596899&mibextid=ZbWKwL",
        "mailto:dnyaneshwarighare5@gmail.com",
        "https://www.linkedin.com/in/dnyaneshwari-ghare-9a274928b"
      ]
    },
    {
      "name": "Geo Joyson Pynadath",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FGeo_Joyson.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61550831621009",
        "mailto:geoj2018@gmail.com",
        "http://www.linkedin.com/in/geo-joyson-pynadath"
      ]
    },
    {
      "name": "Hardik Kaurav",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2Fhardik_kaurav.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61550220172106&mibextid=ZbWKwL",
        "mailto:hardik.14.rk@gmail.com",
        "https://www.linkedin.com/in/hardik-kaurav-18697b27b/"
      ]
    },
    {
      "name": "Harsh Vibhor Sharma",
      "title": "Sponsorship Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FHarsh_Vibhor_Sharma.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61550895703622&mibextid=ZbWKwL",
        "mailto:harshvibhor3107@gmail.com",
        "https://www.linkedin.com/in/harsh-vibhor-sharma-014348251?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Machavolu Venkata Sushanth",
      "title": "Tech Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FShushanth.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61550652503596",
        "mailto:sushanthmachavolu@gmail.com",
        "www.linkedin.com/in/sushanth-machavolu-5477992a3"
      ]
    },
    {
      "name": "Manish",
      "title": "Design Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FManish.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61554591989659",
        "mailto:manish899832@gmail.com",
        "www.linkedin.com/in/manishsuthar18"
      ]
    },
    {
      "name": "Mehedhi Hassan",
      "title": "Public Relations Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FMehedhi_Hassan.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/mehedhi.hassan.58?mibextid=ZbWKwL",
        "mailto:mehedhi.hassan10@gmail.com",
        "https://www.linkedin.com/in/mehedhi2909?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Mukesh N",
      "title": "Design Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FMukesh_N.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61553713844994",
        "mailto:mukeshjeeiit68@gmail.com",
        "https://www.linkedin.com/in/mukesh-n-687372289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Om Dabhade",
      "title": "Sponsorship Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FOm_Dabhade.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/om.dabhade.9237?mibextid=ZbWKwL",
        "mailto:omdabhade18705@gmail.com",
        "https://www.linkedin.com/in/om-dabhade-23826629a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Pallab Biswas",
      "title": "Tech Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FPallab_Biswas.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61551202821895",
        "mailto:pallabbiswas891@gmail.com",
        "https://www.linkedin.com/in/pallab-biswas-5358b028b/"
      ]
    },
    {
      "name": "Pranav Jaiganesh",
      "title": "Tech Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FPranav.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=100095228883965&sk=about",
        "mailto:pranavjaiganesh2005@gmail.com",
        "https://www.linkedin.com/in/pranav-jaiganesh-28361728b/"
      ]
    },
    {
      "name": "Priyanshi Mittal",
      "title": "Design Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FPriyanshi_mittal_.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=100095318268322&mibextid=LQQJ4d",
        "mailto:priyanshimittalggc@gmail.com",
        "https://www.linkedin.com/in/priyanshi-mittal-26537b290"
      ]
    },
    {
      "name": "Saksham Tiwari",
      "title": "Sponsorship Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FSaksham_Tiwari.webp&w=1080&q=75",
      "socials": [
        "mailto:sakshamtiwari1701@gmail.com",
        "https://www.linkedin.com/in/saksham-tiwari-859792290?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Samarth Sharma",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FSamarth.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=100095410458253&mibextid=ZbWKwL",
        "mailto:samarth0103sharma@gmail.com",
        "https://www.linkedin.com/in/samarth-sharma-6506a4288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Shaurya Singh Raghaw",
      "title": "Sponsorship Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FSHAURYA.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61550196085172&mibextid=9R9pXO",
        "mailto:ssrgenz@gmail.com",
        "https://www.linkedin.com/in/shaurya-singh-raghaw-75b644238?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Shiven Lohia",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FShiven_Lohia.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61551551027989",
        "mailto:shivenlohia2005@gmail.com",
        "www.linkedin.com/in/shiven-lohia-b83a022b2"
      ]
    },
    {
      "name": "Shradha",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2Fshradha.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61550047857144",
        "mailto:karnshradha@gmail.com",
        "https://www.linkedin.com/in/shradha-k-72995628b/?trk=public-profile-join-page"
      ]
    },
    {
      "name": "Shravani Sandesh Naik",
      "title": "Design Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FShravani.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61550929405298&mibextid=ZbWKwL",
        "mailto:shravanisnaik1830051@gmail.com",
        "https://www.linkedin.com/in/shravani-naik-9b7241288?trk=recent-searches"
      ]
    },
    {
      "name": "Siddhant Singh",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FSiddhant.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61551066053784",
        "mailto:siddhantsingh.15032005@gmail.com",
        "https://www.linkedin.com/in/siddhant-singh-363313290/"
      ]
    },
    {
      "name": "T. Susritha",
      "title": "Tech Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FSusritha.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61550241538001&mibextid=ZbWKwL",
        "mailto:susrithat@gmail.com",
        "https://www.linkedin.com/in/susritha-tankala-40b922289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Trideshvaran B",
      "title": "Tech Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FTrideshvaran.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=100095234694876&mibextid=ZbWKwL",
        "mailto:tridesh2005@gmail.com",
        "https://www.linkedin.com/in/trideshvaran-bharathi-7197a71ab?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Tusharanshu Pandey",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FTusharanshu.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php/?id=61550192852898",
        "mailto:tusharanshu.pandey123@gmail.com",
        "https://www.linkedin.com/in/tusharanshu-pandey-a83400286/"
      ]
    },
    {
      "name": "Unnati Vikas Rakshaskar",
      "title": "Design Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FUnnati.webp&w=1080&q=75",
      "socials": [
        "mailto:unnatirakshaskar@gmail.com",
        "www.linkedin.com/in/unnati-r-3009871a7"
      ]
    },
    {
      "name": "Varshitha Reddy Puthalapattu",
      "title": "Sponsorship Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2Fvarshita_reddy.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61554311266807&mibextid=ZbWKwL",
        "mailto:varshithareddy3456@gmail.com",
        "https://www.linkedin.com/in/varshitha-reddy-1b9a17298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
      ]
    },
    {
      "name": "Vedant Malsure",
      "title": "Public Relations Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FVedant_Malsure.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/vedant.malsure",
        "mailto:malsurevedant@gmail.com",
        "https://www.linkedin.com/in/vedant-malsure-838a1b292/"
      ]
    },
    {
      "name": "Vellore Kushal Raj",
      "title": "Events Team",
      "image": "nssc.in/_next/image?url=%2FImage_team%2FVellore_Kushal.webp&w=1080&q=75",
      "socials": [
        "https://www.facebook.com/profile.php?id=61555900301927&mibextid=ZbWKwL",
        "mailto:vellorekushalraj2004@gmail.com",
        "https://www.linkedin.com/in/kushal-raj-vellore-8416b92b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
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
        <h1 className="teams-teams-heading">Sub Heads</h1>
        <div className="teams-btn-group">
          <button
            className="teams-btn teams-left"
            type="button"
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
