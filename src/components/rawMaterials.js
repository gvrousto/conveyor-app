import React from 'react';
import Image from 'react-bootstrap/Image';
import Gloves from "../baseball gloves.png";
import './style/rawMaterials.css';


class RawMaterials extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      example: ''
    };
  }

  render() {
    return(
    <div className="raw-materials-container">
      <div class="raw-materials-header">Select Raw Materials</div>
      <Image src={Gloves} width="550px"/>
      <div className="raw-materials-footer">Baseball Gloves</div>
    </div>
  );
  }
}

export default RawMaterials;
