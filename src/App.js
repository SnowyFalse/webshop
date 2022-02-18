import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Homepage} from "./pages/homepage/Homepage";
import {ShopPage} from "./pages/shop/Shop";
import './App.css';
import {Header} from "./components/header/header";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/shop' element={<ShopPage/>} />
      </Routes>
    </div>
  );
}

export default App;
