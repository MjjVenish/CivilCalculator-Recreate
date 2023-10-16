import { useChart } from "../utils/hooks/userContext";
import ButtonInput from "./ButtonInput";

const Submit = ({ setInitialValues, initialValues, calculation }) => {
  const { barCharts } = useChart();
  return (
    <div className="flex just-end">
      <ButtonInput
        className={"butt but-sub"}
        value={"Calculate"}
        type={"submit"}
      />
      <ButtonInput
        className={"butt but-res"}
        value={"Reset"}
        type={"reset"}
        setInitialValues={setInitialValues}
        initialValues={initialValues}
        calculation={calculation}
        barCharts={barCharts}
      />
    </div>
  );
};

export default Submit;
