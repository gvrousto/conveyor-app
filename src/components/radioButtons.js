import React from 'react';
import RadioButton from './radioButton';
import './style/radioButtons.css'

class RadioButtons extends React.Component {

  // Deprecated from movie, only need one row of buttons now
  // createRadioButtons(letter){
  //   let i = 34;
  //   let j = 52;
  //   let radioButtons = [];
  //   for(i=34;i<=j;i+=2){
  //     let key = `${i}${letter}`;
  //     radioButtons.push(<RadioButton key={key} number={i} letter={letter}/>);
  //   }
  //   return radioButtons;
  // }
  // createRadioRows(){
  //   let letters = ['S', 'R', 'L'];
  //   return letters.map((letter)=>{
  //     let buttonList = this.createRadioButtons(letter);
  //     return (
  //       <div className="d-flex flex-row justify-content-around" key={letter}>
  //         { buttonList }
  //       </div>
  //     );
  //   });
  // }


  createButtons(handleSizeSelection){
    let buttonSizes = ['1', '2', '3', '4', 'One Size'];
    let radioButtons = [];
    buttonSizes.forEach((size) => {
      radioButtons.push(<RadioButton handleSizeSelection={this.props.handleSizeSelection} key={size} size={size}/>);
    });
    return radioButtons;
  }

  render(){
    let buttons = this.createButtons(this.props);
    return(
      <div className="full-container">
        <div className="radio-buttons-header">Size</div>
        <div className="d-flex flex-row justify-content-around radio-buttons-container">
          { buttons }
        </div>
      </div>

    );
  }
}

export default RadioButtons;
