import React from 'react';
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <BrowserRouter>
      {/* Passing global state info and function references to the rest of the app */}
      <Routes/>
    </BrowserRouter>
  );
}

export default App;
