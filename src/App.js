import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Homepage} from "./pages/homepage/Homepage";
import {ShopPage} from "./pages/shop/Shop";
import './App.css';



function App() {
  return (
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/shop' element={<ShopPage/>} />
      </Routes>
  );
}

export default App;
