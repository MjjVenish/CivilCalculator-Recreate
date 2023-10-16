import { Formik, Form, Field } from "formik";
import { useState } from "react";
import { useChart } from "../utils/hooks/userContext";
import Submit from "./Submit";

const ConstrctionForm = ({ calculation }) => {
  const [initialValues, setInitialValues] = useState({
    builtup_area: 1000,
    approx_cost: 1000,
  });
  const { barCharts } = useChart();

  const handleSubmit = (values) => {
    calculation(values);
    barCharts(values);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formik) => (
        <Form className="form-cal">
          <h3>CONSTRUCTION COST ESTIMATOR</h3>
          <div className="form-label">
            <label htmlFor="builtup_Area">Builtup Area</label>
            <br />
            <Field type="number" name="builtup_area" id="builtup_Area" />
            <span>
              ft <sup>2</sup>
            </span>
          </div>
          <div className="form-label">
            <label htmlFor="approx_cost">Approx Cost (Per Square Feet)</label>
            <br />
            <Field type="number" name="approx_cost" id="approx_cost" />
            <span>Rs.</span>
          </div>
          <Submit
            setInitialValues={setInitialValues}
            initialValues={initialValues}
            calculation={calculation}
          />
        </Form>
      )}
    </Formik>
  );
};

export default ConstrctionForm;
