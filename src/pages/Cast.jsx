import { fetchCast } from 'api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Notiflix from 'notiflix';

import { MovieCastList } from 'components/MovieCast/MovieCastList';
import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const result = await fetchCast(movieId);

        if (cast.length === 0) {
          setCast(result);
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
    fetchMovieCast();
  }, [movieId, apiError, cast]);

  return (
    <div>
      <MovieCastList data={cast} />
      {isLoading && <Loader />}
    </div>
  );
};
