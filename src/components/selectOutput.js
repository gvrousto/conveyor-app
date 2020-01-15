import React from 'react';
import { Link, Element } from 'react-scroll';
import Image from 'react-bootstrap/Image';
import Blazer from "../blazer.png";
import CoachesJacket from "../coaches_jacket.png";
import CroppedTrouser from "../cropped_trousers.png";
import './style/selectOutput.css';

class SelectOutput extends React.Component{
  render(){
    return(
      <div className="select-output-container">
        <div class="select-output-header">Select Output</div>
        <Element className="select-output-vector-container" style={{
          position: 'relative',
          height: '500px',
          overflow: 'scroll'
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
    );
  }
}

export default SelectOutput;
