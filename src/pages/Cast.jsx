import { fetchCast } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { MovieCastList } from "components/MovieCast/MovieCastList"

export const Cast = ()=>{

const {movieId} = useParams()
const [cast, setCast] = useState([])
const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

useEffect(()=>{

    const fetchMovieCast = async()=> {
        try{const result = await fetchCast(movieId)
console.log(cast);
        if(cast.length === 0){
            setCast(result)
        }}
        catch (error) {
            setApiError(true);
          } finally {
            setIsLoading(false);
          }
    }
fetchMovieCast()
})

    return(
        <MovieCastList data={cast}/>
    )
}