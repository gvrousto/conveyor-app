import React from 'react';
import {Line} from 'react-shapes';
import { Button } from 'react-bootstrap';
import ReactPlayer from 'react-player';
import {Link} from 'react-router-dom';
import './style/scanPage.css'


class ScanPage extends React.Component{
  render(){
    //const isMobile = useMediaQuery({ query: '(max-width: 425px)' });
    // let height = "800";
    // let width = "600";
    // if(isMobile){
    //   height = "200";
    //   width = "100";
    // }
    return(
      <div className="scan-page-container">
        <div className="scan-header">
          Input Materials
        </div>
        <div className="scan-container">
          <div className="shapes-container">
            <ReactPlayer  className="video-container" url='https://youtu.be/Xlasn8_mrwQ?start=207&end=241' playing />
          </div>
        </div>
      </div>
    );
  }
}

// <div className="d-flex flex-column justify-content-center webcam-container">
//   <div className="d-flex justify-content-center webcam-header">
//     Input Materials
//   </div>
//   <div className="d-flex justify-content-center">
//     <div className="d-flex justify-content-center align-items-center shapes-container">
//       <ReactPlayer height={650} url='https://youtu.be/Xlasn8_mrwQ?start=207&end=241' playing />
//       <div className="stacked-div lines-container">
//         <div className="stacked-div">
//           <Line x1={0} x2={110} y1={10} y2={10} stroke={{color:'#E65243'}} strokeWidth={20} />
//         </div>
//         <div className="stacked-div">
//           <Line x1={10} x2={10} y1={0} y2={100} stroke={{color:'#E65243'}} strokeWidth={20} />
//         </div>
//         <div className="stacked-div">
//           <Line x1={260} x2={360} y1={10} y2={10} stroke={{color:'#E65243'}} strokeWidth={20} />
//         </div>
//         <div className="stacked-div">
//           <Line x1={360} x2={360} y1={0} y2={100} stroke={{color:'#E65243'}} strokeWidth={20} />
//         </div>
//         <div className="stacked-div">
//           <Line x1={0} x2={110} y1={240} y2={240} stroke={{color:'#E65243'}} strokeWidth={20} />
//         </div>
//         <div className="stacked-div">
//           <Line x1={10} x2={10} y1={140} y2={240} stroke={{color:'#E65243'}} strokeWidth={20} />
//         </div>
//         <div className="stacked-div">
//           <Line x1={260} x2={360} y1={240} y2={240} stroke={{color:'#E65243'}} strokeWidth={20} />
//         </div>
//         <div className="stacked-div">
//           <Line x1={360} x2={360} y1={150} y2={250} stroke={{color:'#E65243'}} strokeWidth={20} />
//         </div>
//       </div>
//       <div className="stacked-div">
//       <Link to="/material">
//         <Button className="button-text" variant="danger" size="lg">
//           Visit Collection
//         </Button>
//       </Link>

export default ScanPage;
