import './App.css';
import Homepage from "./pages/homepage/Homepage";
import React  from 'react';
import {Route} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Route component={Homepage} path={'/'} exact/>
      <Route component={Homepage} path={'/hats'} exact/>
    </div>
  );
}

export default App;
