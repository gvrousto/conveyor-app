import React from 'react';
import SelectOutput from '../components/selectOutput'
import RadioButtons from '../components/radioButtons'
import RawMaterials from '../components/rawMaterials'
import Button from 'react-bootstrap/Button'
import './style/selectPage.css'


class SelectPage extends React.Component{
  render(){
    let material = this.props.match.params.material;
    return(
    <div className="d-flex flex-column">
      <div className="d-flex justify-content-around bd-highlight">
        <div className="rawandradio-container">
          <RawMaterials material={material}/>
          <RadioButtons/>
        </div>
        <div className="selectandbutton-container">
          <SelectOutput/>
          <div className="button-custom-style">
            <Button variant="success" size="lg">Initiate Binding</Button>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default SelectPage;
