import React from "react";

const WetVolComp = ({ data }) => {
  return (
    <div className="text-center bg-white calcula-of-cement">
      <h3>{data.mainTitle}</h3>
      <p className="">={data.title}</p>
      <p>={data.calci}</p>
      <p>={data.ans}</p>
      {data.ans1 && <p>={data.ans1}</p>}
      {data.note && <p className="gre-bg">{data.note}</p>}
    </div>
  );
};

export default WetVolComp;
