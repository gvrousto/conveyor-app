import React from 'react';
import ReactPlayer from 'react-player';
import './style/loadPage.css'







class LoadPage extends React.Component{

  constructor(props){
    super(props);
    this.getShopifyDataByTags = this.getShopifyDataByTags.bind(this);
    this.state={
      progress: 10
    }
  }

  componentDidMount(){
    setTimeout(() => {
      window.location.assign(`#/output/asdf/asdf/asdf/asdf`);
    }, 9000);
  }

  getShopifyDataByTags(){
    let material = this.props.match.params.material;
    let size = this.props.match.params.size;
    let vector = this.props.match.params.vector;
    //call here
  }

  // OLD CODE FROM componentDidMount
  // setInterval( () => {
  //   if (this.state.progress<=100){
  //     if (this.state.progress>10) {
  //       console.log(this.state.progress);
  //     }
  //     let newState = {
  //       progress: this.state.progress + 100
  //     }
  //     this.setState(newState);
  //   }
  //   else {
  //   }
  // },600);

  // OLD CODE FROM MOVIE FOR LOADING BAR
  // <div className="progressbar-container">
  // <div id="bar_container">
  //   <div style={{width: this.state.progress + '%'}} id="progress_bar">
  //   <div id="progress_percentage">
  //     {this.state.progress}%
  //   </div>
  //   </div>
  //   </div>
  // </div>

  render(){
    console.log(this.props.match.params);
    return(
      <div className="d-flex justify-content-center align-items-center main-container">
        <ReactPlayer height={650} url='https://youtu.be/Xlasn8_mrwQ?start=262&end=270' playing />
      </div>
    );
  }
}

export default LoadPage;
