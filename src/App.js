import React from 'react';
import { HashRouter, Route, Redirect } from "react-router-dom";
import SelectPage from './pages/selectPage';
import LoadPage from './pages/loadPage';
import ScanPage from './pages/scanPage';
import MaterialPage from './pages/selectMaterial';
import 'bootstrap/dist/css/bootstrap.min.css';

// <Route exact path='/output/:materialName/:vector/:size/:material' component={OutputPage}/>
// <Redirect exact from='/' to='/load/Baseball%20gloves/Parka/4'/>
// /select/Baseball%20gloves

function App() {
  return (
    <HashRouter>
      <div>
        <Redirect exact from='/' to='/load/Baseball%20gloves/Parka/4'/>
        <Route exact path='/scan' component={ScanPage}/>
        <Route exact path='/material' component={MaterialPage}/>
        <Route exact path='/select/:material' component={SelectPage}/>
        <Route exact path='/load/:material/:vector/:size' component={LoadPage}/>
      </div>
      {/* <Routes/> Passing global state info and function references to the rest of the app */}
    </HashRouter>
  );
}

export default App;
