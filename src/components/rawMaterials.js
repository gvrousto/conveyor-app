import React from 'react';
import Image from 'react-bootstrap/Image';
import Gloves from "../materialImages/baseball_gloves.png";
import CottonLace from "../materialImages/cotton_lace.png";
import FabricSamples from "../materialImages/fabric_samples.png";
import KiddLeatherGloves from "../materialImages/kidd_leather_gloves.png";
import MilitarySurplus from "../materialImages/military_surplus_fabrics.png";
import PileOfJeans from "../materialImages/pile_of_jeans.png";
import './style/rawMaterials.css';


class RawMaterials extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);  
    if(this.props.material==="Gloves"){
      this.state = {
        imageSrc: Gloves,
        imageDescription: 'Baseball Gloves'
      };
    } else if(this.props.material==="CottonLace"){
      this.state = {
        imageSrc: CottonLace,
        imageDescription: 'Cotton Lace'
      };
    } else if(this.props.material==="FabricSamples"){
      this.state = {
        imageSrc: FabricSamples,
        imageDescription: 'Fabric Samples'
      };
    } else if(this.props.material==="MilitarySurplus"){
      this.state = {
        imageSrc: MilitarySurplus,
        imageDescription: 'Military Surplus'
      };
    } else if(this.props.material==="Jeans"){
      this.state = {
        imageSrc: PileOfJeans,
        imageDescription: 'Pile of Jeans'
      };
    } else{
      this.state = {
        imageSrc: KiddLeatherGloves,
        imageDescription: 'Kidd Leather Gloves'
      };
    }
  }

  render() {
    return(
    <div className="raw-materials-container">
      <div className="raw-materials-header">Raw Materials</div>
      <Image src={this.state.imageSrc} width="550px"/>
      <div className="raw-materials-footer">{this.state.imageDescription}</div>
    </div>
  );
  }
}

export default RawMaterials;
