import React from "react";
import { NavLink } from "react-router-dom";
import civilunit from "../assets/civil unit.png";
import Brick from "../assets/brick.png";
import cement from "../assets/Constrction Cost Estimation.png";
import carpetArea from "../assets/Icon_Carpet_Area.png";
import pcc from "../assets/PCC.png";
import plastering from "../assets/plastring.png";
import concreteBlock from "../assets/Concrete.png";
import precast from "../assets/Precast.jpg";
import flooring from "../assets/Flooring.png";
import counterop from "../assets/Counterop.png";
import tank from "../assets/Tank Volume.webp";
import air from "../assets/Air Conditioner Size.png";
import solar from "../assets/Solar Water.png";
import paint from "../assets/paint work.png";
import excavation from "../assets/excavation.png";
import wood from "../assets/wood framing.png";
import playwood from "../assets/playwood sheets.png";
import anti from "../assets/anti termite.png";
import round from "../assets/round column.png";
import stair from "../assets/stair case.png";
import top from "../assets/top soil.png";
import steelweight from "../assets/steel weight.png";
import concretetube from "../assets/concrete tube.png";
import roof from "../assets/roof pitch.png";
import asphalt from "../assets/asphalt.png";
import steelquantity from "../assets/steel quantity.png";

const MainNavChild = ({ brea, hidden }) => {
  return (
    <>
      <NavLink to={"/"} onClick={() => hidden()}>
        <img src={cement} alt="" /> Constrction Cost Estimation
      </NavLink>
      <NavLink to={"/Carpet Area/Built up Area/Super built up Area Calculator"}>
        <img src={carpetArea} alt="" />
        Carpet Area / Built up Area / Super built up Area {brea ? <br /> : ""}
        Calculator
      </NavLink>
      <NavLink to={"/Cement-Concrete-Calculator"} onClick={() => hidden()}>
        <img src={pcc} alt="" /> Cement Concrete Calculator
      </NavLink>
      <NavLink to={"/Plastering-Calculator"}>
        <img src={plastering} alt="" /> Plastering Calculator
      </NavLink>
      <NavLink to={"/Brick-Calculator"}>
        <img src={Brick} alt="" /> Brick Calculator
      </NavLink>
      <NavLink to={"/Concrete Block Calculator"}>
        <img src={concreteBlock} alt="" /> Concrete Block Calculator
      </NavLink>
      <NavLink to={"/Precast Component Wall Calculator"}>
        <img src={precast} alt="" /> Precast Component Wall Calculator
      </NavLink>
      <NavLink to={"/Flooring Calculator"}>
        <img src={flooring} alt="" /> Flooring Calculator
      </NavLink>
      <NavLink to={"/Counterop Calculator"}>
        <img src={counterop} alt="" /> Counterop (Platform) Calculator
      </NavLink>
      <NavLink to={"/Water-Sump/Tank Calculator"}>
        <img src={tank} alt="" /> Tank Volume Calculator
      </NavLink>
      <NavLink to={"/Air Conditioner Size Calculator"}>
        <img src={air} alt="" /> Air Conditioner Size Calculator
      </NavLink>
      <NavLink to={"/Solar Water heater Calculator"}>
        <img src={solar} alt="" /> Solar Water heater Calculator
      </NavLink>
      <NavLink to={"/paint work calculator"}>
        <img src={paint} alt="" /> paint work calculator
      </NavLink>
      <NavLink to={"/excavation calculator"}>
        <img src={excavation} alt="" /> excavation calculator
      </NavLink>
      <NavLink to={"/wood framing calculator"}>
        <img src={wood} alt="" /> wood framing calculator
      </NavLink>
      <NavLink to={"/playwood sheets calculator"}>
        <img src={playwood} alt="" /> playwood sheets calculator
      </NavLink>
      <NavLink to={"/anti termite calculator"}>
        <img src={anti} alt="" /> anti termite calculator
      </NavLink>
      <NavLink to={"/round column calculator"}>
        <img src={round} alt="" /> round column calculator
      </NavLink>
      <NavLink to={"/stair case calculator"}>
        <img src={stair} alt="" /> stair case calculator
      </NavLink>
      <NavLink to={"/top soil calculator"}>
        <img src={top} alt="" /> top soil calculator
      </NavLink>
      <NavLink to={"/steel weight calculator"}>
        <img src={steelweight} alt="" /> steel weight calculator
      </NavLink>
      <NavLink to={"/concrete tube calculator"}>
        <img src={concretetube} alt="" /> concrete tube calculator
      </NavLink>
      <NavLink to={"/roof pitch calculator"}>
        <img src={roof} alt="" /> roof pitch calculator
      </NavLink>
      <NavLink to={"/asphalt calculator"}>
        <img src={asphalt} alt="" /> asphalt calculator
      </NavLink>
      <NavLink to={"/steel quantity calculator"}>
        <img src={steelquantity} alt="" /> steel quantity calculator
      </NavLink>
      <NavLink to={"/civil unit calculator"}>
        <img src={civilunit} alt="" /> civil unit calculator
      </NavLink>
    </>
  );
};

export default MainNavChild;
