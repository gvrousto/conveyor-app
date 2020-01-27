import React from 'react';
import Image from 'react-bootstrap/Image';
import BaseballGloveParka from "../outputImages/baseball_gloves_parka.png";
import './style/selectPage.css'
import './style/outputPage.css'


class OutputPage extends React.Component{

  constructor(props){
    super(props);
    console.log(this.props);
    if(this.props.material==="BaseballGloveParka"){
      this.state = {
        imageSrc: BaseballGloveParka,
        imageDescription: 'Baseball Gloves'
      };
    } else if(this.props.material==="CottonLace"){
      this.state = {
        imageSrc: '',
        imageDescription: 'Cotton Lace'
      };
    } else{
      this.state = {
        imageSrc: BaseballGloveParka
      };
    }
  }

  render(){
    let material = this.props.match.params.material;
    let size = this.props.match.params.size;
    let vector = this.props.match.params.vector;
    let status = " COMPLETE";
    return(
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-around bd-highlight">
        <div className="clothing-attribute-container">
          <div className="attribute">
            Raw Material: {material}
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
