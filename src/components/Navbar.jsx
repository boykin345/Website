import { NavLink } from "react-router-dom";
import React from "react";

export default function Navbar() {
  return (
    <div className="nav">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active logo" : "logo")}
      >
        About
      </NavLink>
      <NavLink
        to="/Blog"
        className={({ isActive }) => (isActive ? "active logo" : "logo")}
      >
        Blog
      </NavLink>

      <NavLink
        to="/Contact"
        className={({ isActive }) => (isActive ? "active logo" : "logo")}
      >
        Contact
      </NavLink>
    </div>
  );
}
