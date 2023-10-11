import {Route, Routes } from 'react-router-dom';

import { Header } from './Header/Header';
import { Home } from 'pages/Home';






export const App = () => {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movies'/>
        <Route path='/movies/:movieId'/>
        <Route path='/movies/:movieId/cast'/>
        <Route path='/movies/:movieId/reviews'/>
      </Routes>
    </div>
  );
};
