import React from "react";
import "../style/areacalculation.css";

const AreaCaculator = ({ CarpetArea, BuiltUpArea, SuperBuiltUpArea }) => {
  return (
    <>
      {CarpetArea > 0 ? (
        <div className="areacal-parent">
          <div>
            <h3 className="areacal-lab">Carpet Area</h3>
            <h2>
              {CarpetArea.toFixed(2)} ft<sup>2</sup>
            </h2>
          </div>
          <div>
            <h3 className="areacal-lab">Built-Up Area</h3>
            <h2>
              {BuiltUpArea.toFixed(3)} ft<sup>2</sup>
            </h2>
          </div>
          <div>
            <h3 className="areacal-lab">Super Built-Up Area</h3>
            <h2>
              {SuperBuiltUpArea.toFixed(2)} ft<sup>2</sup>
            </h2>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default AreaCaculator;
