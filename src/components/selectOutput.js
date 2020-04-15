import React from 'react';
import { Element } from 'react-scroll';
import Image from 'react-bootstrap/Image';

import Blazer from "../vectorImages/blazer.png";
import CoachesJacket from "../vectorImages/coaches_jacket.png";
import CroppedTrouser from "../vectorImages/cropped_trousers.png";

import CrewNeckSweat from "../vectorImages/crew_neck_sweatshirt.png";
import FivePocket from "../vectorImages/five_pocket_trousers.png";
import HoodedSweat from "../vectorImages/hooded_sweatshirt.png";
import LongSleeveHenley from "../vectorImages/long_sleeve_henley_shirt.png";
import OxfordShirt from "../vectorImages/oxford_shirt.png";
import Parka from "../vectorImages/parka.png";
import PoloShirt from "../vectorImages/polo_shirt.png";
import Poncho from "../vectorImages/poncho.png";
import RugbyShirt from "../vectorImages/rugby_shirt.png";
import ShortPants from "../vectorImages/short_pants.png";
import ShortSleeveButton from "../vectorImages/short_sleeve_button_up_shirt.png";
import TShirt from "../vectorImages/t-shirt.png";
import Tote from "../vectorImages/tote_bag.png";
import Tracksuit from "../vectorImages/tracksuit_jacket.png";
import Trench from "../vectorImages/trenchcoat.png";

import './style/selectOutput.css';

class SelectOutput extends React.Component{

  constructor(props){
    super(props);
  }


  handleClick(vector){
    this.props.handleVectorClicked(vector);
  }

  isClicked(vector){
    if(this.props.vectorClicked === vector){
      return "clothing-vector-image-clicked";
    } else{
      return "clothing-vector-image";
    }
  }


  render(){
    return(
      <div className="select-output-container">
        <div className="select-output-header">Select Output</div>
        <Element style={{
          position: 'relative',
          height: '500px',
          overflow: 'scroll'
        }}>
          <div className="d-flex flex-row">
            <div className="clothing-vectors-container d-flex flex-column">
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("CoachesJacket")}
                  src={CoachesJacket}
                  width="200px"
                  onClick={() => this.handleClick("CoachesJacket")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("CrewNeckSweat")}
                  src={CrewNeckSweat}
                  width="200px"
                  onClick={() => this.handleClick("CrewNeckSweat")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("FivePocket")}
                  src={FivePocket}
                  width="200px"
                  onClick={() => this.handleClick("FivePocket")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("HoodedSweat")}
                  src={HoodedSweat}
                  width="200px"
                  onClick={() => this.handleClick("HoodedSweat")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("LongSleeveHenley")}
                  src={LongSleeveHenley}
                  width="200px"
                  onClick={() => this.handleClick("LongSleeveHenley")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("OxfordShirt")}
                  src={OxfordShirt}
                  width="200px"
                  onClick={() => this.handleClick("OxfordShirt")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("Parka")}
                  src={Parka}
                  width="200px"
                  onClick={() => this.handleClick("Parka")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("PoloShirt")}
                  src={PoloShirt}
                  width="200px"
                  onClick={() => this.handleClick("PoloShirt")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("RugbyShirt")}
                  src={RugbyShirt}
                  width="200px"
                  onClick={() => this.handleClick("RugbyShirt")}/>
              </div>
            </div>
            <div className="clothing-vectors-container d-flex flex-column">
            <div className= "clothing-vector-unit">
              <Image
                className={this.isClicked("ShortPants")}
                src={ShortPants}
                width="200px"
                onClick={() => this.handleClick("ShortPants")}/>
            </div>
            <div className= "clothing-vector-unit">
              <Image
                className={this.isClicked("TShirt")}
                src={TShirt}
                width="200px"
                onClick={() => this.handleClick("TShirt")}/>
            </div>
            <div className= "clothing-vector-unit">
              <Image
                className={this.isClicked("ShortSleeveButton")}
                src={ShortSleeveButton}
                width="200px"
                onClick={() => this.handleClick("ShortSleeveButton")}/>
            </div>
            <div className= "clothing-vector-unit">
              <Image
                className={this.isClicked("Tote")}
                src={Tote}
                width="200px"
                onClick={() => this.handleClick("Tote")}/>
            </div>
            <div className= "clothing-vector-unit">
              <Image
                className={this.isClicked("Trench")}
                src={Trench}
                width="200px"
                onClick={() => this.handleClick("Trench")}/>
            </div>
            <div className= "clothing-vector-unit">
              <Image
                className={this.isClicked("Tracksuit")}
                src={Tracksuit}
                width="200px"
                onClick={() => this.handleClick("Tracksuit")}/>
            </div>
            <div className= "clothing-vector-unit">
              <Image
                className={this.isClicked("Poncho")}
                src={Poncho}
                width="200px"
                onClick={() => this.handleClick("Poncho")}/>
            </div>
            <div className= "clothing-vector-unit">
              <Image
                className={this.isClicked("CroppedTrouser")}
                src={CroppedTrouser}
                width="200px"
                onClick={() => this.handleClick("CroppedTrouser")}/>
            </div>
            <div className= "clothing-vector-unit">
              <Image
                className={this.isClicked("Blazer")}
                src={Blazer}
                width="200px"
                onClick={() => this.handleClick("Blazer")}/>
            </div>
            </div>
          </div>
        </Element>
      </div>
    );
  }
}

export default SelectOutput;
