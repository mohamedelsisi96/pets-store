import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { ThemeContext } from './ThemeProvider.js'; // Import the ThemeContext

export default function Navbar() {
  // const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={`navbar navbar-expand-lg sticky-top mb-2 `}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            className="logo"
            src="https://static.frontendmasters.com/resources/2019-05-02-complete-intro-react-v5/image-logo.png"
            alt=""
          />
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Search
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/result">
                Pets
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/mypit">
                My Pets
              </Link>
            </li>
            {/* <li className="nav-item">
              <button className="nav-link" onClick={toggleTheme}>
                {theme === 'light' ? '🌙' : '☀️'}
              </button>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
}
