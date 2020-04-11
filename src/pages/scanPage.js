import React from 'react';
import {Line} from 'react-shapes';
import Webcam from "react-webcam";
import {Button} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import './style/scanPage.css'


class SelectPage extends React.Component{
  render(){
    return(
    <div className="d-flex flex-column justify-content-center webcam-container">
      <div className="d-flex justify-content-center webcam-header">Input Materials</div>
      <div className="d-flex justify-content-center">
        <ReactPlayer height={550} className="d-flex webcam-header" url='https://www.youtube.com/watch?v=ysz5S6PUM-U' playing />
        <div className="stacked-div shapes-container">
          <div className="stacked-div">
            <Line x1={90} x2={200} y1={150} y2={150} stroke={{color:'#E65243'}} strokeWidth={20} />
          </div>
          <div className="stacked-div">
            <Line x1={100} x2={100} y1={150} y2={250} stroke={{color:'#E65243'}} strokeWidth={20} />
          </div>
          <div className="stacked-div">
            <Line x1={365} x2={461} y1={150} y2={150} stroke={{color:'#E65243'}} strokeWidth={20} />
          </div>
          <div className="stacked-div">
            <Line x1={450} x2={450} y1={150} y2={250} stroke={{color:'#E65243'}} strokeWidth={20} />
          </div>
          <div className="stacked-div">
            <Line x1={90} x2={200} y1={400} y2={400} stroke={{color:'#E65243'}} strokeWidth={20} />
          </div>
          <div className="stacked-div">
            <Line x1={100} x2={100} y1={300} y2={400} stroke={{color:'#E65243'}} strokeWidth={20} />
          </div>
          <div className="stacked-div">
            <Line x1={350} x2={461} y1={400} y2={400} stroke={{color:'#E65243'}} strokeWidth={20} />
          </div>
          <div className="stacked-div">
            <Line x1={450} x2={450} y1={300} y2={400} stroke={{color:'#E65243'}} strokeWidth={20} />
          </div>
          <div className="d-flex stacked-div shapes-container justify-content-center align-items-center">
            <Button className="button-text" href="#/select/Gloves" variant="danger" size="lg">
              Visit Collection
            </Button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default SelectPage;
