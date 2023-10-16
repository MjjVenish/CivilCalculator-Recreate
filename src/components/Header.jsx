import { AiOutlineUnorderedList, AiOutlineHome } from "../Icons/icons";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";
import { useState } from "react";
import MainNavBar from "./MainNavBar";
import TechNavBar from "./TechNavBar";
import MainNavChild from "./MainNavChild";

const Header = () => {
  const [nav, setNav] = useState({
    option: false,
    estimator: false,
    tech: false,
    envior: false,
    lab: false,
  });
  const [hov, setHov] = useState(false);

  const hidden = () => setHov(false);

  return (
    <header className=" ">
      <div className="container-fluid flex main-head items-center just-arround">
        <div className="flex ">
          <h1>Civil</h1>
          <div className="eng-cal">
            <h3 className="bot">Engineering</h3>
            <h3>Calculators</h3>
          </div>
        </div>
        <div>
          <AiOutlineUnorderedList
            className="icon-option"
            onClick={() => setNav({ ...nav, option: !nav.option })}
          />
        </div>
      </div>
      {nav.option && (
        <nav className="icon-nav flex flex-dir lab-nav">
          <NavLink>
            <AiOutlineHome /> Home
          </NavLink>
          <NavLink
            onClick={() =>
              setNav({
                ...nav,
                estimator: !nav.estimator,
                tech: false,
                envior: false,
              })
            }
            className={`${nav.estimator ? "color" : ""}`}
          >
            Quantity Estimator
          </NavLink>
          {nav.estimator && <MainNavBar />}
          <NavLink
            onClick={() =>
              setNav({
                ...nav,
                tech: !nav.tech,
                estimator: false,
                envior: false,
              })
            }
            className={`${nav.tech ? "color" : ""}`}
          >
            Concreate Technolgy
          </NavLink>
          {nav.tech && <TechNavBar />}
          <NavLink>Geotechnical Engineering</NavLink>
          <NavLink
            onClick={() =>
              setNav({
                ...nav,
                envior: !nav.envior,
                tech: false,
                estimator: false,
              })
            }
            className={`${nav.estimator ? "color" : ""}`}
          >
            Environmental Engineering
          </NavLink>
          {nav.envior && (
            <nav className=" icon-nav flex flex-dir">
              <NavLink>chemical Oxygen demend (COD) test</NavLink>
              <NavLink>biochemical Oxygen demend (BOD) test</NavLink>
              <NavLink>Ammonical test</NavLink>
            </nav>
          )}
          <NavLink>Contact Us</NavLink>
        </nav>
      )}
      <div className="dis-none">
        <nav className="dis-nav relative">
          <NavLink>
            <AiOutlineHome />
          </NavLink>
          <NavLink onClick={() => setHov(!hov)}>Quantity Estimator</NavLink>
          {hov && (
            <div className="absolute flex bg-black labview-nav">
              <nav className=" nav-main flex-1 flex flex-dir hover-nav">
                <MainNavChild brea={"br"} hidden={hidden} />
              </nav>
            </div>
          )}
          <NavLink>Concreate Technolgy</NavLink>
          <NavLink>Geotechnical Engineering</NavLink>
          <NavLink>Environmental Engineering</NavLink>
          <NavLink>Contact Us</NavLink>
          <NavLink></NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
