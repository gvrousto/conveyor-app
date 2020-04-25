import React from 'react';
import { Image } from 'react-bootstrap'
import './style/materialListGroup.css';
import Gloves from "../materialIcons/BaseballGloves.JPG";
import Cotton from "../materialIcons/cotton.png";
import Denim from "../materialIcons/Denim.jpg";
import Lace from "../materialIcons/lace.jpg";
import MilitarySurplus from "../materialIcons/MilitarySurplus.jpg";
import Upholstery from "../materialIcons/Upholstery.jpg";
import VictorianGloves from "../materialIcons/VictorianGloves.jpg";
import Yarn from "../materialIcons/yarn.jpg";


const columnContents =
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

function isClicked(targetMaterial, currentMaterial){
  if(targetMaterial === currentMaterial){
    console.log("here");
    return "row-container-clicked"
  } else {
    return "row-container"
  }
}

export default function MaterialListGroup(props){

  let materialTableRows = columnContents.map(({material, imageSrc})=>{
    return(
      <tr className="table-container noselect" onClick={()=>props.selectMaterial(material)}>
        <div className={isClicked(props.material, material)} key={material}>
          <Image className="row-image" src={imageSrc} />
          <div className="row-material">
            {material}
          </div>
        </div>
      </tr>
    )
  });

  return(
    <table className="table table-hover">
      <tbody>
        { materialTableRows }
      </tbody>
    </table>
  );
}
