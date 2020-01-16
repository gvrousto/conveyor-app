import React from "react";
import { Route, Switch } from "react-router-dom";
import RawMaterials from './components/rawMaterials'

const Routes =  () => (
    <Switch>
      <Route exact path="/" render={(props) => <RawMaterials {...props} material={'Gloves'} />} />
      <Route exact path="/Gloves" render={(props) => <RawMaterials {...props} material={'Gloves'} />} />
      <Route exact path="/CottonLace" render={(props) => <RawMaterials {...props} material={'CottonLace'} />} />
      <Route exact path="/FabricSamples" render={(props) => <RawMaterials {...props} material={'FabricSamples'} />} />
      <Route exact path="/KiddLeatherGloves" render={(props) => <RawMaterials {...props} material={'KiddLeatherGloves'} />} />
    </Switch>
);

export default Routes;
