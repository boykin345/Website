import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <nav className="nav">
      <a href="/" className={currentPath === "/" ? "active" : "About"}>
        /About
      </a>
      <ul>
        <li className={currentPath === "/Blog" ? "active" : ""}>
          <a href="/Blog">/Blog</a>
        </li>
        <li className={currentPath === "/Contact" ? "active" : ""}>
          <a href="/Contact">/Contact</a>
        </li>
      </ul>
    </nav>
  );
}
