import React from 'react';
import SelectOutput from '../components/selectOutput'
import RadioButtons from '../components/radioButtons'
import RawMaterials from '../components/rawMaterials'
import Button from 'react-bootstrap/Button'

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
      return(<div>Please select size and vector</div>);
    } else {
      return;
    }
  }

  render(){
    let material = this.props.match.params.material;
    let buttonMessage = this.createButtonMessage();
    console.log(this.state.size);
    console.log(this.state.material);
    console.log(buttonMessage);
    return(
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-around bd-highlight">
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
          <div className="button-custom-style">
            { buttonMessage }
            <Button disabled={this.isButtonDisabled()} variant="success" onClick={this.redirectOnClick} size="lg">Initiate Binding</Button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default SelectPage;
