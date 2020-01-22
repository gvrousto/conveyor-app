import React from 'react';
import RadioButton from './radioButton';
import './style/radioButtons.css'

class RadioButtons extends React.Component {

  createRadioButtons(letter){
    let i = 34;
    let j = 52;
    let radioButtons = [];
    for(i=34;i<=j;i+=2){
      let key = `${i}${letter}`;
      radioButtons.push(<RadioButton key={key} number={i} letter={letter}/>);
    }
    return radioButtons;
  }

  createRadioRows(){
    let letters = ['S', 'R', 'L'];
    return letters.map((letter)=>{
      let buttonList = this.createRadioButtons(letter);
      return (
        <div className="d-flex flex-row justify-content-around" key={letter}>
          { buttonList }
        </div>
      );
    });
  }

  render(){
    let radioRows = this.createRadioRows();
    return(
      <div className="d-flex flex-column radio-buttons-container">
        { radioRows }
      </div>
    );
  }
}

export default RadioButtons;
