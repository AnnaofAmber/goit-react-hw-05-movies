import { fetchCast } from "api"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

import { MovieCastList } from "components/MovieCast/MovieCastList"

export const Cast = ()=>{

const {movieId} = useParams()
const [cast, setCast] = useState([])


useEffect(()=>{

    const fetchMovieCast = async()=> {
        const result = await fetchCast(movieId)
console.log(cast);
        if(cast.length === 0){
            setCast(result)
        }
    }
fetchMovieCast()
})

    return(
        <MovieCastList data={cast}/>
    )
}