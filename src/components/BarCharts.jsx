import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useChart } from "../utils/hooks/userContext";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarCharts = () => {
  const { total } = useChart();
  const data = {
    labels: [
      total[0]?.name,
      total[1]?.name,
      total[2]?.name,
      total[3]?.name,
      total[4]?.name,
      total[5]?.name,
    ],
    datasets: [
      {
        label: "",
        data: [
          total[0]?.datavalue,
          total[1]?.datavalue,
          total[2]?.datavalue,
          total[3]?.datavalue,
          total[4]?.datavalue,
          total[5]?.datavalue,
        ],
        backgroundColor: [
          "#e32c2c83",
          "#2b66e483",
          "#e4e42b83",
          "#2be43a83",
          "#e42bd883",
          "#e4882b83",
        ],
        borderColor: ["red", "blue", "yellow", "green", "aqua", "orange"],
        borderWidth: 1,
      },
    ],
  };
  const options = {};
  return (
    <div className="bar-chart">
      <h3>
        To <b>complete this construction</b> in{" "}
        <span style={{ color: "red" }}>6 months</span> timeline{" "}
        <b>money required </b>is as below
      </h3>
      <Bar data={data} options={options}></Bar>
    </div>
  );
};

export default BarCharts;
