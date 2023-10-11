import { Route, Routes, useParams } from "react-router-dom"
import { MoviesItem } from "components/MoviesItem/MoviesItem"
import { fetchMovieByID } from "api"
import { useEffect, useState } from "react"

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

        <Routes>
        <Route path="/movies/:movieId/cast"/>
        <Route path="/movies/:movieId/reviews"/>
        </Routes>


   </div>
    )
}