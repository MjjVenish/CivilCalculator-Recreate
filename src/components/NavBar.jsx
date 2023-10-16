import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { AiOutlineHome } from "../Icons/icons";
import "../style/navbar.css";

const NavBar = () => {
  const params = useParams();
  const [urls, setUrls] = useState(null);
  useEffect(() => {
    const url = window.location.href;
    const part = url.split("/");
    const mainPart = part[part.length - 1];
    if (mainPart === "") {
      setUrls(null);
    } else {
      const space = mainPart.split("-");
      const detil = space.join(" ");
      setUrls(detil);
    }
  }, [params]);
  return (
    <div className="container-fluid h-10 nav-style">
      <h2>{urls ? urls : "Construction Cost Estimator"}</h2>
      <nav className="flex just-end main-nav">
        <div>
          <AiOutlineHome />
          <NavLink>Home</NavLink>
        </div>
        <div>
          <NavLink to={"/quantity-estimator"}>Quantity-Estimator</NavLink>
          <br />
          <span>{urls ? urls : "Construction Cost Estimator"}</span>
        </div>
      </nav>
    </div>
  );
};

NavBar.defaultProps = {
  urls: "Construction Cost Estimator",
};

export default NavBar;
