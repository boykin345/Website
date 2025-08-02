import "../App.css";
import Navbar from "../components/Navbar";
import LinkedIn from "../assets/LinkedIn.png";
import SoundCloud from "../assets/SoundCloud.png";
import Spotify from "../assets/Spotify.png";
import Steam from "../assets/Steam.png";

function Contact() {
  return (
    <>
      <title>Contact</title>
      <div className="navbar-container">
        <Navbar />
      </div>

      <img
        src={LinkedIn}
        alt="LinkedIn"
        className="spin-image bottom-left spin-cw"
      />
      <a
        href="https://soundcloud.com/user-735227306"
        target="_blank"
        rel="noopener noreferrer"
        title="SoundCloud"
      >
        <img
          src={SoundCloud}
          alt="SoundCloud"
          className="spin-image top-left spin-ccw"
        />
      </a>
      <img
        src={Spotify}
        alt="Spotify"
        className="spin-image top-right spin-cw"
      />
      <a
        href="https://steamcommunity.com/id/juzzyboykin"
        target="_blank"
        rel="noopener noreferrer"
        title="Steam"
      >
        <img
          src={Steam}
          alt="Steam"
          className="spin-image bottom-right spin-ccw"
        />
      </a>

      <div className="about-container">
        <h1>Contact Page</h1>
        <p>
          Feel free to click on the icons to visit my profiles on various
          platforms. If you want to reach me by email:
        </p>
      </div>
    </>
  );
}

export default Contact;
