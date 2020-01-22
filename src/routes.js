import React from "react";
import { Route, Switch } from "react-router-dom";
import SelectPage from './components/selectPage'
import ScanPage from './components/scanPage'


const Routes =  () => (
    <Switch>
      <Route exact path='/scan' component={ScanPage}/>
      <Route exact path='/select/:material' component={SelectPage}/>
    </Switch>
);

export default Routes;
