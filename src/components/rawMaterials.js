import React from 'react';
import Image from 'react-bootstrap/Image';
import Gloves from "../materialIcons/BaseballGloves.JPG";
import Cotton from "../materialIcons/cotton.png";
import Denim from "../materialIcons/Denim.jpg";
import Lace from "../materialIcons/lace.jpg";
import MilitarySurplus from "../materialIcons/MilitarySurplus.jpg";
import Upholstery from "../materialIcons/Upholstery.jpg";
import VictorianGloves from "../materialIcons/VictorianGloves.jpg";
import Yarn from "../materialIcons/yarn.jpg";
import './style/rawMaterials.css';

const materialList =
  [
    {
      material: 'Baseball Gloves',
      imageSrc: Gloves
    },
    {
      material: 'Lace',
      imageSrc: Lace
    },
    {
      material: 'Cotton',
      imageSrc: Cotton
    },
    {
      material: 'Denim',
      imageSrc: Denim
    },
    {
      material: 'Military Surplus Canvas',
      imageSrc: MilitarySurplus
    },
    {
      material: 'Upholstery Samples',
      imageSrc: Upholstery
    },
    {
      material: 'Victorian Gloves',
      imageSrc: VictorianGloves
    },
    {
      material: 'Yarn',
      imageSrc: Yarn
    }
  ];


class RawMaterials extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);

    let selectedMaterial = materialList.filter(material=> {
      return this.props.material===material.material;
    });

    this.state = {
      imageSrc: selectedMaterial[0].imageSrc,
      imageDescription: selectedMaterial[0].material
    }

  }

  render() {
    return(
    <div className="raw-materials-container">
      <div className="raw-materials-header">Raw Materials</div>
      <Image className="raw-materials-image" src={this.state.imageSrc} />
      <div className="raw-materials-footer">{this.state.imageDescription}</div>
    </div>
  );
  }
}

export default RawMaterials;
