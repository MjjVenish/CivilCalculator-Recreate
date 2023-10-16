import React from "react";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

const PageWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <NavBar />
      {children}
    </>
  );
};

export default PageWrapper;
