import axios from 'axios';
import React,{useState,useEffect} from 'react';
import NavBar from '../components/Navbar/Navbar';
import LandingPage from '../components/LandingPage/LandingPage';
function HomePage(){
  return(<>
    <NavBar/>
    <LandingPage />
    </>
)
}

export {HomePage};