import React from "react";
import { GoInfo } from "react-icons/go";
import image from "../Assetss/pictures1.png";
import "../style.css";

function Abouts() {
  return (
    <div className="container-fluid mt-4">
      <div className="col-md-12 py-1 bg-white">
        <div className="about">
          <div className="about-heading">
            <h5>
              <GoInfo />
              &nbsp;
              <span>
                What is the need of specific gravity determination of Soil ?
              </span>
            </h5>
          </div>
          <hr />
          <div className="about-text">
            <p>
              Specific gravity G is defined as the ratio of the weight of a
              given volume of soil solids to the weight of a equal volume of
              distilled water.
            </p>
            <p>
              It deals with the method of test for determination of specific
              gravity of soils which finds application in finding out the degree
              of saturation and unit weight of moist soils. The unit weights are
              needed in pressure, settlement and stability problems in soil
              engineering.
            </p>
          </div>
          <hr />
          <div className="about-directions">
            <div className="container-fluid">
              <div className="row">
                <div className="col-md-8">
                  <div className="text-list">
                    <h6>Apparatus</h6>
                    <ol>
                      <li>
                        <strong>Two density bottles</strong> (Pycnometer) of
                        approximately 50 ml capacity with stoppers.
                      </li>
                      <li>
                        <strong>A water-bath</strong> maintained at a constant
                        temperature to within ± 0.20C (If standard density
                        bottles are used, this constant temperature is 27°C.)
                      </li>
                      <li>
                        <strong>A vacuum desiccator</strong> (a convenient size
                        is one about 200 mm to 250 mm in diameter).
                      </li>
                      <li>
                        <strong>A desiccator</strong> (a convenient size is one
                        about 200 mm to 250 mm in diameter) containing anhydrous
                        silica gel.
                      </li>
                      <li>
                        <strong>
                          A thermostatically controlled drying oven
                        </strong>
                        , capable of maintaining a temperature of 105 to 110°C.
                      </li>
                      <li>
                        <strong>A balance</strong> readable and accurate to
                        0.001 g.
                      </li>
                      <li>
                        <strong>A source of vacuum</strong>, such as a good
                        filter pump or a vacuum pump.
                      </li>
                      <li>
                        <strong>A spatula </strong>(a convenient size is one
                        having a blade 150 mm long and 3 mm wide; the blade has
                        to be small enough to go through the neck of the density
                        bottle), or piece of glass rod about 150 mm long and 3
                        mm diameter.
                      </li>
                      <li>
                        <strong>A wash bottle</strong>, preferably made of
                        plastics, containing air-free distilled water.
                      </li>
                      <li>
                        <strong>A sample divider</strong> of the multiple slot
                        type (riffle box) with 7 mm width of opening
                      </li>
                      <li>
                        A length of<strong> rubber tubing</strong>to fit the
                        vacuum pump and the desiccator.
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="col-md-3 d-flex align-items-center justify-content-center">
                  <div className="image">
                    <img src={image} alt="" style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
}
export default Abouts;
