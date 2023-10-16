import React from "react";
import ReactApexChart from "react-apexcharts";

class PieChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chartOptions: {
        chart: {
          height: 170,
          type: "pie",
        },
        plotOptions: {
          pie: {
            dataLabels: {
              enabled: false,
            },
          },
        },
        legend: {
          show: false,
        },
        tooltip: {
          enabled: true,
          y: {
            formatter: function (value, { seriesIndex }) {
              const tooltipNames = ["Cement", "Sand", "Aggregate"];
              return `${tooltipNames[seriesIndex]}`;
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        series: [10, 20, 33],
        colors: ["rgb(10,175,241)", "rgb(255,0,40)", "rgb(243,178,0)"], // Specify custom colors
      },
    };
  }

  render() {
    return (
      <div id="apexcharts-pie">
        <ReactApexChart
          options={this.state.chartOptions}
          series={this.state.chartOptions.series}
          type="pie"
          height={170}
        />
      </div>
    );
  }
}

export default PieChart;
