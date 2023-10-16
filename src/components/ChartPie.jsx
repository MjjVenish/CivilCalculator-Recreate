import { VictoryPie } from "victory-pie";
import PropTypes from "prop-types";

const ChartPie = ({ mydata }) => {
  return (
    <VictoryPie
      data={mydata}
      colorScale={["blue", "red", "yellow", "red", "grey", "green"]}
      radius={90}
    />
  );
};
ChartPie.propTypes = {
  mydata: PropTypes.array,
};

export default ChartPie;
