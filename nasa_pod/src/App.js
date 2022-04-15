import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import NasaPhoto from './components/Photo_Of_The_Day/NasaPhoto';
import MarsRover from './components/MarsRover/MarsRover';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/ErrorPage';

import {Routes, Route} from 'react-router-dom';

function App() {

  return (
    <div className='bg-[url("https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")] bg-full'>
      <div className='container mx-auto h-fit'>

        <Navbar />

        <Routes>
          <Route path="/"  element={<LandingPage />}/>
          <Route path="/apod/*" element={<NasaPhoto />} />
          <Route path="/mars" element={<MarsRover />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        
        <Footer />
      </div>
    </div>
  );
}

export default App;
 