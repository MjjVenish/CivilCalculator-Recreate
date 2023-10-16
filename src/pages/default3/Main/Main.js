import React, { useState } from "react";
import "./main.css";
import lorryLogo from "./Images/lorry_logo.png";
import cementLogo from "./Images/cement_logo.png";
import sandLogo from "./Images/sand_logo.png";
import aggregateLogo from "./Images/aggregate_logo.png";
import PieChart from "./PieChart";

const MainSg = () => {
  // *** ! For All States ! ***
  //For Length Related States
  const [lengthM, setLengthM] = useState(10.0);
  const [lengthCM, setLengthCM] = useState(0);
  const [totalLength, setTotalLength] = useState("10.00");

  //For Width Related States
  const [widthM, setWidthM] = useState(7);
  const [widthCM, setWidthCM] = useState(0);
  const [totalWidth, setTotalWidth] = useState("7.00");

  //For Depth Related States
  const [depthM, setDepthM] = useState(4);
  const [depthCM, setDepthCM] = useState(0);
  const [totalDepth, setTotalDepth] = useState("4.00");

  //For Common to Length, Width, Depth Related States
  const [inputLabelM, setInputLabelM] = useState("meter");
  const [inputLabelCM, setInputLabelCM] = useState("cm");

  //For Cement Concrete Volume Related States
  const [concreteVolumeMeter, setConcreteVolumeMeter] = useState("280.00");
  const [concreteVolumeFeet, setConcreteVolumeFeet] = useState(9888.12);

  //For Wet Volume of Mix Related States
  const [wetVolume, setWetVolume] = useState(426.72);

  //For Cement Ratio, Sand Ratio, Aggregate Ratio Related States
  const [cementRatio, setCementRatio] = useState(1);
  const [sandRatio, setSandRatio] = useState(1.5);
  const [aggregateRatio, setAggregateRatio] = useState(3);
  const [sumOfRatio, setSumOfRatio] = useState(5.5);

  //For Amount of Cement Required Related States
  const [cementVolume, setCementVolume] = useState(77.59);
  const [noOfCementBags, setNoOfCementBags] = useState(2216.73);
  const [cementInKg, setCementInKg] = useState(110836.36);

  //For Amount of Sand Required Related states
  const [sandVolume, setSandVolume] = useState(116.38);
  const [sandInKg, setSandInKg] = useState(180386.18);
  const [sandInTon, setSandInTon] = useState(180.39);

  //For Amount of Aggregate Required Related states
  const [aggregateVolume, setAggregateVolume] = useState(232.76);
  const [aggregateInKg, setAggregateInKg] = useState(314221.09);
  const [aggregateInTon, setAggregateInTon] = useState(314.22);

  //For Handling the Unit Select Option
  const handleUnitSelectOption = (e) => {
    const optionValue = e.target.value;
    if (optionValue == "Meter/CM") {
      setInputLabelM("meter");
      setInputLabelCM("cm");
    } else {
      setInputLabelM("feet");
      setInputLabelCM("inch");
    }
  };
  const handleGradeConcreteSelectOption = (e) => {
    const optionValue = e.target.value;
    if (optionValue == "M20") {
      setCementRatio(1);
      setSandRatio(1.5);
      setAggregateRatio(3);
      setSumOfRatio(5.5);
    } else if (optionValue == "M15") {
      setCementRatio(1);
      setSandRatio(2);
      setAggregateRatio(4);
      setSumOfRatio(7);
    } else if (optionValue == "M10") {
      setCementRatio(1);
      setSandRatio(3);
      setAggregateRatio(6);
      setSumOfRatio(10);
    } else {
      setCementRatio(1);
      setSandRatio(4);
      setAggregateRatio(8);
      setSumOfRatio(13);
    }
  };

  // *** ! For Calculations ! ***
  //For 1.Cement Concrete Volume in Meter, 2.Cement Concrete Volume in Feet
  const lengthValue = (Number(lengthM) + Number(lengthCM) / 100).toFixed(2);
  const widthValue = (Number(widthM) + Number(widthCM) / 100).toFixed(2);
  const depthValue = (Number(depthM) + Number(depthCM) / 100).toFixed(2);
  const volumeValueMeter = (
    Number(lengthValue) *
    Number(widthValue) *
    Number(depthValue)
  ).toFixed(2);
  const volumeValueFeet = (Number(volumeValueMeter) * 35.3147).toFixed(2);
  //For 3.Wet Volume of Mix
  const wetVolumeValue = (
    Number(volumeValueMeter) +
    Number(volumeValueMeter) * 0.524
  ).toFixed(2);
  //For 4. Ratio Calculation
  const sumOfRatioValue =
    Number(cementRatio) + Number(sandRatio) + Number(aggregateRatio);

  //For 5.Amount of Cement Required >
  //For *Cement Volume
  const cementVolumeValue = (
    (Number(cementRatio) / Number(sumOfRatioValue)) *
    Number(wetVolumeValue)
  ).toFixed(2);
  //For *No. of Cement Bags
  const noOfCementBagsValue = (Number(cementVolumeValue) / 0.035).toFixed(2);
  //For *Cement in Kg
  const cementInKgValue = (Number(noOfCementBagsValue) * 50).toFixed(2);

  //For 6.Amount of Sand Required
  //For *Sand Volume
  const sandVolumeValue = (
    (Number(sandRatio) / Number(sumOfRatioValue)) *
    Number(wetVolumeValue)
  ).toFixed(2);
  //For *Sand In Kg
  const sandInKgValue = (Number(sandVolumeValue) * 1550).toFixed(2);
  //For *Sand In Ton
  const sandInTonValue = (Number(sandInKgValue) / 1000).toFixed(2);

  //For 7.Amount of Aggregate Required
  //For *Aggregate Volume
  const aggregateVolumeValue = (
    (Number(aggregateRatio) / Number(sumOfRatioValue)) *
    Number(wetVolumeValue)
  ).toFixed(2);
  //For *Aggregate in Kg
  const aggregateInKgValue = (Number(aggregateVolumeValue) * 1350).toFixed(2);
  //For *Aggregate in Ton
  const aggregateInTonValue = (Number(aggregateInKgValue) / 1000).toFixed(2);

  //For Calculate Button Event Handlings
  const handleCalculateBtn = (e) => {
    e.preventDefault();
    setTotalLength(lengthValue);
    setTotalWidth(widthValue);
    setTotalDepth(depthValue);
    setConcreteVolumeMeter(volumeValueMeter);
    setConcreteVolumeFeet(volumeValueFeet);
    setWetVolume(wetVolumeValue);
    setSumOfRatio(sumOfRatioValue);
    setCementVolume(cementVolumeValue);
    setNoOfCementBags(noOfCementBagsValue);
    setCementInKg(cementInKgValue);
    setSandVolume(sandVolumeValue);
    setSandInKg(sandInKgValue);
    setSandInTon(sandInTonValue);
    setAggregateVolume(aggregateVolumeValue);
    setAggregateInKg(aggregateInKgValue);
    setAggregateInTon(aggregateInTonValue);
  };

  //For Reset Button Event Handlings
  const handleRestBtn = () => {
    setLengthM("");
    setLengthCM("");
    setWidthM("");
    setWidthCM("");
    setDepthM("");
    setDepthCM("");
    setInputLabelM("meter");
    setInputLabelCM("cm");
  };

  return (
    <div className="container-fluid bg-secondary bg-opacity-25">
      <div className="row p-3">
        <div className="col-md-6 p-3" style={{ backgroundColor: "white" }}>
          <div className="col-md-12 d-flex align-items-center">
            <img
              src={lorryLogo}
              alt="..."
              width={25}
              height={25}
              className="me-1"
            />{" "}
            <h6 className="p-0 m-0 text-secondary fw-bold">
              CEMENT CONCRETE CALCULATION
            </h6>
          </div>
          <div className="col-md-12 m-0 p-0">
            <hr />
          </div>
          <div className="col-md-12">
            <form action="/" onSubmit={handleCalculateBtn}>
              <div className="col-md-12 d-md-flex">
                <div className="col-md-3">
                  <p
                    className="text-md-end mt-2"
                    style={{ fontWeight: "bolder", fontSize: "0.9rem" }}
                  >
                    Unit{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="blue"
                      className="bi bi-info-circle-fill opacity-75"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </p>
                </div>
                <div className="col-md-8 ms-md-4">
                  <select
                    name="Unit"
                    id="selectUnit"
                    className="form-select"
                    style={{ fontSize: "0.9rem" }}
                    onChange={handleUnitSelectOption}
                  >
                    <option value="Meter/CM" style={{ fontSize: "0.9rem" }}>
                      Meter/CM
                    </option>
                    <option value="Feet/Inch" style={{ fontSize: "0.9rem" }}>
                      Feet/Inch
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-12 d-md-flex">
                <div className="col-md-3">
                  <p
                    className="text-md-end mt-2"
                    style={{ fontWeight: "bolder", fontSize: "0.9rem" }}
                  >
                    Grade of Concrete{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="blue"
                      className="bi bi-info-circle-fill opacity-75"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </p>
                </div>
                <div className="col-md-8 ms-md-4">
                  <select
                    name="Grade_of_Concrete"
                    id="selectGradeConcrete"
                    className="form-select"
                    style={{ fontSize: "0.9rem" }}
                    onChange={handleGradeConcreteSelectOption}
                  >
                    <option value="M20" style={{ fontSize: "0.9rem" }}>
                      M20 (1:1.5:3)
                    </option>
                    <option value="M15" style={{ fontSize: "0.9rem" }}>
                      M15 (1:2:4)
                    </option>
                    <option value="M10" style={{ fontSize: "0.9rem" }}>
                      M10 (1:3:6)
                    </option>
                    <option value="M7" style={{ fontSize: "0.9rem" }}>
                      M7.5 (1:4:8)
                    </option>
                  </select>
                </div>
              </div>
              <div className="col-md-12 d-md-flex">
                <div className="col-md-3">
                  <p
                    className="text-md-end mt-2"
                    style={{ fontWeight: "bolder", fontSize: "0.9rem" }}
                  >
                    Length{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="blue"
                      className="bi bi-info-circle-fill opacity-75"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </p>
                </div>
                <div className="col-md-4 ms-md-4 d-md-flex">
                  <div className="col-md-4 input-group mb-3">
                    <input
                      type="number"
                      className="form-control"
                      name="Length-M"
                      required
                      value={lengthM}
                      onChange={(e) => setLengthM(e.target.value)}
                    />
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {inputLabelM}
                    </span>
                  </div>
                  <div className="col-md-2 input-group mb-3 ms-md-1">
                    <input
                      type="number"
                      className="form-control"
                      name="Length-CM"
                      value={lengthCM}
                      onChange={(e) => setLengthCM(e.target.value)}
                    />
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {inputLabelCM}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 d-md-flex">
                <div className="col-md-3">
                  <p
                    className="text-md-end mt-2"
                    style={{ fontWeight: "bolder", fontSize: "0.9rem" }}
                  >
                    Width{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="blue"
                      className="bi bi-info-circle-fill opacity-75"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </p>
                </div>
                <div className="col-md-4 ms-md-4 d-md-flex">
                  <div className="col-md-4 input-group mb-3">
                    <input
                      type="number"
                      className="form-control"
                      name="Width-M"
                      required
                      value={widthM}
                      onChange={(e) => setWidthM(e.target.value)}
                    />
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {inputLabelM}
                    </span>
                  </div>
                  <div className="col-md-2 input-group mb-3 ms-md-1">
                    <input
                      type="number"
                      className="form-control"
                      name="Width-CM"
                      value={widthCM}
                      onChange={(e) => setWidthCM(e.target.value)}
                    />
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {inputLabelCM}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 d-md-flex">
                <div className="col-md-3">
                  <p
                    className="text-md-end mt-2"
                    style={{ fontWeight: "bolder", fontSize: "0.9rem" }}
                  >
                    Depth{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13"
                      height="13"
                      fill="blue"
                      className="bi bi-info-circle-fill opacity-75"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" />
                    </svg>
                  </p>
                </div>
                <div className="col-md-4 ms-md-4 d-md-flex">
                  <div className="col-md-4 input-group mb-3">
                    <input
                      type="number"
                      className="form-control"
                      name="Depth-M"
                      required
                      value={depthM}
                      onChange={(e) => setDepthM(e.target.value)}
                    />
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {inputLabelM}
                    </span>
                  </div>
                  <div className="col-md-2 input-group mb-3 ms-md-1">
                    <input
                      type="number"
                      className="form-control"
                      name="Depth-CM"
                      value={depthCM}
                      onChange={(e) => setDepthCM(e.target.value)}
                    />
                    <span
                      className="input-group-text"
                      id="basic-addon2"
                      style={{ fontSize: "0.9rem" }}
                    >
                      {inputLabelCM}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-12 m-0 p-0">
                <hr />
              </div>
              <div className="col-md-12 d-flex justify-content-end">
                <div className="col-md-2 me-1 me-md-5 me-lg-2">
                  <input
                    type="submit"
                    value="Calculate"
                    className="btn btn-primary ms-lg-2"
                    style={{ fontSize: "0.9rem" }}
                  />
                </div>
                <div className="col-md-2">
                  <input
                    type="reset"
                    value="Reset"
                    className="btn btn-danger ms-3"
                    style={{ fontSize: "0.9rem" }}
                    onClick={handleRestBtn}
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="row p-3">
        <div className="col-md-2 p-3" style={{ backgroundColor: "white" }}>
          <div className="col-md-12">
            <h6 className="text-center fw-bold">
              Total Volume of Cement Concrete
            </h6>
          </div>
          <div className="col-md-12">
            <h4 className="text-center fw-bolder" style={{ color: "red" }}>
              {concreteVolumeMeter} m<sup>3</sup>
            </h4>
            <div className="col-md-12 m-0 p-0">
              <hr />
            </div>
            <h4 className="text-center fw-bolder" style={{ color: "red" }}>
              {concreteVolumeFeet} ft<sup>3</sup>
            </h4>
          </div>
        </div>
        <div
          className="col-md-8 ms-md-3 gy-md-0 gy-3 chart_body"
          style={{ backgroundColor: "white" }}
        >
          <div className="col-md-5">
            <div className="table_chart_body mt-1">
              <table className="table" style={{ fontSize: "0.93rem" }}>
                <thead>
                  <tr>
                    <th>Sr.</th>
                    <th>Material</th>
                    <th>Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <img src={cementLogo} alt="..." width={20} height={20} />{" "}
                      Cement
                    </td>
                    <td>{noOfCementBags} Bags</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <img src={sandLogo} alt="..." width={20} height={20} />{" "}
                      Sand
                    </td>
                    <td>{sandInTon} Ton</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <img
                        src={aggregateLogo}
                        alt="..."
                        width={20}
                        height={20}
                      />{" "}
                      Aggregate
                    </td>
                    <td>{aggregateInTon} Ton</td>
                  </tr>
                </tbody>
              </table>
              <div className="chart_values ms-5">
                <h6 style={{ fontWeight: "bold", fontSize: "0.95rem" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="rgb(10,175,241)"
                    className="bi bi-1-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm7.283 4.002V12H7.971V5.338h-.065L6.072 6.656V5.385l1.899-1.383h1.312Z" />
                  </svg>{" "}
                  Cement : {Number(cementInKg).toFixed(0)} Kg{" "}
                </h6>
                <h6 style={{ fontWeight: "bold", fontSize: "0.95rem" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="rgb(176,0,26)"
                    className="bi bi-2-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm4.646 6.24v.07H5.375v-.064c0-1.213.879-2.402 2.637-2.402 1.582 0 2.613.949 2.613 2.215 0 1.002-.6 1.667-1.287 2.43l-.096.107-1.974 2.22v.077h3.498V12H5.422v-.832l2.97-3.293c.434-.475.903-1.008.903-1.705 0-.744-.557-1.236-1.313-1.236-.843 0-1.336.615-1.336 1.306Z" />
                  </svg>{" "}
                  Sand : {Number(sandInKg).toFixed(0)} Kg{" "}
                </h6>
                <h6 style={{ fontWeight: "bold", fontSize: "0.95rem" }}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="rgb(243,178,0)"
                    className="bi bi-3-square-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm5.918 8.414h-.879V7.342h.838c.78 0 1.348-.522 1.342-1.237 0-.709-.563-1.195-1.348-1.195-.79 0-1.312.498-1.348 1.055H5.275c.036-1.137.95-2.115 2.625-2.121 1.594-.012 2.608.885 2.637 2.062.023 1.137-.885 1.776-1.482 1.875v.07c.703.07 1.71.64 1.734 1.917.024 1.459-1.277 2.396-2.93 2.396-1.705 0-2.707-.967-2.754-2.144H6.33c.059.597.68 1.06 1.541 1.066.973.006 1.6-.563 1.588-1.354-.006-.779-.621-1.318-1.541-1.318Z" />
                  </svg>{" "}
                  Aggregate : {Number(aggregateInKg).toFixed(0)} Kg{" "}
                </h6>
              </div>
              <div className="m-0 p-0 chart">
                <PieChart />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row px-4 py-1">
        <div className="col-md-10" style={{ backgroundColor: "white" }}>
          <div className="col-md-12 mt-md-2">
            <h5 className="p-0 m-0 mt-1 text-secondary fw-bold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="22"
                fill="gray"
                className="bi bi-info-square-fill"
                viewBox="0 0 16 16"
              >
                <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
              </svg>{" "}
              Cement Concrete Calculation
            </h5>
          </div>
          <div className="col-md-12">
            <hr />
          </div>
          <div className="col-md-12 d-md-flex formula_section">
            <div className="cement_concrete_volume col-md-6 text-center">
              <h5>Cement Concrete Volume</h5>
              <br />
              <p>= Length x Width x Depth</p>
              <p>
                = {totalLength} x {totalWidth} x {totalDepth}
              </p>
              <p>
                = {concreteVolumeMeter} m<sup>3</sup>
              </p>
              <p>
                = {concreteVolumeFeet} ft<sup>3</sup>
              </p>
            </div>
            <div>
              <hr />
            </div>
            <div className="wet_volume_of_mix col-md-6 text-center">
              <h5>Wet Volume of Mix</h5>
              <br />
              <p>= Total Volume + ( Total Volume x [ 52.4 / 100 ] ) </p>
              <p>
                = {concreteVolumeMeter} + ({concreteVolumeMeter} x [ 52.4 / 100
                ] )
              </p>
              <p>
                = {wetVolume} m<sup>3</sup>
              </p>
              <span
                className="wet_volume_of_mix_footer py-md-2 px-md-3"
                style={{ backgroundColor: "rgb(223, 240, 216)" }}
              >
                Wet volume of mix is <b>52.4 % higher than</b> dry volume
              </span>
            </div>
          </div>
          <div className="col-12">
            <hr />
          </div>
          <div className="col-md-12 d-md-flex align-items-center">
            <div className="col-md-4">
              <div className="amount_of_cement_required text-center formula_section">
                <h5>
                  <img src={cementLogo} alt="..." width={25} height={25} />{" "}
                  Amount of Cement Required
                </h5>
                <br />
                <h5>Cement Volume</h5>
                <p>= [ Cement Ratio / Sum of Ratio ] x Wet Volume of Mix</p>
                <p>
                  = [ {cementRatio} / {sumOfRatio} ] x {wetVolume}
                </p>
                <p>
                  = {cementVolume} m<sup>3</sup>
                </p>
                <div>
                  <hr />
                </div>
                <h5>No. of Cement Bags</h5>
                <p>= Cement Volume / 0.035</p>
                <p>= {cementVolume} / 0.035</p>
                <p>= {noOfCementBags} Bags</p>
                <div>
                  <hr />
                </div>
                <h5>Cement in Kg</h5>
                <p>= No.of Cement Bags x 50</p>
                <p>= {noOfCementBags} x 50</p>
                <p>= {cementInKg} kg</p>
                <div
                  className="amount_of_cement_footer m-md-4 p-md-4"
                  style={{ backgroundColor: "rgb(223, 240, 216)" }}
                >
                  <span>
                    <b>Note:</b> 1 Bag of cement ={" "}
                    <b>
                      0.035 m<sup>3</sup>.
                    </b>
                    <br />1 Cement bag contains = <b>50 kg cement</b>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div className="col-md-4">
              <div className="amount_of_sand_required text-center formula_section">
                <h5>
                  <img src={sandLogo} alt="..." width={25} height={25} /> Amount
                  of Sand Required
                </h5>
                <br />
                <h5>Sand Volume</h5>
                <p>= [ Sand Ratio / Sum of Ratio ] x Wet of Volume Mix</p>
                <p>
                  = [ {sandRatio} / {sumOfRatio} ] x {wetVolume}
                </p>
                <p>
                  = {sandVolume} m<sup>3</sup>
                </p>
                <div>
                  <hr />
                </div>
                <h5>Sand in Kg</h5>
                <p>= Sand Volume x 1550</p>
                <p>= {sandVolume} x 1550</p>
                <p>= {sandInKg} kg</p>
                <div>
                  <hr />
                </div>
                <h5>Sand in Ton</h5>
                <p>= Sand in Kg / 1000</p>
                <p>= {sandInKg} / 1000</p>
                <p>= {sandInTon} Ton</p>
                <div
                  className="amount_of_sand_required_footer m-md-4 p-md-3"
                  style={{ backgroundColor: "rgb(223, 240, 216)" }}
                >
                  <span>
                    <b>Note:</b> By considering dry loose bulk density of sand ={" "}
                    <b>
                      1550 kg/m<sup>3</sup>.
                    </b>
                    <b>
                      <br />
                      1000 kg
                    </b>{" "}
                    = <b>1 Ton</b>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <hr />
            </div>
            <div className="col-md-4">
              <div className="amount_of_aggregate_required text-center formula_section">
                <h5>
                  <img src={aggregateLogo} alt="..." width={25} height={25} />{" "}
                  Amount of Aggregate Required
                </h5>
                <br />
                <h5>Aggregate Volume</h5>
                <p>= [ Aggregate Ratio / Sum of Ratio ] x Wet of Volume Mix</p>
                <p>
                  = [ {aggregateRatio} / {sumOfRatio} ] x {wetVolume}
                </p>
                <p>
                  = {aggregateVolume} m<sup>3</sup>
                </p>
                <div>
                  <hr />
                </div>
                <h5>Aggregate in Kg</h5>
                <p>= Aggregate Volume x 1350</p>
                <p>= {aggregateVolume} x 1350</p>
                <p>= {aggregateInKg} kg</p>
                <div>
                  <hr />
                </div>
                <h5>Aggregate in Ton</h5>
                <p>= Aggregate in Kg / 1000</p>
                <p>= {aggregateInKg} / 1000</p>
                <p>= {aggregateInTon} Ton</p>
                <div
                  className="amount_of_aggregate_required_footer m-md-4 p-md-3"
                  style={{ backgroundColor: "rgb(223, 240, 216)" }}
                >
                  <span>
                    <b>Note:</b> By considering dry loose bulk density of
                    aggregate ={" "}
                    <b>
                      1350 kg/m<sup>3</sup>.
                    </b>
                    <b>
                      <br />
                      1000 kg
                    </b>{" "}
                    = <b>1 Ton</b>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainSg;
