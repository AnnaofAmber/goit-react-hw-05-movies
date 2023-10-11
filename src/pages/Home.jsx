import { MoviesList } from "components/MoviesList/MoviesList"
import { fetchTrendingMovies } from "api"
import { useEffect, useState } from "react"

export const Home = ()=>{

    const [movies, setMovies] = useState([])

    useEffect(()=>{

        const fetchMovies = async()=>{
            try{
                const response = await fetchTrendingMovies()
                console.log(movies);
            if(movies.length === 0){
                setMovies(response.results)}
                
                console.log(response.results);
            }
            catch(error){
                console.log(error);
            }
            finally{
                // console.log('asd');
            }
        }
        fetchMovies()
    })
    
    return(
<div>
<h1>Trending movies</h1>
<MoviesList data={movies}/>
</div>
    )
}