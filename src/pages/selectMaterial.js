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

  isButtonDisabled(){
    if(this.state.material === ''){
      return true;
    } else {
      return false;
    }
  }

  selectMaterial(material){
    this.setState({
      material: material
    });
  }

  createButtonMessage(){
    if(this.isButtonDisabled()){
      return(<div className="button-header noselect">Please select a material</div>);
    } else {
      return(<div className="button-header"></div>);
    }
  }

  render(){
    console.log(this.state.material);
    let buttonMessage = this.createButtonMessage();
    let redirectPath = "/select/"+this.state.material;
    return(
      <div className="select-material-container">
        <div className="select-material-header">
          Materials Library
        </div>
        <MaterialListGroup material={this.state.material}selectMaterial={this.selectMaterial}/>
        <div className="material-button-container">
          <div className="button-and-header">
            { buttonMessage }
            <Link to={redirectPath}>
              <div>
                <Button size="lg" disabled={this.isButtonDisabled()} variant="success">Proceed</Button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
