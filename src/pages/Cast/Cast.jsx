import css from './Cast.module.css';
import Notiflix from 'notiflix';

import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchCast } from 'pages/api/api';

import { MovieCastList } from 'components/MovieCast/MovieCastList';
import { Loader } from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const fetchMovieCast = async () => {
      try {
        setIsLoading(true);
        const result = await fetchCast(movieId);
        if (result.length === 0) {
          return;
        } else if (cast.length === 0) {
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
      {cast.length > 0 ? (
        <MovieCastList data={cast} />
      ) : (
        <div className={css.cast}>
          Sorry! We couldn't find any actors from this movie!
        </div>
      )}
      {isLoading && <Loader />}
    </div>
  );
};

export default Cast;
