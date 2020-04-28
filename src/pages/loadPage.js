import React from 'react';
import ReactPlayer from 'react-player';
import OutputPage from './outputPage';
import './style/loadPage.css'
import axios from 'axios';

//           <ReactPlayer height={650} url='https://youtu.be/N5wPLwDtzbI?start=230&end=242' playing />


class LoadPage extends React.Component {

  constructor(props){
    super(props);
    this.getShopifyDataByTags = this.getShopifyDataByTags.bind(this);
    this.state = {
      progress: 10,
      shopifyProduct: undefined,
      shopifyCalled: false,
      shopifySuccess: false,
      value: 0
    }
  }

  componentDidUpdate(){
    let timeoutValue = Math.floor(Math.random() * 300) + 150;
    if(this.state.value <= 90){
      let addedValue = Math.floor(Math.random() * 3) + 1;
      setTimeout(() => {
        let newValue = this.state.value + addedValue;
        this.setState({
          value: newValue
        })
      }, timeoutValue);
    } else if(this.state.shopifyCalled === false){
      this.getShopifyDataByTags();
    }
  }

  componentDidMount(){
    setTimeout(() => {
      let newValue = this.state.value + 7;
      this.setState({
        value: newValue
      })
    }, 3000);
  }

  getShopifyDataByTags(){
    let material = this.props.match.params.material;
    let vector = this.props.match.params.vector;
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
            products(first: 3, query:"${materialTagQuery} AND ${vectorTagQuery}") {
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
          shopifyProduct: result.data.data.products.edges[0].node,
          shopifyCalled: true,
          shopifySuccess: true
        });
      }).catch(error => {
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
                products(first: 3, query:"${vectorTagQuery}") {
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
              shopifyProduct: result.data.data.products.edges[0].node,
              shopifyCalled: true,
              shopifySuccess: false
            });
          }).catch(error => {
            console.log(error)
            this.setState({
              shopifyCalled: true,
              shopifySuccess: false
            });
          });
      });
    }

  render(){
    let material = this.props.match.params.material;
    let size = this.props.match.params.size;
    let vector = this.props.match.params.vector;
    let value = this.state.value;
    if(this.state.shopifyCalled === false){
      return(
        <div className="d-flex flex-column justify-content-center align-items-center main-container">
          <div className="custom-video-container">
            <ReactPlayer height="100%" width="100%" url='https://youtu.be/N5wPLwDtzbI?start=230&end=242' playing />
          </div>
          <progress max={100} value={value}></progress>
        </div>
      );
    } else {
      return(
        <OutputPage
          materialName={material}
          size={size}
          vector={vector}
          shopifyProduct={this.state.shopifyProduct}
          shopifySuccess={this.state.shopifySuccess}
        />
      );
    }
  }
}

export default LoadPage;
