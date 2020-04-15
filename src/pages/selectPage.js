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
      size: ''
    }
    this.handleSizeSelection = this.handleSizeSelection.bind(this);
  }

  redirectOnClick(){
    window.location.assign('#/load');
  }

  handleSizeSelection(size){
    this.setState({
        size: size
    });
  }

  render(){
    let material = this.props.match.params.material;
    console.log(this.state.size);
    console.log(this.state.material);
    return(
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-around bd-highlight">
        <div className="rawandradio-container">
          <RawMaterials material={material}/>
          <RadioButtons handleSizeSelection={this.handleSizeSelection}/>
        </div>
        <div className="selectandbutton-container">
          <SelectOutput />
          <div className="button-custom-style">
            <Button variant="success" onClick={this.redirectOnClick} size="lg">Initiate Binding</Button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default SelectPage;
