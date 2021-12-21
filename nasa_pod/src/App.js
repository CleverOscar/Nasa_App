import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import NasaPhoto from './components/NasaPhoto';
import MarsRover from './components/MarsRover';
import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className="container mx-auto">

      <Navbar />

      <Routes>
        <Route path="/"  element={<LandingPage />}/>
        <Route path="/apod" element={<NasaPhoto />} />
        <Route path="/mars" element={<MarsRover />} />
      </Routes>
    </div>
  );
}

export default App;
 