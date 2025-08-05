import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="nav">
      <a href="/About" className="about">
        About
      </a>
      <ul>
        <li className={currentPath === "/Fancy" ? "active" : ""}>
          <a href="/Fancy">Projects</a>
        </li>
        <li className={currentPath === "/Contact" ? "active" : ""}>
          <a href="/Contact">Contact</a>
        </li>
        <li>
          <h1>Blog (WIP)</h1>
        </li>
      </ul>
    </nav>
  );
}
