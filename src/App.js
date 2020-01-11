import React from 'react';
import logo from './logo.svg';
import Image from 'react-bootstrap/Image'
import './App.css';
import Gloves from "./baseball gloves.png"
import Blazer from "./blazer.png"
import CoachesJacket from "./coaches_jacket.png"
import CroppedTrouser from "./cropped_trousers.png"
import { Link, Element } from 'react-scroll'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div class="d-flex flex-column">
      <div className="d-flex justify-content-around bd-highlight mb-3">
        <div className="raw-materials-container">
          <div class="p-2 bd-highlight">Select Raw Materials</div>
          <Image src={Gloves} width="350px"/>
          <div>Baseball Glove</div>
        </div>
        <div className="select-output-container">
          <div class="p-2 bd-highlight">Select Output</div>
          <Element name="test7" className="element" id="containerElement" style={{
            position: 'relative',
            height: '200px',
            overflow: 'scroll',
            marginBottom: '100px'
          }}>
            <div className="d-flex flex-row">
              <div className="clothing-vectors-container d-flex flex-column">
                <Image className="vector" src={Blazer} width="350px"/>
                <Image src={CoachesJacket} width="350px"/>
                <Image src={CroppedTrouser} width="350px"/>
              </div>
              <div className="clothing-vectors-container d-flex flex-column">
                <Image src={Blazer} width="350px"/>
                <Image src={CoachesJacket} width="350px"/>
                <Image src={CroppedTrouser} width="350px"/>
              </div>
            </div>
          </Element>
        </div>
      </div>
      <div className="d-flex justify-content-around bd-highlight mb-3">
        <div className="d-flex flex-row">
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios"></input>
            <label class="custom-control-label" for="defaultUnchecked">XS</label>
          </div>

          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios"></input>
            <label class="custom-control-label" for="defaultChecked">S</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios"></input>
            <label class="custom-control-label" for="defaultChecked">M</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios"></input>
            <label class="custom-control-label" for="defaultChecked">L</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="defaultChecked" name="defaultExampleRadios"></input>
            <label class="custom-control-label" for="defaultChecked">XL</label>
          </div>
        </div>

        <button type="button" class="btn btn-success">Generate</button>
      </div>

    </div>
  );
}

export default App;
