import { Formik, Form, Field } from "formik";
import { useState } from "react";
import Submit from "./Submit";

const CementForm = ({ calculation, unit }) => {
  const [initialValues, setInitialValues] = useState({
    length: 10,
    width: 7,
    depth: 4,
    lengthCm: "",
    widthCm: "",
    depthCm: "",
    grade: "1:1.5:3",
  });

  const optionGrade = [
    { value: "1:1.5:3", key: "M20(1:1.5:3)" },
    { value: "1:2:4", key: "M15(1:2:4)" },
    { value: "1:3:6", key: "M10(1:3:6)" },
    { value: "1:4:8", key: "M7.5(1:4:8)" },
  ];

  const handleSubmit = (values, props) => {
    calculation(values);
    props.resetForm();
  };
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {(formik) => (
        <Form className="cemnt-form">
          <div className="cem-unit ">
            <label htmlFor="Grade">Grade of Concrete</label> <br />
            <Field as={"select"} name={"grade"} id={"Grade"}>
              {optionGrade.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.key}
                </option>
              ))}
            </Field>
          </div>
          <div className="inch-cm">
            <label htmlFor="Length">Length</label> <br />
            <Field
              className="inch-in"
              type="number"
              name="length"
              id="Length"
            />
            <span id={`${unit === "Feet/Inch" ? "fee" : ""}`}>
              {unit.split("/")[0]}
            </span>
            <br />
            <Field type="number" name="lengthCm" id="LengthCm" />
            <span>{unit.split("/")[1]}</span>
          </div>
          <div className="inch-cm">
            <label htmlFor="Width">Width</label> <br />
            <Field type="number" name="width" id="Width" className="inch-in" />
            <span
              className={`er-span`}
              id={`${unit === "Feet/Inch" ? "fee" : ""}`}
            >
              {unit.split("/")[0]}
            </span>
            <Field type="number" name="widthCm" id="WidthCm" />
            <span>{unit.split("/")[1]}</span>
          </div>
          <div className="inch-cm">
            <label htmlFor="Width">Depth</label> <br />
            <Field type="number" name="depth" id="Depth" className="inch-in" />
            <span id={`${unit === "Feet/Inch" ? "fee" : ""}`}>
              {unit.split("/")[0]}
            </span>
            <Field type="number" name="depthCm" id="DepthCm" />
            <span>{unit.split("/")[1]}</span>
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

export default CementForm;
