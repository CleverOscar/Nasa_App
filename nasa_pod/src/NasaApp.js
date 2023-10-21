import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import LandingPage from './Views/LandingPage/LandingPage';
import NasaPhoto from './Views/Photo_Of_The_Day/NasaPhoto'
import MarsRover from './Views/MarsRover/MarsRover'
import Footer from './Components/Footer/Footer';
import ErrorPage from './Views/Error/ErrorPage';
import About from './Views/About/About';

import {Routes, Route} from 'react-router-dom';
import RoverCarousel from './Views/MarsRover/views/Carousel';

function NasaApp() {

  return (
    <div className='app-background h-fit min-h-screen font-code font-semibold'>
      < div className = 'flex flex-col min-h-screen justify-between' >

        <Navbar />

        <div className='container mx-auto mb-auto '>
          <Routes>
            <Route path="/"  element={<LandingPage />}/>
            <Route path="/apod/*" element={<NasaPhoto />} />
            <Route path="/mars/*" element={<MarsRover />} />
            <Route path="/carousel" element={<RoverCarousel />} />
            <Route path="/about" element={<About />} /> 
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default NasaApp;
 