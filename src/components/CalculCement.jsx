import React from "react";

const CalculCement = ({ amount }) => {
  return (
    <div className="text-center bg-white calcula-of-cement">
      <h3>{amount.mainTit}</h3>
      <p className="some-dark">{amount.title}</p>
      <p>={amount.calci}</p>
      <p>={amount.ans}</p>
      <p>={amount.ans1}</p>
      {amount.note && <p className="gre-bg">{amount.note}</p>}
    </div>
  );
};

export default CalculCement;
