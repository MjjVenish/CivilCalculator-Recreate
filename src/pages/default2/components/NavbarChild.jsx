import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronRight } from "react-icons/bi";
import "../style/navbarchild.css";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

const NavbarChild = ({ navpadding, windowWidth, shownav }) => {
  return (
    <>
      {windowWidth > 967 ? (
        <Navbar />
      ) : (
        <>
          {shownav ? (
            <div className="s-Navbar">
              <NavLink to={""} className={"s-navbarnavhome"}>
                <AiOutlineHome /> Home
              </NavLink>
              <NavLink to={""} className={"s-navbarnav"}>
                Quantity-Estimator
              </NavLink>
              <NavLink to={""} className={"s-navbarnav"}>
                Concrete Technology
              </NavLink>
              <NavLink to={""} className={"s-navbarnav"}>
                Geotechnical Engineering
              </NavLink>
              <NavLink to={""} className={"s-navbarnav"}>
                Environmental Engineering
              </NavLink>
              <NavLink to={""} className={"s-navbarnav"}>
                Contcat Us
              </NavLink>
            </div>
          ) : (
            <></>
          )}
        </>
      )}
      <div
        className={`${
          navpadding ? "padding Nav-child-parent" : "Nav-child-parent"
        }`}
      >
        <h2 className="nav-child-heading">
          Carpet Area / Built up Area / Super built up Area Calculator
        </h2>
        <div className="Nav-child-parent2">
          <AiOutlineHome className="nac-child-icon p-color" />
          <p className="nav-child-p">Home</p>
          <BiChevronRight className="nac-child-icon p-color" />
          <p className="nav-child-p">Quantity-Estimator</p>
          <BiChevronRight className="nac-child-icon p-color" />
          <p className="nav-child-p p-color">Caculate Carpet Area</p>
        </div>
      </div>
    </>
  );
};

export default NavbarChild;
