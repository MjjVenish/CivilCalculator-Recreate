
import {React,useState} from 'react';
import { Input } from "./Input";
import { Button } from "./Button";
import { FcInfo } from 'react-icons/fc';
import { Tooltip } from 'react-tooltip';


function Home (props){
     const [unit, setUnit] = useState('Meter/CM');
     const [length,setLength] = useState(12);
     const [width,setWidth] = useState(9);
     const [depth,setDepth] = useState(15);
     const [lengthOn,setLengthOn] = useState(0);
     const [widthOn,setWidthOn] = useState(0);
     const [depthOn,setDepthOn] = useState(0);
     const [totalQuantity, setTotalQuantity] = useState(0);
     const [totalVolume, setTotalVolume] = useState(0);
     const [totalCubic, setTotalCubic] = useState(0);
     
     const lengthm = parseFloat(length) || 0;
     const widthm = parseFloat(width) || 0;
     const depthm = parseFloat(depth) || 0;
 
     const lengthIn = lengthm + lengthOn / 100;
     const widthIn = widthm + widthOn / 100;
     const depthIn = depthm + depthOn / 100;

    
     const calculateTotalQuantity = () => {
      if(unit === "Meter/CM"){
      const totalVolume = lengthIn * widthIn * depthIn;
      setTotalVolume(totalVolume);
      const totalQuantity = totalVolume * 1000; 
      setTotalQuantity(totalQuantity);
      const totalCubic = totalVolume * 35.3147;
      setTotalCubic(totalCubic);
      }
      else if(unit === "Feet/Inch"){
      const totalVolume = lengthIn * widthIn * depthIn;
      setTotalVolume(totalVolume);
      const totalQuantity = (totalVolume/35.3147) * 1000; 
      setTotalQuantity(totalQuantity);
      }
    };

    const handleReset = () => {
      setLength(0);
      setWidth(0);
      setDepth(0);
      setLengthOn(0);
      setWidthOn(0);
      setDepthOn(0);
    };
    
     const handleUnitChange = (e) => {
          const selectedValue=e.target.value;
          setUnit(selectedValue);
          calculateTotalQuantity();
        };
        
     return(
      <div className="title">
        <h4>Water-Sump/Tank Calculator</h4>
        <div className="container">
          <div className="row">
        <div className="col-sm-6">
        <div className="heading">
        <h6>WATER-SUMP/TANK CALCULATOR</h6>
        </div>
        <hr />
          <div className="dropdown-items">
           <label>Unit<a href="/unit" data-tooltip-id="my-tooltip4"><FcInfo /></a>
              <Tooltip id="my-tooltip4" style={{ backgroundColor: "#A9A9A9", color: "#000"}}><div>
                 <p>Tank calculation unit</p><hr />
                 <h6> A unit may also mean the standard <br/>units used for measurement.For<br />Ex.feet/unit & meter/cm.</h6></div></Tooltip></label>
           <select value={unit} onChange={handleUnitChange}>
            <option value="Meter/CM">Meter/CM</option>
            <option value="Feet/Inch">Feet/Inch</option></select>
            </div>
            <div className="field-items">
              <label>Length<a href="/length" data-tooltip-id="my-tooltip1"><FcInfo /></a>
              <Tooltip id="my-tooltip1" style={{ backgroundColor: "#A9A9A9", color: "#000"}}><div>
              <p>What is length in tank calculation?</p><hr />
              <h6>Length is the term used for identifying<br />the size of an object or distance.</h6></div></Tooltip></label>
              <Input type="Number" value={length} onChange={(e) => setLength(e.target.value)}/>
              <button>{unit ==='Meter/CM'? 'meter': 'feet'}</button>
              <Input type="Number"  value={lengthOn} onChange={(e) => setLengthOn(e.target.value)}/>
              <button>{unit ==='Meter/CM'? 'cm': 'inch'}</button>
              <label>Width<a href="/width" data-tooltip-id="my-tooltip2"><FcInfo /></a>
              <Tooltip id="my-tooltip2" style={{ backgroundColor: "#A9A9A9", color: "#000"}}><div>
                 <p>What is width in tank calculation?</p><hr />
                 <h6>Width is a measurement of how far<br />across a three dimensional object is.</h6></div></Tooltip></label>
              <Input type="Number" value={width} onChange={(e) => setWidth(e.target.value)}/>
              <button>{unit ==='Meter/CM'? 'meter': 'feet'}</button>
              <Input type="Number" value={widthOn} onChange={(e) => setWidthOn(e.target.value)}/>
              <button>{unit ==='Meter/CM'? 'cm': 'inch'}</button>
              <label>Depth <a href="/depth" data-tooltip-id="my-tooltip3"><FcInfo /></a>
              <Tooltip id="my-tooltip3" style={{ backgroundColor: "#A9A9A9", color: "#000"}}><div>
                 <p>What is depth in tank calculation?</p><hr />
                 <h6>Depth is a measurement of how far<br /> back a three dimensional object is.</h6></div></Tooltip></label>
              <Input type="Number" value={depth} onChange={(e) => setDepth(e.target.value)}/>
              <button>{unit ==='Meter/CM'? 'meter': 'feet'}</button>
              <Input type="Number" value={depthOn} onChange={(e) => setDepthOn(e.target.value)}/>
              <button>{unit ==='Meter/CM'? 'cm': 'inch'}</button>
          </div>
          <hr />
          <div className="button-style">
          <Button label="Calculate" onClick={calculateTotalQuantity} />
          <Button label="Reset" onClick={handleReset} />
        </div>
        </div>
        <div className="col-sm-4">
        <div className="head">
          <h5>Capacity of Water-Sump/Tank</h5>
          </div>
          {unit === 'Meter/CM' && (
          <div className="Volume-value">
            <p className="p1">{totalQuantity.toFixed(2)} lt</p>
            <hr/>
            <p className="p2">Volume = {totalVolume.toFixed(2)} m³ | {totalCubic.toFixed(2)} ft³</p>
            <hr />
            <h6> Water-sump/Tank Calculation</h6>
            <p>Total Volume = Length x Width X Depth </p>
            <p>Total Volume = {lengthIn} x {widthIn} x {depthIn}</p>
            <p> Total Volume = {totalVolume.toFixed(2)} m³</p>
            <p> Total Quantity = Total Volume x 1000</p>
            <p> Total Quantity = {totalVolume.toFixed(4)} x 1000</p>
            <p>Total Quantity = {totalQuantity.toFixed(2)} lt</p>
          </div>)}
          {unit === 'Feet/Inch' && (
          <div className="Volume-value">
            <p className="p1">{totalQuantity.toFixed(2)} lt</p>
            <hr/>
            <p className="p2">Volume = {(totalVolume/35.3147).toFixed(2)} m³ | {totalVolume.toFixed(2)} ft³</p>
            <hr />
            <h6> Water-sump/Tank Calculation</h6>
            <p>Total Volume = Length x Width X Depth </p>
            <p>Total Volume = {lengthIn} x {widthIn} x {depthIn}</p>
            <p> Total Volume = {totalVolume.toFixed(2)} ft³</p>
            <p> Total Quantity = Total Volume in Meter Cube x 1000</p>
            <p> Total Quantity = {(totalVolume/35.3147).toFixed(4)} x 1000</p>
            <p>Total Quantity = {totalQuantity.toFixed(2)} lt</p>
          </div>)}
        </div>
        </div>
        </div>
        </div>
      );
    }
export default Home;

