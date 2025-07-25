import "./ProjectsTab.css";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ProjectsTab = () => {
  return (
    <div className="applet">
      <h1>Projects</h1>

      <div className="button-links">
        <a
          href="https://github.com/username"
          target="_blank"
          rel="noopener noreferrer"
          className="link-button"
        >
          <FaGithub style={{ marginRight: "8px" }} />
          This Website
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

export default ProjectsTab;
