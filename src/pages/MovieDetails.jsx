import { NavLink, Route, Routes, useParams } from "react-router-dom"
import { MoviesItem } from "components/MoviesItem/MoviesItem"
import { fetchMovieByID } from "api"
import { useEffect, useState } from "react"


import { Cast } from "./Cast"
import { Reviews } from "./Reviews"

export const MovieDetails = ()=>{
 
  const {movieId} = useParams()
  const [movieDetails, setMovieDetails] = useState([])

  useEffect(()=>{
  
   const fetchMovie = async()=>{
    try{
      const result = await fetchMovieByID(movieId)
      if(movieDetails.length === 0){
         setMovieDetails(result)
      }

      console.log(result);
    }
    catch{}
    finally{}
   }
 fetchMovie()

  })


    return (
   <div>
     <MoviesItem movie={movieDetails} />
        <NavLink to="cast">Cast</NavLink>
        <NavLink to="reviews">Reviews</NavLink>
        <Routes>
        <Route path="/cast" element={<Cast/>}/>
        <Route path="/reviews" element={<Reviews/>}/>
        </Routes>
   </div>
    )
}