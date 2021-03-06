import React from 'react';
import './style/outputPage.css'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
import './style/selectPage.css'


function isClicked(currentStatus){
  if(currentStatus === true){
    return "status-attribute"
  } else {
    return "status-attribute-unavailable"
  }
}

class OutputPage extends React.Component{

  render(){
    let materialName = this.props.materialName;
    let size = this.props.size;
    let vector = this.props.vector;
    let status = "AVAILABLE";
    let statusIndicator = false;
    let clothingRedirect = "https://jamestudio.myshopify.com/collections/all";
    let shopifyProductImage = ""
    if(this.props.shopifyProduct){
      console.log(this.props.shopifyProduct);
      shopifyProductImage=this.props.shopifyProduct.images.edges[0].node.originalSrc;
      clothingRedirect = this.props.shopifyProduct.onlineStoreUrl;
      statusIndicator = this.props.shopifyProduct.availableForSale;
    }

    if(statusIndicator === false){
      status = "UNAVAILABLE"
    }

    return(
      <div >
        <div className="d-flex justify-content-center bd-highlight">
          <div className="clothing-attribute-container">
            <div className="attribute">
              Raw Material: {materialName}
            </div>
            <div className="attribute">
              Silouette: {vector}
            </div>
            <div className="attribute">
              Size: {size}
            </div>
            <div className="d-flex flex-start justify-row attribute">
            <div>
              Status:
            </div>
            <div className={isClicked(statusIndicator)}>
              {status}
            </div>
            </div>
          </div>
          <div className="output-image-container">
            <div className="output-image">
              <Image
                className="output-image"
                src={shopifyProductImage}
                alt="Unable to find Shopify Image"
              />
            </div>
            <div className="collection-button-container">
              <a href={clothingRedirect}>
                <Button variant="success" className="output-button-style">
                  <div className="collection-button-text">
                    Purchase
                  </div>
                </Button>
              </a>
            </div>
            <div className="collection-button-container">
              <a href="https://jamestudio.myshopify.com/collections/all">
                <Button>
                  <div className="collection-button-text">
                    View Full Stock
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default OutputPage;
