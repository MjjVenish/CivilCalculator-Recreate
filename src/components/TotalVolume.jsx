import React from "react";

const TotalVolume = ({ cemCal }) => {
  return (
    <div className="bg-white ans-cem-con text-center">
      <h2>Total Volume of Cement Concrete</h2>
      <h1>{cemCal.ans}</h1>
      <h1>{cemCal.ans1}</h1>
    </div>
  );
};

export default TotalVolume;
