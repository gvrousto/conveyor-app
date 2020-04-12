import React from 'react';
import './style/radioButton.css';

class RadioButton extends React.Component{

  render(){
    let size = this.props.number+this.props.letter;
    return(
      <div className="custom-control custom-radio radio-button-unit">
        <input type="radio" className="custom-control-input custom-control-input-style" id={size} name="defaultExampleRadios"></input>
        <label className="custom-control-label custom-control-input-style" htmlFor={size}>{size}</label>
      </div>
    );
  }

}
export default RadioButton;