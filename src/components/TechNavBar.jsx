import React from "react";
import { NavLink } from "react-router-dom";

const TechNavBar = () => {
  return (
    <nav className="icon-nav flex flex-dir">
      <NavLink>Sieve Analysis of Aggregates</NavLink>
      <NavLink>Aggregate impact value</NavLink>
      <NavLink>Aggregate crushing value</NavLink>
      <NavLink>Aggregate abrasion value</NavLink>
      <NavLink>Aggregate water absorption</NavLink>
    </nav>
  );
};

export default TechNavBar;
