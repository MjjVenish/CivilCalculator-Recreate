import { useEffect, useState } from "react";
import ConstrctionForm from "../components/ConstrctionForm";
import ApproxAmount from "../components/ApproxAmount";
import QuantityMaterial from "../components/QuantityMaterial";
import "../style/calculation.css";
import PieCharts from "../components/PieCharts";
import BarCharts from "../components/BarCharts";
import MainNavBar from "../components/MainNavBar";
import Calculation from "../components/Calculation";

const Construction = () => {
  const [formValue, setFormValue] = useState({
    builtup_area: 1000,
    approx_cost: 1000,
  });
  const [cost, setCost] = useState({
    cement: 16.4,
    sand: 12.3,
    steel: 24.6,
    aggregate: 7.4,
    finishers: 16.5,
    fittings: 22.8,
  });
  const [isTrue, setIsTrue] = useState(false);
  const [quantity, setQuantity] = useState(null);
  const [amount, setAmount] = useState({});
  const calculation = (value) => setFormValue(value);
  useEffect(() => {
    const totalCost = formValue?.builtup_area * formValue?.approx_cost;
    const cementQuantity = parseInt(formValue?.builtup_area * 0.4);
    const cementAmount = parseInt((cost.cement / 100) * totalCost);
    const sandQuantity = parseInt(formValue?.builtup_area * 0.816);
    const sandAmount = parseInt((cost.sand / 100) * totalCost);
    const aggregateQuantity = parseInt(formValue?.builtup_area * 0.608);
    const aggregateAmount = parseInt((cost.aggregate / 100) * totalCost);
    const steelQuantity = parseInt(formValue?.builtup_area * 4);
    const steelAmount = parseInt((cost.steel / 100) * totalCost);
    const paint = parseInt(formValue?.builtup_area * 0.18);
    const bricks = parseInt(formValue?.builtup_area * 8);
    const flooring = parseInt(formValue?.builtup_area * 1.3);
    const finishers = parseInt((cost.finishers / 100) * totalCost);
    const fittings = parseInt((cost.fittings / 100) * totalCost);
    setQuantity({
      cementQuantity,
      sandQuantity,
      aggregateQuantity,
      steelQuantity,
      paint,
      bricks,
      flooring,
    });
    setAmount({
      cementAmount,
      sandAmount,
      aggregateAmount,
      steelAmount,
      finishers,
      fittings,
      totalCost,
    });
  }, [
    formValue,
    cost?.aggregate,
    cost?.cement,
    cost?.finishers,
    cost?.fittings,
    cost?.sand,
    cost?.steel,
  ]);

  // Function to update the state based on viewport width
  const updateStateBasedOnViewport = () => {
    if (window.innerWidth <= 1000) {
      setIsTrue(true);
    } else {
      setIsTrue(false);
    }
  };
  // Listen for window resize events and update state
  useEffect(() => {
    window.addEventListener("resize", updateStateBasedOnViewport);
    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", updateStateBasedOnViewport);
    };
  }, []);

  return (
    <>
      <main className="main-tag">
        <div className="lab-view">
          <div></div>
          <ConstrctionForm calculation={calculation} />
          <ApproxAmount amount={amount} cost={cost} setCost={setCost} />
          <BarCharts />
          <QuantityMaterial quantity={quantity} formValue={formValue} />
          <PieCharts amount={amount} />
          {isTrue ? <Calculation /> : ""}
        </div>
        <MainNavBar />
      </main>
      {isTrue ? "" : <Calculation />}
    </>
  );
};

export default Construction;
