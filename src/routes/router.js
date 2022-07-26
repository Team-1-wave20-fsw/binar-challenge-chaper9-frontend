import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from '../controller/PageController'
import Profile from '../components/Profile/Profile';
import UpdateProfile from '../components/UpdateProfile/UpdateProfile';
import { RegisterPage, LoginPage } from '../controller/Auth'
import GameList from '../components/Games/GameList';
import DetailGame from '../components/Games/Details/BatuGuntingKertas/BatuGuntingKertas';
import Index from '../components/Games/BatuGuntingKertas/Index';

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Login' element={<LoginPage />} />
          <Route path='/Register' element={<RegisterPage />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Update' element={<UpdateProfile />} />
          <Route path='/List' element={<GameList />} />
          <Route path='/DetailGames' element={<DetailGame />} />
          <Route path='/GamesBatuGuntingKertas' element={<Index />} />
          <Route path='*' element={<h1>NOT FOUND</h1>} />
        </Routes>
      </BrowserRouter>
    )
  }
}
export default Router;