import React from 'react';
import Image from 'react-bootstrap/Image';
import BaseballGloveParka from "../outputImages/baseball_gloves_parka.png";
import FabricSamples from "../outputImages/fabric_samples_poncho.png";
import KiddLeatherGloves from "../outputImages/Kidd_leather_gloves_tote_bag.png";
import MilitarySurplus from "../outputImages/military_surplus_shirts.png";
import PileOfJeans from "../outputImages/Pile-of-jeans_coaches_jacket.png";
import './style/selectPage.css'
import './style/outputPage.css'


class OutputPage extends React.Component{

  constructor(props){
    super(props);
    if(this.props.materialName==="Gloves"){
      this.state = {
        imageSrc: BaseballGloveParka
      };
    } else if(this.props.materialName==="FabricSamples"){
      this.state = {
        imageSrc: FabricSamples
      };
    } else if(this.props.materialName==="MilitarySurplus"){
      this.state = {
        imageSrc: MilitarySurplus
      };
    } else if(this.props.materialName==="Jeans"){
      this.state = {
        imageSrc: PileOfJeans
      };
    } else{
      this.state = {
        imageSrc: KiddLeatherGloves
      };
    }
  }

  render(){
    let materialName = this.props.materialName;
    let size = this.props.size;
    let vector = this.props.vector;
    let status = "AVAILABLE";
    return(
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center bd-highlight">
        <div className="clothing-attribute-container">
          <div className="attribute">
            Raw Material: {materialName}
          </div>
          <div className="attribute">
            Silouette: {vector}
          </div>
          <div className="attribute">
            Size: {size}
          </div>
          <div className="d-flex flex-start justify-row attribute">
          <div className="">
            Status:
          </div>
          <div className="status-attribute">
            {status}
          </div>
          </div>
        </div>
        <div className="output-image-container">
          <Image src={this.state.imageSrc} width="800px"/>
        </div>
      </div>
    </div>
    );
  }
}

export default OutputPage;
