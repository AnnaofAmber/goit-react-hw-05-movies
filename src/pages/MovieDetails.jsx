import { NavLink, Route, Routes, useParams } from "react-router-dom"
import { MovieInfo } from "components/MovieInfo/MovieInfo"
import { fetchMovieByID } from "api"
import { useEffect, useState } from "react"
import Notiflix from 'notiflix';

import { Cast } from "./Cast"
import { Reviews } from "./Reviews"
import { Loader } from 'components/Loader/Loader';

export const MovieDetails = ()=>{
 
  const {movieId} = useParams()
  const [movieDetails, setMovieDetails] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(()=>{
  
   const fetchMovie = async()=>{
    try{
      setIsLoading(true);
      const result = await fetchMovieByID(movieId)
      if(movieDetails.length === 0){
         setMovieDetails(result)
      }

      console.log(result);
    }
    catch (error) {
      setApiError(true);
      Notiflix.Notify.failure(
        `Oops! Something went wrong! Error ${apiError} Try reloading the page!`
      );
    } finally {
      setIsLoading(false);
    }
   }
 fetchMovie()

  }, [movieId, apiError, movieDetails])


    return (
   <div>
     <MovieInfo movie={movieDetails} />
     {isLoading && <Loader />}
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Routes>
        <Route path="/cast" element={<Cast/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        </Routes>
   </div>
    )
}