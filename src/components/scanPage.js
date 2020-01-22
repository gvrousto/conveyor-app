import React from 'react';
import {Line} from 'react-shapes';
import Webcam from "react-webcam";
import './style/scanPage.css'


class SelectPage extends React.Component{
  render(){
    let material = this.props.match.params.material;
    return(
    <div className="d-flex flex-column justify-content-center webcam-container">
      <div className="d-flex justify-content-center webcam-header">Input Materials</div>
      <div className="d-flex justify-content-center">
        <Webcam className="d-flex webcam-header" height={800}/>
        <div className="stacked-div shapes-container">
          <div className="stacked-div">
            <Line x1={50} x2={300} y1={200} y2={200} stroke={{color:'#E65243'}} strokeWidth={30} />
          </div>
          <div className="stacked-div">
            <Line x1={65} x2={65} y1={200} y2={350} stroke={{color:'#E65243'}} strokeWidth={30} />
          </div>
          <div className="stacked-div">
            <Line x1={750} x2={500} y1={200} y2={200} stroke={{color:'#E65243'}} strokeWidth={30} />
          </div>
          <div className="stacked-div">
            <Line x1={735} x2={735} y1={200} y2={350} stroke={{color:'#E65243'}} strokeWidth={30} />
          </div>
          <div className="stacked-div">
            <Line x1={50} x2={300} y1={600} y2={600} stroke={{color:'#E65243'}} strokeWidth={30} />
          </div>
          <div className="stacked-div">
            <Line x1={65} x2={65} y1={450} y2={600} stroke={{color:'#E65243'}} strokeWidth={30} />
          </div>
          <div className="stacked-div">
            <Line x1={750} x2={500} y1={600} y2={600} stroke={{color:'#E65243'}} strokeWidth={30} />
          </div>
          <div className="stacked-div">
            <Line x1={735} x2={735} y1={450} y2={600} stroke={{color:'#E65243'}} strokeWidth={30} />
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default SelectPage;
