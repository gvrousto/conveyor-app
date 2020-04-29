import React from 'react';
import {Line} from 'react-shapes';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import YouTube from 'react-youtube';
import {Link} from 'react-router-dom';
import './style/scanPage.css'

class ScanPage extends React.Component{

  render(){
    const opts = {
      height: "100%",
      width: "100%",
      playerVars: {
        autoplay: 1,
        mute: 1
      }
    };
    return(
      <div className="scan-page-container">
        <div className="scan-header">
          Input Materials
        </div>
        <div className="scan-container">
          <div className="shapes-container">
            <YouTube containerClassName="video-container" videoId="N5wPLwDtzbI" opts={opts}/>
            <div className="stacked-div lines-container">
              <div className="stacked-div">
                <Line x1={0} x2={110} y1={10} y2={10} stroke={{color:'#E65243'}} strokeWidth={20} />
              </div>
              <div className="stacked-div">
                <Line x1={10} x2={10} y1={0} y2={100} stroke={{color:'#E65243'}} strokeWidth={20} />
              </div>
              <div className="stacked-div">
                <Line x1={210} x2={310} y1={10} y2={10} stroke={{color:'#E65243'}} strokeWidth={20} />
              </div>
              <div className="stacked-div">
                <Line x1={310} x2={310} y1={0} y2={100} stroke={{color:'#E65243'}} strokeWidth={20} />
              </div>
              <div className="stacked-div">
                <Line x1={0} x2={110} y1={230} y2={230} stroke={{color:'#E65243'}} strokeWidth={20} />
              </div>
              <div className="stacked-div">
                <Line x1={10} x2={10} y1={140} y2={230} stroke={{color:'#E65243'}} strokeWidth={20} />
              </div>
              <div className="stacked-div">
                <Line x1={210} x2={310} y1={230} y2={230} stroke={{color:'#E65243'}} strokeWidth={20} />
              </div>
              <div className="stacked-div">
                <Line x1={310} x2={310} y1={150} y2={240} stroke={{color:'#E65243'}} strokeWidth={20} />
              </div>
            </div>
            <div className="stacked-div">
              <Link to="/material">
                <Button className="button-text" variant="danger" size="lg">
                  Visit Collection
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ScanPage;
