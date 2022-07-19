import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {RegisterPage,LoginPage} from '../controller/Auth'
class Router extends React.Component{
    render(){
        return(
            <BrowserRouter>
            <Routes>
              <Route path='/Login' element={<LoginPage/>}/>
              <Route path='/Register' element={<RegisterPage/>}/>
            </Routes>
          </BrowserRouter>
        )
    }
}
export default Router;