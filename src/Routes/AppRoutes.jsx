import React from "react";
import { Route, Routes } from "react-router-dom";
import PageWrapper from "../container/PageWrapper";
import Construction from "../pages/Construction";
import CementCalci from "../pages/CementCalci";
import About from "../pages/default/Components/About";
import Home from "../pages/default/Components/Home";
import Main from "../pages/default/Components/Main";
import Heading from "../pages/default1/Components/Heading";
import Homes from "../pages/default1/Components/Home";
import Mains from "../pages/default1/Components/Main";
import Abouts from "../pages/default1/Components/About";
import Layout from "../pages/default2/components/Layout";
import UserContextProvider from "../pages/default2/utils/context/UserContext";
import HomeSg from "../pages/default3/Home/Home";
import PathTracker from "../pages/default3/PathTracker/PathTracker";
import MainSg from "../pages/default3/Main/Main";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageWrapper>
            <Construction />
          </PageWrapper>
        }
      />
      <Route
        path="/Cement-Concrete-Calculator"
        element={
          <PageWrapper>
            <CementCalci />
          </PageWrapper>
        }
      />
      <Route
        path="/Water-Sump/Tank Calculator"
        element={
          <PageWrapper>
            <Home />
            <About />
            <Main />
          </PageWrapper>
        }
      />
      <Route
        path="/Carpet Area/Built up Area/Super built up Area Calculator"
        element={
          <UserContextProvider>
            <Layout />
          </UserContextProvider>
        }
      />
      <Route
        path="/gg"
        element={
          <>
            <HomeSg />
            <PathTracker />
            <MainSg />
          </>
        }
      />
      <Route
        path="/soil"
        element={
          <PageWrapper>
            <Heading />
            <Homes />
            <Abouts />
            <Mains />
          </PageWrapper>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
