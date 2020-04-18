import React from 'react';
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
          <div className="scrolling-container">
            <div className="clothing-vectors-column-container">
              <div className="clothing-vectors-container">
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("CoachesJacket")}
                    src={CoachesJacket}
                    onClick={() => this.handleClick("CoachesJacket")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("CrewNeckSweat")}
                    src={CrewNeckSweat}
                    onClick={() => this.handleClick("CrewNeckSweat")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("FivePocket")}
                    src={FivePocket}
                    onClick={() => this.handleClick("FivePocket")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("HoodedSweat")}
                    src={HoodedSweat}
                    onClick={() => this.handleClick("HoodedSweat")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("LongSleeveHenley")}
                    src={LongSleeveHenley}
                    onClick={() => this.handleClick("LongSleeveHenley")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("OxfordShirt")}
                    src={OxfordShirt}
                    onClick={() => this.handleClick("OxfordShirt")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("Parka")}
                    src={Parka}
                    onClick={() => this.handleClick("Parka")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("PoloShirt")}
                    src={PoloShirt}
                    onClick={() => this.handleClick("PoloShirt")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("RugbyShirt")}
                    src={RugbyShirt}
                    onClick={() => this.handleClick("RugbyShirt")}/>
                </div>
              </div>
              <div className="clothing-vectors-container">
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("ShortPants")}
                  src={ShortPants}
                  onClick={() => this.handleClick("ShortPants")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("TShirt")}
                  src={TShirt}
                  onClick={() => this.handleClick("TShirt")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("ShortSleeveButton")}
                  src={ShortSleeveButton}
                  onClick={() => this.handleClick("ShortSleeveButton")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("Tote")}
                  src={Tote}
                  onClick={() => this.handleClick("Tote")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("Trench")}
                  src={Trench}
                  onClick={() => this.handleClick("Trench")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("Tracksuit")}
                  src={Tracksuit}
                  onClick={() => this.handleClick("Tracksuit")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("Poncho")}
                  src={Poncho}
                  onClick={() => this.handleClick("Poncho")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("CroppedTrouser")}
                  src={CroppedTrouser}
                  onClick={() => this.handleClick("CroppedTrouser")}/>
              </div>
              <div className= "clothing-vector-unit">
                <Image
                  className={this.isClicked("Blazer")}
                  src={Blazer}
                  onClick={() => this.handleClick("Blazer")}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectOutput;
