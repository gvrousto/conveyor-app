import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import SelectPage from './pages/selectPage';
import ScanPage from './pages/scanPage';
import OutputPage from './pages/outputPage';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <HashRouter>
      <div>
        <Route exact path='/scan' component={ScanPage}/>
        <Route exact path='/select/:material' component={SelectPage}/>
        <Route exact path='/output/:material/:vector/:size' component={OutputPage}/>
      </div>
      {/* <Routes/> Passing global state info and function references to the rest of the app */}
    </HashRouter>
  );
}

export default App;
