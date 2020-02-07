import React from 'react';

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
      if (this.state.progress<=100){
        if (this.state.progress>10) {
          console.log(this.state.progress);
        }
        let newState = {
          progress: this.state.progress + 1
        }
        this.setState(newState);
      }
      else {
      }
    },600);
  }

  render(){
    return(
      <div className="d-flex justify-content-center align-items-center main-container">
        <div className="progressbar-container">
        <div id="bar_container">
          <div style={{width: this.state.progress + '%'}} id="progress_bar">
          <div id="progress_percentage">
            {this.state.progress}%
          </div>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoadPage;
