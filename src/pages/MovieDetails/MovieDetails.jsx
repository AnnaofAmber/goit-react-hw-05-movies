import css from "./MovieDetails.module.css"

import { NavLink, Route, Routes, useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieInfo/MovieInfo';
import { fetchMovieByID } from 'api';
import { useEffect, useState } from 'react';
import Notiflix from 'notiflix';

import { Cast } from '../Cast/Cast';
import { Reviews } from '../Reviews/Reviews';
import { Loader } from 'components/Loader/Loader';

// const Cast = lazy(()=> import('../Cast'))

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState([]);
  const [movieGenres, setMovieGenres] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setIsLoading(true);
        const result = await fetchMovieByID(movieId);
        if (movieDetails.length === 0) {
          setMovieDetails(result);
        }
       
        if(movieGenres.length ===0){
          const genre =  result.genres.map(e=>e.name).join(", ")
          setMovieGenres(genre)
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
  }, [movieId, apiError, movieDetails, movieGenres]);

  return (
    <div className={css.container}>
      <MovieInfo movie={movieDetails}  genre={movieGenres}/>
      {isLoading && <Loader />}
      <div className={css.options}>
        <NavLink className={({isActive})=>`${css["nav_link"]} ${isActive ? css.active : ''}`} to="cast">Cast</NavLink>
        <NavLink className={({isActive})=>`${css["nav_link"]} ${isActive ? css.active : ''}`} to="reviews">Reviews</NavLink>
      </div>
    <div>
    <Routes>
        <Route path="/cast" element={<Cast />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
    </div>
  );
};
