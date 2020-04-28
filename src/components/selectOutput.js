import React from 'react';
import Image from 'react-bootstrap/Image';

import Balaclava from "../vectors/balaclava.png";
import Base_Layer_Tee from "../vectors/base layer tee.png";
import Bucket_Hat from "../vectors/bucket hat.png";
import Carpenter_Pants from "../vectors/carpenter pants.png";
import Glove_Tee from "../vectors/glove tee.png";
import Mock_Neck_Sweater from "../vectors/mock neck sweater.png";
import Mock_Neck_Tee from "../vectors/mock neck tee.png";
import Parka from "../vectors/N3-B Parka.png";
import Patchwork_Pants from "../vectors/patchwork pants.png";
import Pocket_Pants from "../vectors/pocket pants.png";
import Poncho from "../vectors/poncho.png";
import Quarter_Zip from "../vectors/quarter zip.png";
import Shirt_Jacket from "../vectors/shirt jacket.png";
import Shopper_Bag from "../vectors/shopper bag.png";
import Short_Sleeve_Work_Shirt from "../vectors/short sleeve work shirt.png";
import Side_Bag from "../vectors/side bag.png";
import Workspace_Tote from "../vectors/workspace tote.png";

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
                    className={this.isClicked("balaclava")}
                    src={Balaclava}
                    onClick={() => this.handleClick("balaclava")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("base layer tee")}
                    src={Base_Layer_Tee}
                    onClick={() => this.handleClick("base layer tee")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("bucket hat")}
                    src={Bucket_Hat}
                    onClick={() => this.handleClick("bucket hat")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("carpenter pants")}
                    src={Carpenter_Pants}
                    onClick={() => this.handleClick("carpenter pants")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("glove tee")}
                    src={Glove_Tee}
                    onClick={() => this.handleClick("glove tee")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("mock neck sweater")}
                    src={Mock_Neck_Sweater}
                    onClick={() => this.handleClick("mock neck sweater")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("mock neck tee")}
                    src={Mock_Neck_Tee}
                    onClick={() => this.handleClick("mock neck tee")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("patchwork pants")}
                    src={Patchwork_Pants}
                    onClick={() => this.handleClick("patchwork pants")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("quarter zip")}
                    src={Quarter_Zip}
                    onClick={() => this.handleClick("quarter zip")}/>
                </div>
              </div>
              <div className="clothing-vectors-container">
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("N3-B Parka")}
                    src={Parka}
                    onClick={() => this.handleClick("N3-B Parka")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("workspace tote")}
                    src={Workspace_Tote}
                    onClick={() => this.handleClick("workspace tote")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("side bag")}
                    src={Side_Bag}
                    onClick={() => this.handleClick("side bag")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("short sleeve work shirt")}
                    src={Short_Sleeve_Work_Shirt}
                    onClick={() => this.handleClick("short sleeve work shirt")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("shopper bag")}
                    src={Shopper_Bag}
                    onClick={() => this.handleClick("shopper bag")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("shirt jacket")}
                    src={Shirt_Jacket}
                    onClick={() => this.handleClick("shirt jacket")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("poncho")}
                    src={Poncho}
                    onClick={() => this.handleClick("poncho")}/>
                </div>
                <div className= "clothing-vector-unit">
                  <Image
                    className={this.isClicked("pocket pants")}
                    src={Pocket_Pants}
                    onClick={() => this.handleClick("pocket pants")}/>
                </div>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SelectOutput;
