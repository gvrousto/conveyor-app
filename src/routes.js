import React from "react";
import { Route, Switch } from "react-router-dom";
import SelectPage from './pages/selectPage';
import ScanPage from './pages/scanPage';
import OutputPage from './pages/outputPage';



const Routes =  () => (
    <Switch>
      <Route exact path='/scan' component={ScanPage}/>
      <Route exact path='/select/:material' component={SelectPage}/>
      <Route exact path='/output/:material/:vector/:size' component={OutputPage}/>
    </Switch>
);

export default Routes;
