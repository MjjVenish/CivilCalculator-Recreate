import React from "react";

const ApproxAmount = ({ amount, cost }) => {
  return (
    <div className="approx ">
      <div className="app-child app-am">
        <h2>
          Calculation of Cost | Approx amount of cost for given construction is
          <span> {amount?.totalCost} Rs.</span>
        </h2>
        <div className="details">
          <div className="border cal-details">
            <h3>
              Approximate cost on various work of materialas per thumb rule
            </h3>
            <div className="flex just-arround amo-cal">
              <h5>Cement ({cost.cement}%)</h5>
              <h5 className="rs-ce text-white">{amount?.cementAmount} Rs.</h5>
            </div>
            <div className="amo-cal flex just-arround">
              <h5>Cement ({cost.sand}%)</h5>
              <h5 className="rs-sa text-white">{amount?.sandAmount} Rs.</h5>
            </div>
            <div className="amo-cal flex just-arround">
              <h5>Cement ({cost.aggregate}%)</h5>
              <h5 className="rs-ag text-white">
                {amount?.aggregateAmount} Rs.
              </h5>
            </div>
            <div className="amo-cal flex just-arround">
              <h5>Cement ({cost.steel}%)</h5>
              <h5 className="rs-st text-white">{amount?.steelAmount} Rs.</h5>
            </div>
            <div className="amo-cal">
              <div className=" flex just-arround">
                <h5>Cement ({cost.finishers}%)</h5>
                <h5 className="rs-fi text-white">{amount?.finishers} Rs.</h5>
              </div>
              <h5>(Paint (4.1 %) + Tiles (8.0 %) + Bricks (4.4 %))</h5>
            </div>
            <div className="amo-cal">
              <div className=" flex just-arround">
                <h5>Cement ({cost.fittings}%)</h5>
                <h5 className="rs-in text-white">{amount?.fittings} Rs.</h5>
              </div>
              <h5>
                (Window (3.0 %) + Doors (3.4 %) + Plumbing (5.5 %) + Eletrical
                (6.8 %) + Sanitary (4.1 %))
              </h5>
            </div>
            <div className="amo-cal flex just-arround">
              <h4>Total Cost</h4>
              <h5 className="rs-to text-white">{amount?.totalCost} Rs.</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproxAmount;
