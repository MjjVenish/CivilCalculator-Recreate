import React from "react";

import "../style/mainNav.css";
import MainNavChild from "./MainNavChild";

const MainNavBar = () => {
  return (
    <div className="main-nav">
      <nav className="flex flex-dir nav-main">
        <div className="flex">
          <h3>
            Quantity Estimator <span>Calculators</span>
          </h3>
        </div>
        <MainNavChild />
      </nav>
    </div>
  );
};

export default MainNavBar;
