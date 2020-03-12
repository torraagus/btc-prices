import React from "react";
//import logo from './logo.svg';
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Currencies from "./components/Currencies";

function App() {
  return (
    <div>
      <h1 className="mt-5 mb-0"> Bitcoin prices </h1>{" "}
      <h5 className="mt-0"> Select one currency </h5> <Currencies />
    </div>
  );
}

export default App;
