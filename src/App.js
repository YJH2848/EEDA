import MapApi from "./components/MapApi";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Reset } from "styled-reset";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <div>
        <Header />
        <MapApi />
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
