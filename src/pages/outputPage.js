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
    console.log(this.props.match.params.material);
    if(this.props.match.params.material==="Gloves"){
      this.state = {
        imageSrc: BaseballGloveParka
      };
    } else if(this.props.match.params.material==="FabricSamples"){
      this.state = {
        imageSrc: FabricSamples
      };
    } else if(this.props.match.params.material==="MilitarySurplus"){
      this.state = {
        imageSrc: MilitarySurplus
      };
    } else if(this.props.match.params.material==="Jeans"){
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
    let materialName = this.props.match.params.materialName;
    let size = this.props.match.params.size;
    let vector = this.props.match.params.vector;
    let status = " COMPLETE";
    return(
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-center bd-highlight">
        <div className="clothing-attribute-container">
          <div className="attribute">
            Raw Material: {materialName}
          </div>
          <div className="attribute">
            Vector Selection: {vector}
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
