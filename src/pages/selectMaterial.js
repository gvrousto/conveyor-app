import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import {Link} from 'react-router-dom';
import './style/selectMaterial.css'

function alertClicked() {
  alert('You clicked the third ListGroupItem');
}

function MaterialListGroup(){
  const columnHeaders = [
    {
      field: 'icon',
      label: 'Icon',
    },
    {
      field: 'material',
      label: 'City',
    },
    {
      field: 'address.state',
      label: 'State',
    },
  ];

  const columnContents =
    [
      {
        field: 'icon',
        label: 'Gloves Image'
      },
      {
        field: 'material',
        label: 'Baseball Gloves'
      },
      {
        field: 'cuck',
        label: 'cuck'
      }
    ]
  return(
    <table className="table table-striped table-hover">
      <thead>
        <tr>
          {columnHeaders.map(({ field, label }) => (
            <th key={field}>{label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {columnContents.map(({ field, label }) => (
            <th key={field}>{label}</th>
          ))}
        </tr>
        <tr>
          {columnContents.map(({ field, label }) => (
            <th key={field}>{label}</th>
          ))}
        </tr>
      </tbody>
    </table>
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
          Materials Library
        </div>
        { MaterialListGroup() }
        <Link to="/select/Jeans">
          <Button>Proceed</Button>
        </Link>
      </div>
    );
  }
}
