import React from 'react';
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
import MaterialListGroup from '../components/materialListGroup';
import './style/selectMaterial.css'

export default class SelectMaterial extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      material: ''
    }
    this.selectMaterial = this.selectMaterial.bind(this);
  }

  selectMaterial(material){
    this.setState({
      material: material
    });
  }

  render(){
    console.log(this.state.material);
    let redirectPath = "/select/"+this.state.material;
    return(
      <div className="select-material-container">
        <div className="select-material-header">
          Materials Library
        </div>
        <MaterialListGroup material={this.state.material}selectMaterial={this.selectMaterial}/>
        <div className="material-button-container">
          <Link to={redirectPath}>
            <div className="select-material-button">
              <Button size="lg" variant="success">Proceed</Button>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
