import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import SelectOutput from './components/selectOutput'
import RadioButtons from './components/radioButtons'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <div className="d-flex flex-column">
      <div className="d-flex justify-content-around bd-highlight">
        <BrowserRouter>
          {/* Passing global state info and function references to the rest of the app */}
          <Routes/>
        </BrowserRouter>
        <SelectOutput/>
      </div>
      <div className="d-flex justify-content-around bd-highlight mb-3">
        <RadioButtons/>
        <button type="button" className="btn btn-success">Generate</button>
      </div>

    </div>
  );
}

export default App;
