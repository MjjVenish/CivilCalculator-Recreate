import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand d-none d-lg-block mx-3" href="/">
          <i className="bi bi-house-door"></i>
        </a>
        <span></span>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav d-block d-lg-none">
            <li className="nav-item">
              <a className="nav-link" href="/">
                <i className="bi bi-house-door"></i> Home
              </a>
            </li>
          </ul>
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mx-1"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Quantity Estimator
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Construction Cost Estimator Calculator
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Carpet Built Up Super Built Up Area Calculator
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Cement Concrete Calculator
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Plastering Calculator
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    PCC Calculator
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    RCC Calculator
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Brick Calculator
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Concrete Block Calculator
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mx-1"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Concrete Technology
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Sieve Analysis of Aggregates
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Aggregate Impact Value
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Aggregate Crushing Value
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Aggregate Abrasion Value
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Aggregate Water Absorption
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mx-1"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Geotechnical Engineering
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Water Content Determination
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Specific Gravity of Soil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Sieve analysis of Soil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Free Swell Index of Soil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Liquid Limit of Soil
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Permeability By Falling Head
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Permeability by Constant Head
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle mx-1"
                href="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Environmental Engineering
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="/">
                    Chemical Oxygen Demand (COD) Test
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Biochemical Oxygen Demand (BOD) Test
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/">
                    Ammonical Nitrogen Test
                  </a>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-1" aria-current="page" href="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
