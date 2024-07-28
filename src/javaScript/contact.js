import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

//  componenet 

import ConactForm from './components/contactComponent/contactC';
import WhatIDo from './components/contactComponent/whatIDoC';
import NavBar from './mainComponents/navBarComponent';

// contact css

import '../styleSheet/contact.css'


export default function Contact(){
    return (
      <>
       <header>
         <NavBar />
       </header>
       <div className='thumbenail-contact'>
         <WhatIDo />
         
            <ConactForm />
         
       </div>
      </>
    );
 }
 