import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import { FcInfo } from "react-icons/fc";
import { Tooltip } from "react-tooltip";

function Homes() {
  const [M1, setM1] = useState(31.45);
  const [M2, setM2] = useState(39.9);
  const [M3, setM3] = useState(86.61);
  const [M4, setM4] = useState(81.41);
  const [specificGravity, setSpecificGravity] = useState(2.6);

  const [tempM1, setTempM1] = useState(31.45);
  const [tempM2, setTempM2] = useState(39.9);
  const [tempM3, setTempM3] = useState(86.61);
  const [tempM4, setTempM4] = useState(81.41);

  const handleInputChange = (e, fieldName) => {
    const value = e.target.value;
    switch (fieldName) {
      case "M1":
        setTempM1(value);
        break;
      case "M2":
        setTempM2(value);
        break;
      case "M3":
        setTempM3(value);
        break;
      case "M4":
        setTempM4(value);
        break;
      default:
        break;
    }
  };

  const calculateSpecificGravity = () => {
    const specificGravity = (
      (tempM2 - tempM1) /
      (tempM4 - tempM1 - (tempM3 - tempM2))
    ).toFixed(2);
    setSpecificGravity(specificGravity);

    setM1(tempM1);
    setM2(tempM2);
    setM3(tempM3);
    setM4(tempM4);
  };

  return (
    <div className="container-fluid mt-3">
      <div className="row">
        <div className="col-md-6 bg-white text-right">
          <div className="header">
            <h6>DETERMINATION OF SPECIFIC GRAVITY OF SOIL</h6>
          </div>
          <hr />
          <div className="field-items">
            <div className="input-field">
              <label>
                Mass of Density Bottle (M1) &nbsp;{" "}
                <a href="/M1" data-tooltip-id="my-tooltip1">
                  <FcInfo />
                </a>
                <Tooltip
                  id="my-tooltip1"
                  style={{
                    backgroundColor: "#A9A9A9",
                    color: "#000",
                    textAlign: "left",
                  }}
                >
                  <div>
                    <p>
                      What is M1 in determination of specific
                      <br /> gravity of soil?
                    </p>
                    <hr />
                    <h6>
                      M1 is the mass of density bottle in
                      <br />
                      gram.
                    </h6>
                  </div>
                </Tooltip>
              </label>
              <Input
                type="number"
                value={tempM1}
                onChange={(e) => handleInputChange(e, "M1")}
              />
              <button>g</button>
            </div>
            <div className="input-field">
              <label>
                Mass of Bottle & Dry Soil (M2) &nbsp;{" "}
                <a href="/M2" data-tooltip-id="my-tooltip2">
                  <FcInfo />
                </a>
                <Tooltip
                  id="my-tooltip2"
                  style={{
                    backgroundColor: "#A9A9A9",
                    color: "#000",
                    textAlign: "left",
                  }}
                >
                  <div>
                    <p>
                      What is M2 in determination of specific
                      <br /> gravity of soil?
                    </p>
                    <hr />
                    <h6>
                      M2 is the mass of bottle and dry soil in
                      <br />
                      gram.
                    </h6>
                  </div>
                </Tooltip>
              </label>
              <Input
                type="number"
                value={tempM2}
                onChange={(e) => handleInputChange(e, "M2")}
              />
              <button>g</button>
            </div>
            <div className="input-field">
              <label>
                Mass of Bottle, Soil & Liquid (M3) &nbsp;{" "}
                <a href="/M3" data-tooltip-id="my-tooltip3">
                  <FcInfo />
                </a>
                <Tooltip
                  id="my-tooltip3"
                  style={{
                    backgroundColor: "#A9A9A9",
                    color: "#000",
                    textAlign: "left",
                  }}
                >
                  <div>
                    <p>
                      What is M3 in determination of specific
                      <br /> gravity of soil?
                    </p>
                    <hr />
                    <h6>
                      M3 is the mass of bottle,soil and water
                      <br /> in gram.
                    </h6>
                  </div>
                </Tooltip>
              </label>
              <Input
                type="number"
                value={tempM3}
                onChange={(e) => handleInputChange(e, "M3")}
              />
              <button>g</button>
            </div>
            <div className="input-field">
              <label>
                Mass of Bottle when full of Liquid only (M4) &nbsp;{" "}
                <a href="/M4" data-tooltip-id="my-tooltip4">
                  <FcInfo />
                </a>
                <Tooltip
                  id="my-tooltip4"
                  style={{
                    backgroundColor: "#A9A9A9",
                    color: "#000",
                    textAlign: "left",
                  }}
                >
                  <div>
                    <p>
                      What is M4 in determination of specific
                      <br /> gravity of soil?
                    </p>
                    <hr />
                    <h6>
                      M4 is the mass of bottle when full of
                      <br />
                      water only,in gram.
                    </h6>
                  </div>
                </Tooltip>
              </label>
              <Input
                type="number"
                value={tempM4}
                onChange={(e) => handleInputChange(e, "M4")}
              />
              <button>g</button>
            </div>
          </div>
          <hr />
          <div className="button-style">
            <Button label="Calculate" onClick={calculateSpecificGravity} />
          </div>
        </div>
        <div className="col-md-4  bg-white">
          <div className="calculate-type">
            <p className="p1">{specificGravity}</p>
            <p className="p2">Specific Gravity</p>
            <hr />
            <p className="p3">Specific Gravity</p>
            <p>
              {" "}
              <math>
                <mi>G</mi>
                <mo>=</mo>
                <mfrac>
                  <mrow>
                    <mo>(</mo>
                    <mi>M2</mi>
                    <mo>-</mo>
                    <mi>M1</mi>
                    <mo>)</mo>
                  </mrow>
                  <mrow>
                    <mo>(</mo>
                    <mi>M4</mi>
                    <mo>-</mo>
                    <mi>M1</mi>
                    <mo>)</mo>
                    <mo>-</mo>
                    <mo>(</mo>
                    <mi>M3</mi>
                    <mo>-</mo>
                    <mi>M2</mi>
                    <mo>)</mo>
                  </mrow>
                </mfrac>
              </math>
            </p>
            <p>
              {" "}
              <math>
                <mi>G</mi>
                <mo>=</mo>
                <mfrac>
                  <mrow>
                    <mo>(</mo>
                    <mn>{M2}</mn>
                    <mo>-</mo>
                    <mn>{M1}</mn>
                    <mo>)</mo>
                  </mrow>
                  <mrow>
                    <mo>(</mo>
                    <mn>{M4}</mn>
                    <mo>-</mo>
                    <mn>{M1}</mn>
                    <mo>)</mo>
                    <mo>-</mo>
                    <mo>(</mo>
                    <mn>{M3}</mn>
                    <mo>-</mo>
                    <mn>{M2}</mn>
                    <mo>)</mo>
                  </mrow>
                </mfrac>
              </math>
            </p>
            <p>G = {specificGravity}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Homes;
