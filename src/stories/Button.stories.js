import ButtonInput from "../components/ButtonInput";
import "../style/calculation.css";

export default {
  title: "task/ButtonInput",
  component: ButtonInput,
  argTypes: { handleClick: { action: "On" } },
};

const Templete = (args) => <ButtonInput {...args} />;

export const small = Templete.bind({});
export const medium = Templete.bind({});

small.args = {
  className: "butt but-sub",
  type: "submit",
  value: "Calculate",
};

medium.args = {
  className: "butt but-res",
  type: "reset",
  value: "Reset",
};
