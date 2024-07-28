import * as React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap-icons/font/bootstrap-icons.css';

// useContext

import {UseContext} from './javaScript/mainComponents/useContext';

// routers

import Contact from './javaScript/contact';
import Project from './javaScript/project';
import About from './javaScript/about';
import Developper from './javaScript/routers/developper';

// main components

import AboutComponent from './javaScript/mainComponents/aboutComponent';
import ServiceComponent from './javaScript/mainComponents/serviceComponent';
import ThumbenailComponent from './javaScript/mainComponents/thumbenailComponent';
import NavBarComponent from './javaScript/mainComponents/navBarComponent';

// styles css

import './styleSheet/App.css';


function Routers(){
  return(
    <>
      <div className='container'>
        <header>
          <NavBarComponent />
          <div className='thumbenail-container'>
              <ThumbenailComponent />
          </div>
        </header>
      </div>
      <main>
        <ServiceComponent />
      </main>
      <footer>
        <AboutComponent />
      </footer>
    </>
  )
}
    
export default function App() {
  return (
    <UseContext>
      <Routes>
        <Route path="/" element={<Routers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/about" element={<About />} />
        <Route path="/developper" element={<Developper />} />
      </Routes>
    </UseContext>
  );
}
