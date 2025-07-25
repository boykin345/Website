import "./PersonalInfoTab.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const PersonalInfoTab = () => {
  return (
    <div className="applet">
      <h1>Mikhail Y. Kolyakin</h1>
      <p className="role">Junior Web Developer</p>

      <div className="button-links">
        <a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          <FaGithub style={{ marginRight: "8px" }} />
          GitHub
        </a>

        <a
          href="https://linkedin.com/in/username"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          <FaLinkedin style={{ marginRight: "8px" }} />
          LinkedIn
        </a>

        <a href="mailto:example@example.com" className="link-button">
          <FaEnvelope style={{ marginRight: "8px" }} />
          Email Me
        </a>
      </div>
    </div>
  );
};

export default PersonalInfoTab;
