import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      {/* About / Home link */}
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active logo" : "logo")}
      >
        /About
      </NavLink>

      <ul>
        <li>
          <NavLink
            to="/Blog"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            /Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Contact"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            /Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
