import React from 'react';

class RadioButtons extends React.Component{
  render(){
    return(
        <div className="d-flex flex-row">
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="XS" name="defaultExampleRadios"></input>
            <label class="custom-control-label" for="XS">XS</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="S" name="defaultExampleRadios"></input>
            <label class="custom-control-label" for="S">S</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="M" name="defaultExampleRadios"></input>
            <label class="custom-control-label" for="M">M</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="L" name="defaultExampleRadios"></input>
            <label class="custom-control-label" for="L">L</label>
          </div>
          <div class="custom-control custom-radio">
            <input type="radio" class="custom-control-input" id="XL" name="defaultExampleRadios"></input>
            <label class="custom-control-label" for="XL">XL</label>
          </div>
        </div>
    );
  }
}

export default RadioButtons;
