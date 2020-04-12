import React from 'react';
import {Line} from 'react-shapes';
import Webcam from "react-webcam";
import {Button} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import Sound from 'react-sound';
import './style/scanPage.css'


class ScanPage extends React.Component{
  render(){
    return(
    <div className="d-flex flex-column justify-content-center webcam-container">
      <Sound/>
      <div className="d-flex justify-content-center webcam-header">
        Input Materials
      </div>
      <div className="d-flex justify-content-center">
        <div className="d-flex justify-content-center align-items-center shapes-container">
          <ReactPlayer height={650} className="d-flex webcam-header" url='https://youtu.be/Xlasn8_mrwQ?start=207&end=208' playing />
          <div className="stacked-div lines-container">
            <div className="stacked-div">
              <Line x1={0} x2={110} y1={10} y2={10} stroke={{color:'#E65243'}} strokeWidth={20} />
            </div>
            <div className="stacked-div">
              <Line x1={10} x2={10} y1={0} y2={100} stroke={{color:'#E65243'}} strokeWidth={20} />
            </div>
            <div className="stacked-div">
              <Line x1={260} x2={370} y1={10} y2={10} stroke={{color:'#E65243'}} strokeWidth={20} />
            </div>
            <div className="stacked-div">
              <Line x1={370} x2={370} y1={0} y2={100} stroke={{color:'#E65243'}} strokeWidth={20} />
            </div>
            <div className="stacked-div">
              <Line x1={0} x2={110} y1={240} y2={240} stroke={{color:'#E65243'}} strokeWidth={20} />
            </div>
            <div className="stacked-div">
              <Line x1={10} x2={10} y1={140} y2={240} stroke={{color:'#E65243'}} strokeWidth={20} />
            </div>
            <div className="stacked-div">
              <Line x1={260} x2={370} y1={240} y2={240} stroke={{color:'#E65243'}} strokeWidth={20} />
            </div>
            <div className="stacked-div">
              <Line x1={370} x2={370} y1={150} y2={250} stroke={{color:'#E65243'}} strokeWidth={20} />
            </div>
          </div>
          <div className="stacked-div">
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

export default ScanPage;
