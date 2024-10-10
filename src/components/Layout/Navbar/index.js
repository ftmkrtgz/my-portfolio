import { Link } from "react-router-dom";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  const linkedinUrl =
    "https://www.linkedin.com/in/fatma-kurtg%C3%B6z%C3%BC-5693aa288/";

  const githubUrl = "https://github.com/ftmkrtgz";

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="container-fluid justify-content-between">
        <div className="logo">
          <Link className="navbar-brand" to="/">
            <span className="logo-img">Fatma Kurtgozu</span>
          </Link>
        </div>

        <div className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
          <ul className="nav">
            <li className="nav-item">
              <Link
                className="nav-link nav-navbar"
                to="/"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/portfolio"
                onClick={closeMobileMenu}
              >
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link contact"
                to="/contact"
                onClick={closeMobileMenu}
              >
                Contact
              </Link>
            </li>
            <li>
              <hr className="line"></hr>
              <Link to={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <span className="fs-1 ms-3 icon-1">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </Link>
              <Link to={githubUrl} target="_blank" rel="noopener noreferrer">
                <span className="fs-1 ms-4 icon-1">
                  <FontAwesomeIcon icon={faGithub} />
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="hamburger" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <span className="menu-icon">
              <FaTimes />
            </span>
          ) : (
            <span className="menu-icon">
              <FaBars />
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
