import React from 'react';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import NasaPhoto from './components/Photo_Of_The_Day/NasaPhoto';
import MarsRover from './components/MarsRover/MarsRover';
import Footer from './components/Footer/Footer';
import ErrorPage from './components/ErrorPage';

import {Routes, Route} from 'react-router-dom';
import RoverCarousel from './components/MarsRover/views/Carousel';

function App() {

  return (
    <div className='bg-[url("https://images.pexels.com/photos/220201/pexels-photo-220201.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260")] bg-cover h-fit min-h-screen'>
      < div className = 'container mx-auto flex flex-col min-h-screen justify-between' >

        <Navbar />

        <Routes>
          <Route path="/"  element={<LandingPage />}/>
          <Route path="/apod/*" element={<NasaPhoto />} />
          <Route path="/mars/*" element={<MarsRover />} />
          <Route path="/carousel" element={<RoverCarousel />} /> 
          <Route path="*" element={<ErrorPage />} />
        </Routes>

        
        <Footer />
      </div>
    </div>
  );
}

export default App;
 