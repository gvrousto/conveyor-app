import React from 'react';
import ReactPlayer from 'react-player';
import OutputPage from './outputPage';
import './style/loadPage.css'
import axios from 'axios';

// <ReactPlayer height={650} url='https://youtu.be/N5wPLwDtzbI?start=225' playing />


class LoadPage extends React.Component{

  constructor(props){
    super(props);
    this.getShopifyDataByTags = this.getShopifyDataByTags.bind(this);
    this.state = {
      progress: 10,
      shopifyProduct: undefined,
      shopifyCalled: true
    }
  }

  componentDidMount(){
    setTimeout(() => {
      console.log("done");
      this.getShopifyDataByTags()
    }, 500);
  }

  getShopifyDataByTags(){
    let material = this.props.match.params.material;
    // let material = "Baseball gloves"
    let size = this.props.match.params.size;
    let vector = this.props.match.params.vector;
    // let vector = "Parka"
    const url = "https://jamestudio.myshopify.com/api/graphql"
    let materialTagQuery = "tag:" + material
    let vectorTagQuery = "tag:" + vector;
    axios({
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'X-Shopify-Storefront-Access-Token': "91000908be9293edff27f80b7ca3e387"
        },
        method: 'post',
        data: {
          query: `
          {
            products(first: 3, query:"${vectorTagQuery} AND ${materialTagQuery}") {
              edges {
                node {
                  id
                  availableForSale
                  onlineStoreUrl
                  title
                  tags
                  images(first:1){
                    edges{
                      node{
                        originalSrc
                        id
                      }
                    }
                  }
                }
              }
            }
          }
          `
        },
        url: url
      }).then(result => {
        console.log(result.data.data);
        this.setState({
          shopifyProduct: result.data.data.products.edges[0].node
        });
      }).catch(error => {
        console.log(error)
      })
    }

  render(){
    let material = this.props.match.params.material;
    let size = this.props.match.params.size;
    let vector = this.props.match.params.vector;
    if(this.state.shopifyCalled === false){
      return(
        <div className="d-flex justify-content-center align-items-center main-container">

        </div>
      );
    } else {
      return(
        <OutputPage
          materialName={material}
          size={size}
          vector={vector}
          shopifyProduct={this.state.shopifyProduct}
        />
      );
    }
  }
}

export default LoadPage;
