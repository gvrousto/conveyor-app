import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import './style/selectMaterial.css'

function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

function MaterialListGroup(){
  return(
    <ListGroup className="select-material-list-container" defaultActiveKey="#link1">
      <ListGroup.Item action href="#link1">
        Link 1
      </ListGroup.Item>
      <ListGroup.Item action href="#link2" disabled>
        Link 2
      </ListGroup.Item>
      <ListGroup.Item action onClick={alertClicked}>
        This one is a button
      </ListGroup.Item>
    </ListGroup>
  );
}

export default class SelectMaterial extends React.Component{

  redirectOnClick(){
    window.location.assign(`#/select/Jeans`);
  }

  render(){
    return(
      <div className="select-material-container">
        <div className="select-material-header-container">
          Select Your Material
        </div>
        { MaterialListGroup() }
        <Button onClick={this.redirectOnClick}>Hello Mother</Button>
      </div>
    );
  }
}
