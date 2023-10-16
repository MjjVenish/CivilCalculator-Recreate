import React, { useEffect } from "react";
import logo from "../asset/imgs/CivilLogo2.png";
import logoCivil from "../asset/imgs/CivilLogoE1.png";
import { useState } from "react";
import { VscThreeBars } from "react-icons/vsc";
import "../style/header.css";
import NavbarChild from "./NavbarChild";

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [shownav, setShownav] = useState(true);
  useEffect(() => {
    const hadleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", hadleResize);
    return () => {
      window.removeEventListener("resize", hadleResize);
    };
  });
  return (
    <>
      <div className="Mainheader">
        <img className="civillogo" src={logoCivil} alt="#" />
        {windowWidth < 967 ? (
          <div>
            <VscThreeBars
              className="header-icon"
              onClick={() => setShownav(!shownav)}
            />
          </div>
        ) : (
          <img className="civillogo2" src={logo} alt="#" />
        )}
      </div>

      <NavbarChild
        navpadding={shownav}
        windowWidth={windowWidth}
        shownav={shownav}
      />
    </>
  );
};

export default Header;
