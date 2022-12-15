import MapApi from "./components/MapApi";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/Header";

import { Reset } from "styled-reset";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MapApi />}></Route>
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
