import React from 'react';
import ReactPlayer from 'react-player';
import './style/loadPage.css'

class LoadPage extends React.Component{

  constructor(props){
    super(props);
    this.getShopifyDataByTags = this.getShopifyDataByTags.bind(this);
    this.state = {
      progress: 10,
      shopifyData: ["no"],
      shopifyCalled: false
    }
  }

  componentDidMount(){
    setTimeout(() => {
      console.log("done");
      this.setState({
        progress: 10,
        shopifyData: ["bitch"],
        shopifyCalled: true
      });
    }, 9000);
  }

  getShopifyDataByTags(){
    let material = this.props.match.params.material;
    let size = this.props.match.params.size;
    let vector = this.props.match.params.vector;
    //call here
  }

  render(){
    console.log(this.state.shopifyData);
    if(this.state.shopifyCalled === false){
      return(
        <div className="d-flex justify-content-center align-items-center main-container">
          <ReactPlayer height={650} url='https://youtu.be/Xlasn8_mrwQ?start=262&end=270' playing />
        </div>
      );
    } else {
      return(
        <div>
          returned after the data is gotten
        </div>
      );
    }
  }
}

export default LoadPage;
