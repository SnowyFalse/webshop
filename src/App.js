import React from 'react';
import { Route, Routes } from 'react-router-dom';
import {Homepage} from "./pages/homepage/Homepage";
import {ShopPage} from "./pages/shop/Shop";
import './App.css';
import {Header} from "./components/header/header";
import {SignInUp} from "./pages/sign-in-up/SignInUp";


function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
        <Route path='/shop' element={<ShopPage/>} />
        <Route path='/signIn' element={<SignInUp/>} />
      </Routes>
    </div>
  );
}

export default App;
