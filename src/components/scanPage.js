import React from 'react';
import Webcam from "react-webcam";
import './style/selectPage.css'


class SelectPage extends React.Component{
  render(){
    let material = this.props.match.params.material;
    return(
    <div className="d-flex justify-content-center">
      <Webcam />;
    </div>
    );
  }
}

export default SelectPage;
