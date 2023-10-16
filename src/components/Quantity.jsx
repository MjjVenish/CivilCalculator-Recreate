import React from "react";
import CementChart from "./CementChart";
import cement from "../assets/PCC.png";
import sand from "../assets/sand png icon.png";
import agg from "../assets/agg.png";

const Quantity = ({ chart }) => {
  const { sandKg, aggKg, cementBag } = chart;
  return (
    <div className="table-val">
      <table>
        <thead>
          <th>Sr</th>
          <th>Material</th>
          <th>Quantity</th>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img src={cement} alt="" /> Cement
            </td>
            <td>{cementBag} Bags</td>
          </tr>
          <tr>
            <td>2</td>
            <td>
              <img src={sand} alt="" /> Sand
            </td>
            <td>{sandKg / 1000} Ton</td>
          </tr>
          <tr>
            <td>3</td>
            <td>
              <img src={agg} alt="" /> Aggregate
            </td>
            <td>{aggKg / 1000} Ton</td>
          </tr>
        </tbody>
      </table>
      <CementChart chart={chart} />
    </div>
  );
};

export default Quantity;
