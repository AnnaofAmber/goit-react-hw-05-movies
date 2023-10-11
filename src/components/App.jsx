import {Route, Routes } from 'react-router-dom';

import { Header } from './Header/Header';
import { Home } from 'pages/Home';
import { Movies } from 'pages/Movies';
import { MovieDetails } from 'pages/MovieDetails';






export const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies'element={<Movies/>}/>
        <Route path='/movies/:movieId/*' element={<MovieDetails/>}/>
      </Routes>
    </div>
  );
};
