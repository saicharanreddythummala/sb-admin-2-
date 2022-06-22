import React from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import Dashboard from "./Dashboard";
import Buttons from "./Buttons";
import Footer from "./Footer";
import Tables from "./Tables";
import Charts from "./Charts";
import Error from "./Pages/Error";
import Blank from "./Pages/Blank";
import Cards from "./Cards";
import Other from "./Other";
import Colors from "./Colors";
import Borders from "./Borders";
import Animation from "./Animation";

export default function Main() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar />
            <div className="container-fluid">
              <Routes>
                <Route path="" element={<Dashboard />} />
                <Route path="buttons" element={<Buttons />} />
                <Route path="cards" element={<Cards />} />
                <Route path="colors" element={<Colors />} />
                <Route path="borders" element={<Borders />} />
                <Route path="animation" element={<Animation />} />
                <Route path="other" element={<Other />} />
                <Route path="tables" element={<Tables />} />
                <Route path="charts" element={<Charts />} />
                <Route path="error" element={<Error />} />
                <Route path="blank" element={<Blank />} />
              </Routes>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}
