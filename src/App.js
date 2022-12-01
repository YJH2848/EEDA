import MapApi from "./components/MapApi";
// import Header from "./components/Header";

import { Reset } from "styled-reset";
import React from "react";

function App() {
  return (
    <React.Fragment>
      <Reset />
      <div>
        {/* <Header /> */}
        <MapApi />
      </div>
    </React.Fragment>
  );
}

export default App;
