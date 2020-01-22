import React from 'react';
import SelectOutput from './selectOutput'
import RadioButtons from './radioButtons'
import RawMaterials from './rawMaterials'
import Button from 'react-bootstrap/Button'
import './style/selectPage.css'


class SelectPage extends React.Component{
  render(){
    let material = this.props.match.params.material;
    return(
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-around bd-highlight">
        <RawMaterials material={material}/>
        <SelectOutput/>
      </div>
      <div className="d-flex justify-content-around bd-highlight mb-3">
        <RadioButtons/>
        <div className="button-custom-style">
          <Button variant="success" size="lg">Initiate Binding</Button>
        </div>
      </div>
    </div>
    );
  }
}

export default SelectPage;
