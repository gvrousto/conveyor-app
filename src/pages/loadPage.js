import React from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar'

import './style/loadPage.css'

class LoadPage extends React.Component{

  constructor(props){
    super(props);

    this.state={
      progress: 10
    }
  }

  componentDidMount(){
    setInterval( () => {
      let newState = {
        progress: this.state.progress + Math.round(Math.random() * 10)
      }
      this.setState(newState)
    }, 700);
  }

  render(){
    return(
      <div className="d-flex justify-content-center align-items-center main-container">
        <div className="progressbar-container">
          <ProgressBar now={this.state.progress} />
          <ProgressBar now={this.state.progress} />
          <ProgressBar now={this.state.progress} />
        </div>
      </div>
    );
  }
}

export default LoadPage;
