import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "./ThemeContext";

const Navbar: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-dark bg-dark ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
    >
      <div className="container-fluid">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            `navbar-brand ${isActive ? "active" : ""}`
          }
        >
          Task Manager
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/add-task"
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
              >
                Add Task
              </NavLink>
            </li>
          </ul>

          <div className="form-check form-switch ms-auto">
            <input
              className="form-check-input"
              type="checkbox"
              id="darkModeSwitch"
              onChange={toggleDarkMode}
              checked={darkMode}
            />
            <label
              className="form-check-label"
              htmlFor="darkModeSwitch"
              style={{ cursor: "pointer" }}
            >
              {darkMode ? "🌙" : "🌞"}
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
