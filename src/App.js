import React from 'react';
import logo from './logo.svg';
import Image from 'react-bootstrap/Image'
import './App.css';
import Gloves from "./baseball gloves.png"
import Blazer from "./blazer.png"
import CoachesJacket from "./coaches_jacket.png"
import CroppedTrouser from "./cropped_trousers.png"
import { Link, Element } from 'react-scroll'
import RawMaterials from './components/rawMaterials'
import SelectOutput from './components/selectOutput'
import RadioButtons from './components/radioButtons'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (

    <div class="d-flex flex-column">
      <div className="d-flex justify-content-around bd-highlight">
        <RawMaterials/>
        <SelectOutput/>
      </div>
      <div className="d-flex justify-content-around bd-highlight mb-3">
        <RadioButtons/>
        <button type="button" class="btn btn-success">Generate</button>
      </div>

    </div>
  );
}

export default App;
