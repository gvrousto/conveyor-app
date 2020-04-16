import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
import MaterialListGroup from '../components/materialTable';
import './style/selectMaterial.css'

function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

export default class SelectMaterial extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      material: ''
    }
    this.selectMaterial = this.selectMaterial.bind(this);
  }

  redirectOnClick(){
    window.location.assign(`#/select/Jeans`);
  }

  selectMaterial(material){
    console.log("HI CALVIN");
    // this.setState({
    //   material: material
    // });
  }

  render(){
    return(
      <div className="select-material-container">
        <div className="select-material-header-container">
          Materials Library
        </div>
        <MaterialListGroup selectMaterial={this.selectMaterial}/>
        <Link to="/select/Jeans">
          <Button>Proceed</Button>
        </Link>
      </div>
    );
  }
}
