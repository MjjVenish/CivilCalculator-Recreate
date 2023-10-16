import React from "react";
import ChartPie from "./ChartPie";

const CementChart = ({ chart }) => {
  const { cementKg, sandKg, aggKg } = chart;
  const mydata = [
    { x: `Cement ${cementKg} Kg`, y: cementKg },
    { x: `Sand ${sandKg} Kg`, y: sandKg },
    { x: `Aggregate ${aggKg} Kg`, y: aggKg },
  ];
  return (
    <div className="charts-pie">
      <ChartPie mydata={mydata} />
    </div>
  );
};

export default CementChart;
