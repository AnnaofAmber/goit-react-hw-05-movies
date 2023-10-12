import { NavLink, Route, Routes, useParams } from "react-router-dom"
import { MovieInfo } from "components/MovieInfo/MovieInfo"
import { fetchMovieByID } from "api"
import { useEffect, useState } from "react"


import { Cast } from "./Cast"
import { Reviews } from "./Reviews"

export const MovieDetails = ()=>{
 
  const {movieId} = useParams()
  const [movieDetails, setMovieDetails] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

  useEffect(()=>{
  
   const fetchMovie = async()=>{
    try{
      const result = await fetchMovieByID(movieId)
      if(movieDetails.length === 0){
         setMovieDetails(result)
      }

      console.log(result);
    }
    catch (error) {
      setApiError(true);
    } finally {
      setIsLoading(false);
    }
   }
 fetchMovie()

  })


    return (
   <div>
     <MovieInfo movie={movieDetails} />
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Routes>
        <Route path="/cast" element={<Cast/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        </Routes>
   </div>
    )
}