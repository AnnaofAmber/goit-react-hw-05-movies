import Notiflix from 'notiflix';

import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import { MovieSearch } from 'components/MovieSearch/MovieSearch';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Loader } from 'components/Loader/Loader';

import { fetchMovieByName } from 'pages/api/api';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [moviesList, setMoviesList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      Notiflix.Notify.warning(`Please enter movie name!`);
      setMoviesList([])
      return;
    }
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const result = await fetchMovieByName(query);
        if (result.length === 0) {
          Notiflix.Notify.failure(
            `Oops! Seems like we do not have movie with title ${query}!`
          );
        } else {
          setMoviesList(result);
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

    fetchMovie();
  }, [query, apiError]);

  const handleSubmit = e => {
    e.preventDefault();
    const searchValue = e.currentTarget.elements.serchMovieName.value;
    setSearchParams({ query: searchValue });
  };

  return (
    <div>
      <MovieSearch handleSubmit={handleSubmit} />
      {isLoading && <Loader />}
      {moviesList.length !== 0 && (
        <MoviesList data={moviesList} location={location} />
      )}
    </div>
  );
};

export default Movies;
