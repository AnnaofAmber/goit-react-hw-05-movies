import css from './Home.module.css';
import Notiflix from 'notiflix';

import { useEffect, useState } from 'react';

import { fetchTrendingMovies } from 'api';

import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await fetchTrendingMovies();
        if (movies.length === 0) {
          setMovies(response);
        }
      } catch (error) {
        setApiError(true);
        Notiflix.Notify.failure(
          `Oops! Something went wrong! Error ${apiError} Try reloading the page!`
        );
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [apiError, movies]);

  return (
    <div className={css.container}>
      {movies.length > 0 && (
        <div>
          <h1 className={css.title}>Trending movies</h1>
          <MoviesList data={movies} />
        </div>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default Home;
