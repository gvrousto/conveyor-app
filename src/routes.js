import React from "react";
import { Route, Switch } from "react-router-dom";
import RawMaterials from './components/rawMaterials'
import SelectPage from './components/selectPage'

const Routes =  () => (
    <Switch>
      <Route exact path='/select/:material' component={SelectPage}/>
      <Route exact path="/" render={(props) => <RawMaterials {...props} material={'Gloves'} />} />
      <Route exact path="/Gloves" render={(props) => <RawMaterials {...props} material={'Gloves'} />} />
      <Route exact path="/CottonLace" render={(props) => <RawMaterials {...props} material={'CottonLace'} />} />
      <Route exact path="/FabricSamples" render={(props) => <RawMaterials {...props} material={'FabricSamples'} />} />
      <Route exact path="/KiddLeatherGloves" render={(props) => <RawMaterials {...props} material={'KiddLeatherGloves'} />} />
      <Route exact path="/MilitarySurplus" render={(props) => <RawMaterials {...props} material={'MilitarySurplus'} />} />
      <Route exact path="/Jeans" render={(props) => <RawMaterials {...props} material={'Jeans'} />} />
      <Route render={(props) => <RawMaterials {...props} material={'Gloves'} />} />
    </Switch>
);

export default Routes;
