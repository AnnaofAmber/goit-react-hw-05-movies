import css from './App.module.css'
import {Route, Routes } from 'react-router-dom';

import { Header } from './Header/Header';
// import { Home } from 'pages/Home';
// import { Movies } from 'pages/Movies/Movies';
// import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { lazy, Suspense } from 'react';


const Home = lazy(() => import('pages/Home/Home'))
// const Movies = lazy(() => import('pages/Movies/Movies'));
// const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));






export const App = () => {
  return (
    <div className={css.container}>
      <Header/>
<div>
  <Suspense>
  <Routes>
        <Route path='/' element={<Home />}/>
        {/* <Route path='/movies'element={<Movies/>}/>
        <Route path='/movies/:movieId/*' element={<MovieDetails/>}/> */}
      </Routes>
  </Suspense>
</div>
    </div>
  );
};
