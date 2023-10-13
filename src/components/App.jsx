import { Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

import { Header } from './Header/Header';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  return (
    <div>
      <Header />
      <div>
        <Suspense>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};
