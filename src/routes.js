import React from "react";
import { Route, Switch } from "react-router-dom";
import RawMaterials from './components/rawMaterials'
import SelectPage from './components/selectPage'

const Routes =  () => (
    <Switch>
      <Route exact path='/select/:material' component={SelectPage}/>
    </Switch>
);

export default Routes;
