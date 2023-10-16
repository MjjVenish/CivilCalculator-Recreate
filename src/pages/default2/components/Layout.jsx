import React from "react";
import Form from "./Form";
import List from "./List";
import { useUserContext } from "../utils/hooks/userContext";
import AreaCaculator from "./AreaCaculator";
import Header from "./Header";
import "../style/layout.css";
import CarpetArea from "../pages/CarpetArea";
import BuiltUpArea from "../pages/BuiltUpArea";
import SuperBuiltUpArea from "../pages/SuperBuiltUpArea";

const Layout = () => {
  const { total } = useUserContext();
  return (
    <div>
      <Header />
      <Form />
      <div className="layout-change">
        <AreaCaculator
          CarpetArea={total.CarpetArea}
          BuiltUpArea={total.BuiltUpArea}
          SuperBuiltUpArea={total.SuperBuiltUpArea}
        />
        <List />
      </div>
      <CarpetArea />
      <BuiltUpArea />
      <SuperBuiltUpArea />
    </div>
  );
};

export default Layout;
