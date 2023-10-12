import { fetchReview } from "api"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { MovieReviewsList } from "components/MovieReviews/MovieReviewsList"

export const Reviews = ()=>{
    const {movieId} = useParams()
    const [reviews, setReviews] = useState([])
    const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(false);

useEffect(()=>{
    const fetchMovieReview = async()=>{
try{        const result = await fetchReview(movieId)

        if(reviews.length === 0){
            setReviews(result)
        }}
        catch (error) {
            setApiError(true);
          } finally {
            setIsLoading(false);
          }

    }
    fetchMovieReview()
})


    return(
        <MovieReviewsList data={reviews}/>
    )
}