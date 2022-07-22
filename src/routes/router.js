import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../components/Home/Home';
import LandingPage from '../components/LandingPage/LandingPage';
import Profile from '../components/Profile/Profile';
import UpdateProfile from '../components/UpdateProfile/UpdateProfile';
import {RegisterPage,LoginPage} from '../controller/Auth'



class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <Routes>
              <Route path='/' element={<LandingPage/>}/>
              <Route path='/Home' element={<Home/>}/>
              <Route path='/Login' element={<LoginPage/>}/>
              <Route path='/Register' element={<RegisterPage/>}/>
              <Route path='/Profile' element={<Profile/>}/>
              <Route path='/Update' element={<UpdateProfile/>}/>
            </Routes>
          </BrowserRouter>
        )
    }
}
export default Router;