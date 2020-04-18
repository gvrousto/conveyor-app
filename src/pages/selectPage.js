import React from 'react';
import SelectOutput from '../components/selectOutput'
import RadioButtons from '../components/radioButtons'
import RawMaterials from '../components/rawMaterials'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';


import './style/selectPage.css'


class SelectPage extends React.Component{

  constructor(props){
    super(props);
    this.state={
      material: props.match.params.material,
      size: '',
      vectorClicked: '',
      buttonDisabled: true
    }
    this.handleSizeSelection = this.handleSizeSelection.bind(this);
    this.handleVectorClicked = this.handleVectorClicked.bind(this);
    this.redirectOnClick = this.redirectOnClick.bind(this);
  }

  redirectOnClick(){
    window.location.assign(`#/load/${this.state.material}/${this.state.vectorClicked}/${this.state.size}`);
  }

  handleSizeSelection(size){
    this.setState({
        size: size
    });
  }

  handleVectorClicked(vectorClicked){
    this.setState({
      vectorClicked: vectorClicked
    });
  }

  isButtonDisabled(){
    return this.state.vectorClicked === '' || this.state.size === '';
  }

  createButtonMessage(){
    if(this.isButtonDisabled()){
      return(<div className="button-header">Please select size and vector</div>);
    } else {
      return;
    }
  }

  render(){
    let material = this.props.match.params.material;
    let buttonMessage = this.createButtonMessage();

    let path = `/load/${this.state.material}/${this.state.vectorClicked}/${this.state.size}`;
    return(
    <div className="d-flex justify-content-around">
      <div className="d-flex">
        <div className="rawandradio-container">
          <RawMaterials
            material={material}
            />
          <RadioButtons
            handleSizeSelection={this.handleSizeSelection}
            />
        </div>
        <div className="selectandbutton-container">
          <SelectOutput
            handleVectorClicked={this.handleVectorClicked}
            vectorClicked={this.state.vectorClicked}
            />
          <div className="button-container">
            { buttonMessage }
            <Link to={path}>
              <Button className="button-custom-style" disabled={this.isButtonDisabled()} variant="success" onClick={this.redirectOnClick} >
                  <div className="button-text">
                    Initiate Binding
                  </div>
              </Button>
            </Link>
        </div>
        </div>
      </div>
    </div>
    );
  }
}

export default SelectPage;
