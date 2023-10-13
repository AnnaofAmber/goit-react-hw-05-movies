import { useEffect, useState } from "react"
import { Link, useLocation, useSearchParams } from "react-router-dom"
import Notiflix from "notiflix"
import { fetchMovieByID } from "api"
import { MovieSearch } from "components/MovieSearch/MovieSearch"

export const Movies = ()=>{

    const [searchParams, setSearchParams] = useSearchParams()
    const location = useLocation()
    const [moviesList, setMoviesList] = useState([])
    const [isLoading, setIsLoading] = useState(false);
    const [apiError, setApiError] = useState(false);

    const query = searchParams.get('query')

    useEffect(()=>{
        if(!query) return

        const fetchMovie = async () => {
            try {
              setIsLoading(true);
              const result = await fetchMovieByID(query);

              setMoviesList([result])

      
            } catch (error) {
              setApiError(true);
              Notiflix.Notify.failure(
                `Oops! Something went wrong! Error ${apiError} Try reloading the page!`
              );
            } finally {
              setIsLoading(false);
            }
        }

        fetchMovie()


    }, [query, apiError])


    const handleSubmit = e =>{
        e.preventDefault()
        const searchValue = e.currentTarget.elements.serchMovieName.value
        setSearchParams({query:searchValue})
    }

    return (
        <div>
            <MovieSearch handleSubmit={handleSubmit}/>
            <Link to={`/movies`} />
        </div>
    )
}