import React from "react";
import aboutimage from "../Asset/picture1.jpg";
import aboutimage1 from "../Asset/picture2.jpg";
import { GoInfo } from "react-icons/go";
import "../style.css";

function About() {
  return (
    <div className="col-sm-10">
      <div className="about">
        <h5>
          <GoInfo />
          What is water-sump/tank calculation?
        </h5>
        <hr />
        <div className="a-container">
          <div className="about-text">
            <p>A water tank is a container for storing water.</p>
            <p>
              Water tanks are used to provide storage of water for use in many
              applications, drinking water, irrigation agriculture, fire
              suppression, agricultural farming, both for plants and livestock,
              chemical manufacturing, food preparation as well as many other
              uses.
            </p>
            <p>
              A lot of variety exists in water tank and there are different
              types of tank:
            </p>
            <ul>
              <li>Chemical contact tank</li>
              <li>Ground water tank</li>
              <li>Elevated water tank</li>
            </ul>
          </div>
          <div className="about-image">
            <img src={aboutimage} alt="" style={{ maxWidth: "300px" }} />
          </div>
        </div>
        <hr />
        <div className="a-container">
          <div className="about-text1">
            <div className="about-heading">
              <h6>Water-Sump/Tank calculation</h6>
              <div className="vl">
                <h5>Volume of Water-Sump/Tank=Length x Width x Depth</h5>
                <h5>
                  Total Quantity in Liter(lt.) = Volume of Water-Sump/Tank x
                  1000
                </h5>
              </div>
              <p>Where,</p>
              <ul>
                <li>
                  m3 (Cubic meter) and ft3 (Cubic feet) is a total volume and Lt
                  (liter) is a total volume in liter
                </li>
                <li>
                  Length, breadth, and depth in meter/cm and total volume in Lt
                  (liter).
                </li>
              </ul>
              <h6> Notes:</h6>
              <p>1 m3 = 35.3147 ft3</p>
            </div>
          </div>
          <div className="about-image1">
            <img src={aboutimage1} alt="" width="200" height="150" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
