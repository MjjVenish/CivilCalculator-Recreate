import React from "react";
import CementForm from "../components/CementForm";
import UnitSelect from "../components/UnitSelect";
import { useState, useEffect } from "react";
import TotalVolume from "../components/TotalVolume";
import Quantity from "../components/Quantity";
import CalculCement from "../components/CalculCement";
import WetVolComp from "../components/WetVolComp";
import MainNavBar from "../components/MainNavBar";

const CementCalci = () => {
  const [unit, setUnit] = useState("Meter/CM");
  const [cemCal, setCemCal] = useState({
    mainTitle: "Cement Concrete Volume",
    title: "Length X Width X Depth",
    calci: "",
    ans: "",
    ans1: "",
  });
  const [wet, setWet] = useState({
    mainTitle: "Wet Volume of Mix",
    title: "Total Volume+(Total Volume X 52.4/100)",
    calci: "",
    ans: "",
    note: "Wet volume of mix is 52.4 % higher than dry volume",
  });
  const [amountCal, setAmountCal] = useState([]);
  const [formData, setFormData] = useState({
    length: 10,
    width: 7,
    depth: 4,
    lengthCm: "",
    widthCm: "",
    depthCm: "",
    grade: "1:1.5:3",
  });
  const [chart, setChart] = useState({});

  const unitValue = (value) => setUnit(value);

  useEffect(() => {
    const { length, width, depth, lengthCm, widthCm, depthCm, grade } =
      formData;
    let totalVolumeCement;
    let wetVolume;
    if (unit === "Meter/CM") {
      const lenCm = lengthCm / 100 + length;
      const widCm = widthCm / 100 + width;
      const depCm = depthCm / 100 + depth;
      totalVolumeCement = lenCm * widCm * depCm;
      const toVolCem = totalVolumeCement * 35.3147;
      setCemCal((cemCal) => ({
        ...cemCal,
        calci: `${lenCm} X ${widCm} X ${depCm}`,
        ans: `${totalVolumeCement} c**3`,
        ans1: `${toVolCem} ft**3`,
      }));
      wetVolume = totalVolumeCement + (totalVolumeCement * 52.4) / 100;
    } else {
      const lenCm = (lengthCm / 12 + length).toFixed(2);
      const widCm = (widthCm / 12 + width).toFixed(2);
      const depCm = (depthCm / 12 + depth).toFixed(2);
      totalVolumeCement = lenCm * widCm * depCm;
      const toVolCem = totalVolumeCement * 0.02831;
      setCemCal((cemCal) => ({
        ...cemCal,
        calci: `${lenCm} X ${widCm} X ${depCm}`,
        ans: `${totalVolumeCement} ft**3`,
        ans1: `${toVolCem} m**3`,
      }));
      wetVolume = (toVolCem + (toVolCem * 52.4) / 100).toFixed(2);
    }
    setWet((wet) => ({
      ...wet,
      calci: `${cemCal.ans.split(" ")[0]} + (${
        cemCal.ans.split(" ")[0]
      } X 52.4/100)`,
      ans: `${wetVolume} m**3`,
    }));
    const cementVolume = (
      (Number(grade.split(":")[0]) / 5.5) *
      wetVolume
    ).toFixed(2);
    const sandVolume = (
      (Number(grade.split(":")[1]) / 5.5) *
      wetVolume
    ).toFixed(2);
    const aggVolume = ((Number(grade.split(":")[2]) / 5.5) * wetVolume).toFixed(
      2
    );
    const cementBag = (cementVolume / 0.035).toFixed(2);
    const sandKg = (sandVolume * 1550).toFixed(2);
    const aggKg = (aggVolume * 1350).toFixed(2);
    const cementKg = (cementBag * 50).toFixed(2);
    const sandTon = (sandKg / 1000).toFixed(2);
    const aggTon = (aggKg / 1000).toFixed(2);
    setChart({ cementKg, sandKg, aggKg, cementBag });
    setAmountCal([
      {
        mainTit: "Amount of Cement Required",
        title: "Cement Volume",
        calci: "Cement ratio/Sum of ratio X Wet Volume of Mix",
        ans: `${Number(grade.split(":")[0])}/5.5 X ${wetVolume}`,
        ans1: `${cementVolume} m**3`,
      },
      {
        mainTit: "Amount of Sand Required",
        title: "Sand Volume",
        calci: "Sand ratio/Sum of ratio X Wet Volume of Mix",
        ans: `${Number(grade.split(":")[1])}/5.5 X ${wetVolume}`,
        ans1: `${sandVolume} m**3`,
      },
      {
        mainTit: "Amount of Aggregate Required",
        title: "Aggregate Volume",
        calci: "Aggregate ratio/Sum of ratio X Wet Volume of Mix",
        ans: `${Number(grade.split(":")[2])}/5.5 X ${wetVolume}`,
        ans1: `${aggVolume} m**3`,
      },
      {
        mainTit: "",
        title: "No. of Cement Bags",
        calci: "Cement Volume/0.035",
        ans: `${cementVolume}/0.035`,
        ans1: `${cementBag} Bags`,
      },
      {
        mainTit: "",
        title: "Sand in Kg",
        calci: "Sand Volume X 1550",
        ans: `${sandVolume}/1550`,
        ans1: `${sandKg} Kg`,
      },
      {
        mainTit: "",
        title: "Aggregate in Kg",
        calci: "Aggregate Volume X 1350",
        ans: `${aggVolume}/1350`,
        ans1: `${aggKg} Kg`,
      },
      {
        mainTit: "",
        title: "Cement in Kg",
        calci: "No of Cement Bags X 50",
        ans: `${cementBag}*50`,
        ans1: `${cementKg} Kg`,
        note: "Note: 1 Bag of cement = 0.035 m3.1 Cement bag contains = 50 kg cement",
      },
      {
        mainTit: "",
        title: "Sand in Ton",
        calci: "Sand in Kg/1000",
        ans: `${sandKg}/1000`,
        ans1: `${sandTon} Ton`,
        note: "Note: By considering dry loose bulk density of sand = 1550 kg/m3.1000 kg = 1 Ton",
      },
      {
        mainTit: "",
        title: "Aggregate in Ton",
        calci: "Aggregate in Ton/1000",
        ans: `${aggKg}/1000`,
        ans1: `${aggTon} Ton`,
        note: "Note: By considering dry loose bulk density of aggregate = 1350 kg/m3.1000 kg = 1 Ton",
      },
    ]);
  }, [formData, unit, cemCal.ans]);
  const calculation = (values) => {
    setFormData(values);
  };

  return (
    <div className="cement-conrate">
      <div>
        <div className="ce-con-child" id="main-div-of">
          <div className="form-of-concrate">
            <h3>CEMENT CONCRETE CALCULATION</h3>
            <UnitSelect unitValue={unitValue} />
            <CementForm calculation={calculation} unit={unit} />
          </div>
          <div></div>
        </div>
        <div className="chart-of-cement">
          <TotalVolume cemCal={cemCal} />
          <Quantity chart={chart} />
        </div>
        <h2 className="title-of-calci">Cement Concrete Calculation</h2>
        <div className="calci-of-cem">
          <WetVolComp data={cemCal} />
          <WetVolComp data={wet} />
        </div>
        <div className="cem-con-calcul">
          {amountCal.map((amount) => (
            <CalculCement key={amount.title} amount={amount} />
          ))}
        </div>
      </div>
      <MainNavBar />
    </div>
  );
};

export default CementCalci;
