import { MoviesList } from 'components/MoviesList/MoviesList';
import { fetchTrendingMovies } from 'api';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetchTrendingMovies();
        if (movies.length === 0) {
          setMovies(response);
        }
      } catch (error) {
        setApiError(true);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  });

  return (
    <div>
      <h1>Trending movies</h1>
      <MoviesList data={movies} />
    </div>
  );
};
