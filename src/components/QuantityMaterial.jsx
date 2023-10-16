import React from "react";
import { Link } from "react-router-dom";

const QuantityMaterial = ({ quantity, formValue }) => {
  return (
    <div className="approx">
      <div className="app-child">
        <h2>Quantity of material required for given construction area</h2>
        <div className="details">
          <div className="border cal-details">
            <h3>
              Quantity of material required for
              <span>
                {formValue?.builtup_area}ft <sup>2</sup>
              </span>
            </h3>
            <div className="flex just-arround amo-cal">
              <h5>Cement</h5>
              <h5 className="rs-ce text-white">
                {quantity?.cementQuantity + "bags"}
              </h5>
            </div>
            <div className="flex just-arround amo-cal">
              <h5>Sand</h5>
              <h5 className="rs-sa text-white">
                {quantity?.sandQuantity + "Ton"}
              </h5>
            </div>
            <div className="flex just-arround amo-cal">
              <h5>Aggregate</h5>
              <h5 className="rs-ag text-white">
                {quantity?.aggregateQuantity + "Ton"}
              </h5>
            </div>
            <div className="amo-cal">
              <div className=" flex just-arround">
                <h5>Steel</h5>
                <h5 className="rs-st text-white">
                  {quantity?.steelQuantity + "Kg"}
                </h5>
              </div>
              <Link href="">(Click here for calculate steel weight)</Link>
            </div>
            <div className="amo-cal">
              <div className=" flex just-arround">
                <h5>Paint</h5>
                <h5 className="rs-fi text-white">{quantity?.paint + "It"}</h5>
              </div>
              <Link>(Click here for calculate paint)</Link>
            </div>
            <div className="amo-cal">
              <div className=" flex just-arround">
                <h5>Bricks</h5>
                <h5 className="rs-in text-white">{quantity?.bricks + "Pcs"}</h5>
              </div>
              <Link>(Click here for calculate bricks)</Link>
            </div>
            <div className="amo-cal">
              <div className=" flex just-arround">
                <h5>Flooring</h5>
                <h5 className="rs-to text-white">
                  {quantity?.flooring + "ft"}
                </h5>
              </div>
              <Link>(Click here for calculate flooring)</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuantityMaterial;
