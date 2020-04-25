import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button'
import './style/selectPage.css'
import './style/outputPage.css'


class OutputPage extends React.Component{

  render(){
    let materialName = this.props.materialName;
    let size = this.props.size;
    let vector = this.props.vector;
    let status = "AVAILABLE";
    let shopifyProductImage = ""
    if(this.props.shopifyProduct){
      shopifyProductImage=this.props.shopifyProduct.images.edges[0].node.originalSrc;
    }

    return(
      <div >
        <div className="d-flex justify-content-around bd-highlight">
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
            <div className="">
              Status:
            </div>
            <div className="status-attribute">
              {status}
            </div>
            </div>
            <div className="attribute checkout-button-container">
              <Button variant="success" className="output-button-style">
                Cop
              </Button>
            </div>
          </div>
          <div className="output-image-container">
            <Image
              className="output-image"
              src={shopifyProductImage}
              alt="Unable to find Shopify Image"
            />
          </div>
        </div>
        <div className="collection-button-container">
          <Button className="output-button-style">
            Other stuff
          </Button>
        </div>
      </div>
    );
  }
}

export default OutputPage;
