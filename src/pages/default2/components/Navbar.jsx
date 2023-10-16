import React from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <nav className="MainNavbar">
      <NavLink to={""} className={"navbarnavhome"}>
        <AiOutlineHome />
      </NavLink>
      <NavLink to={""} className={"navbarnav"}>
        Quantity-Estimator
      </NavLink>
      <BiChevronDown className="nav-icon" />
      <NavLink to={""} className={"navbarnav"}>
        Concrete Technology
      </NavLink>
      <BiChevronDown className="nav-icon" />
      <NavLink to={""} className={"navbarnav"}>
        Geotechnical Engineering
      </NavLink>
      <BiChevronDown className="nav-icon" />
      <NavLink to={""} className={"navbarnav"}>
        Environmental Engineering
      </NavLink>
      <BiChevronDown className="nav-icon" />
      <NavLink to={""} className={"navbarnav"}>
        Contcat Us
      </NavLink>
    </nav>
  );
};

export default Navbar;
