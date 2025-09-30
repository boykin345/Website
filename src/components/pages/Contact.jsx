import "../../App.scss";
import Navbar from "../Navbar";
import LinkedIn from "../../assets/LinkedIn.png";
import SoundCloud from "../../assets/SoundCloud.png";
import Spotify from "../../assets/Spotify.png";
import Steam from "../../assets/Steam.png";
import GitHub from "../../assets/github.png";
import Twitter from "../../assets/Twitter.png";
import Reddit from "../../assets/Reddit.png";
import ApiTime from "../ApiTime";
import React, { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);
  return (
    <>
      <title>Contact</title>
      <div className="navbar-container">
        <Navbar />
      </div>
      <section className="about-container-contact">
        <h1 className="about-text">Email:</h1>
        <h2>
          <a
            href="mailto:M.Koliakin@me.com"
            style={{ color: "inherit", textDecoration: "none" }}
            className="about-text"
          >
            M.Koliakin@me.com
          </a>
        </h2>
        <div className="about-text">
          <h3>my local time</h3>
          <ApiTime></ApiTime>
        </div>
      </section>
      <div className="projects-container">
        <a
          href="https://soundcloud.com/user-735227306"
          target="_blank"
          rel="noopener noreferrer"
          title="SoundCloud"
        >
          <img src={SoundCloud} alt="SoundCloud" className="icon spin-ccw" />
        </a>
        <a
          href="https://open.spotify.com/user/31lpevsqaz6ftqu23sk2vddr3pdq?si=e4b3c22b1a0147e7"
          target="_blank"
          rel="noopener noreferrer"
          title="Spotify"
        >
          <img src={Spotify} alt="Spotify" className="icon spin-cw" />
        </a>
        <a
          href="https://steamcommunity.com/id/juzzyboykin"
          target="_blank"
          rel="noopener noreferrer"
          title="Steam"
        >
          <img src={Steam} alt="Steam" className="icon spin-ccw" />
        </a>
        <a
          href="https://www.linkedin.com/in/mikhail-kolyakin-946734259/"
          target="_blank"
          rel="noopener noreferrer"
          title="LinkedIn"
        >
          <img src={LinkedIn} alt="LinkedIn" className="icon spin-cw" />
        </a>
        <a
          href="https://github.com/boykin345"
          target="_blank"
          rel="noopener noreferrer"
          title="GitHub"
        >
          <img src={GitHub} alt="GitHub" className="icon spin-ccw icon-large" />
        </a>
        <a
          href="https://x.com/BoyKin345"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <img src={Twitter} alt="Twitter" className="icon spin-cw" />
        </a>
        <a
          href="https://www.reddit.com/user/Substantial-Purple60/"
          target="_blank"
          rel="noopener noreferrer"
          title="Reddit"
        >
          <img src={Reddit} alt="Reddit" className="icon spin-ccw" />
        </a>
      </div>
    </>
  );
}

export default Contact;
