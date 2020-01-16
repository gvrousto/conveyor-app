import React from 'react';

class RadioButtons extends React.Component{
  render(){
    return(
        <div className="d-flex flex-row">
          <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="XS" name="defaultExampleRadios"></input>
            <label className="custom-control-label" htmlFor="XS">XS</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="S" name="defaultExampleRadios"></input>
            <label className="custom-control-label" htmlFor="S">S</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="M" name="defaultExampleRadios"></input>
            <label className="custom-control-label" htmlFor="M">M</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="L" name="defaultExampleRadios"></input>
            <label className="custom-control-label" htmlFor="L">L</label>
          </div>
          <div className="custom-control custom-radio">
            <input type="radio" className="custom-control-input" id="XL" name="defaultExampleRadios"></input>
            <label className="custom-control-label" htmlFor="XL">XL</label>
          </div>
        </div>
    );
  }
}

export default RadioButtons;
