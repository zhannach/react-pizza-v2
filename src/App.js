import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NotFound from './pages/404';
import Home from './pages/Home'
import Cart from './pages/Cart'
import {  Routes, Route } from 'react-router-dom';

function App() {

  const [searchValue, setSearchValue] = useState('')

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="content">
        <div className="container">
          <Routes>
            <Route path='/' element={<Home searchValue={searchValue}/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='*' element={<NotFound/>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
