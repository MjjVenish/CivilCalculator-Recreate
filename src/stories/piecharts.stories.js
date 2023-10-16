import ChartPie from "../components/ChartPie";

export default {
  title: "task/PieChart",
  component: ChartPie,
  argTypes: { handleClick: { action: "On" } },
};

const Templete = (args) => <ChartPie {...args} />;

export const small = Templete.bind({});

small.args = {
  mydata: [
    { x: `Parotta`, y: 20 },
    { x: `Briyani`, y: 150 },
    { x: `Meles`, y: 80 },
  ],
};
