import TotalVolume from "../components/TotalVolume";
import "../style/calculation.css";

export default {
  title: "task/Volume",
  component: TotalVolume,
  argTypes: { handleClick: { action: "On" } },
};

const Templete = (args) => <TotalVolume {...args} />;

export const sample = Templete.bind({});

sample.args = {
  cemCal: {
    mainTit: "",
    title: "Sand in Kg",
    calci: "Sand Volume X 1550",
    ans: `/1550`,
    ans1: ` Kg`,
  },
};
