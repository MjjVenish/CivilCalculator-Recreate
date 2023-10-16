import React from "react";
import "./header.css";
import header_logo_left from "./Images/header_logo_left.svg";
import header_logo_right from "./Images/header_logo_right.png";

const Header = () => {
  return (
    <header>
      <div className="container-fluid">
        <div className="row header-top p-1">
          <div className="col-md-2 col-sm-3 col-xs-8">
            <img
              src={header_logo_left}
              alt="..."
              width={189.828}
              height={80}
              className="header_logo_left"
              title="Civil Engineering Calculators - Concrete Technology, Transport Technology, Geotechnical Engineering, Quantity Estimators"
            />
          </div>
          <div className="col-md-1 d-none d-lg-block ms-md-5">
            <img
              src={header_logo_right}
              alt="..."
              width={80}
              height={45}
              className="header_logo_right"
              title="Department of Civil Engineering, Darshan Institute of Engineering &amp; Technology"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
