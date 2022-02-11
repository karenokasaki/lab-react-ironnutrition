import React from 'react';

import { Routes, Route } from 'react-router-dom'

import 'bulma/css/bulma.css'
import './App.css';

import Pets from './pages/Pets/Pets';
import Home from './pages/Home/Home';
import Foods from './pages/Foods/Foods';
import Bitcoin from './pages/Bitcoin/Bitcoin';



function App() {
 
  return (
    <div className="App">
      

      <Routes>
        <Route path="/" exct element={<Home />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/foods" element={<Foods />} />
        <Route path="/bitcoin" element={<Bitcoin />}/>
      </Routes>

    </div>
  );
}

export default App;


