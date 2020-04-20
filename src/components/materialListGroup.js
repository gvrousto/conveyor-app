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


export default function MaterialListGroup(props){
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
        material: 'Baseball Gloves',
        imageSrc: Cotton
      },
      {
        material: 'Lace',
        imageSrc: Denim
      },
      {
        material: 'Baseball Gloves',
        imageSrc: MilitarySurplus
      },
      {
        material: 'Lace',
        imageSrc: Upholstery
      },
      {
        material: 'Baseball Gloves',
        imageSrc: VictorianGloves
      },
      {
        material: 'Lace',
        imageSrc: Yarn
      }
    ];

  let materialTableRows = columnContents.map(({material, imageSrc})=>{
    console.log(imageSrc);
    return(
      <tr onClick={()=>props.selectMaterial(material)}>
        <td className="row-container" key={material}>
          <Image className="row-image" src={imageSrc} />
          <div className="row-material">
            {material}
          </div>
        </td>
      </tr>
    )
  });

  console.log(materialTableRows);
  return(
    <table className="table table-hover">
      <tbody>
        { materialTableRows }
      </tbody>
    </table>
  );
}

// <tr>
//   {columnContents.map(({ field, label }) => (
//     <td onClick={()=>props.selectMaterial(label)} key={field}>{label}</td>
//   ))}
// </tr>
