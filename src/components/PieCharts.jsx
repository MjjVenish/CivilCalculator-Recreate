// import { Chart as ChartJS, ArcElement, Legend, Tooltip } from "chart.js";
// import { Pie } from "react-chartjs-2";

import ChartPie from "./ChartPie";

// ChartJS.register(ArcElement, Legend, Tooltip);

// export const data = {
//   labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
//   datasets: [
//     {
//       label: "# of Votes",
//       data: [12, 19, 3, 5, 2, 3],
//       backgroundColor: [
//         "rgba(255, 99, 132, 0.2)",
//         "rgba(54, 162, 235, 0.2)",
//         "rgba(255, 206, 86, 0.2)",
//         "rgba(75, 192, 192, 0.2)",
//         "rgba(153, 102, 255, 0.2)",
//         "rgba(255, 159, 64, 0.2)",
//       ],
//       borderColor: [
//         "rgba(255, 99, 132, 1)",
//         "rgba(54, 162, 235, 1)",
//         "rgba(255, 206, 86, 1)",
//         "rgba(75, 192, 192, 1)",
//         "rgba(153, 102, 255, 1)",
//         "rgba(255, 159, 64, 1)",
//       ],
//       borderWidth: 1,
//     },
//   ],
// };
const PieCharts = ({ amount }) => {
  const {
    cementAmount,
    sandAmount,
    aggregateAmount,
    steelAmount,
    finishers,
    fittings,
  } = amount;
  const mydata = [
    { x: `Cement,16.4% ${cementAmount}Rs`, y: cementAmount },
    { x: `Sand,12.3% ${sandAmount}Rs`, y: sandAmount },
    { x: `Aggregate,7.4% ${aggregateAmount}Rs`, y: aggregateAmount },
    { x: `Steel,24.6% ${steelAmount}Rs`, y: steelAmount },
    { x: `Finisher,16.5% ${finishers}`, y: finishers },
    { x: `Fittngs,22.8% ${fittings}Rs`, y: fittings },
  ];
  return (
    <div className="chart-pie">
      <h3>
        Approximate <strong>cost on various work of material</strong> to
        complete the construction for
        <span>
          <span style={{ color: "red" }}>1000</span>
        </span>
        <span>
          ft<sup>2</sup>
        </span>
      </h3>
      <ChartPie mydata={mydata} />
    </div>
  );
};

export default PieCharts;
