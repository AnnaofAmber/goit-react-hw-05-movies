import { fetchReview } from "api"

import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

import { MovieReviewsList } from "components/MovieReviews/MovieReviewsList"

export const Reviews = ()=>{
    const {movieId} = useParams()
    const [reviews, setReviews] = useState([])

useEffect(()=>{
    const fetchMovieReview = async()=>{
        const result = await fetchReview(movieId)

        if(reviews.length === 0){
            setReviews(result)
        }

    }
    fetchMovieReview()
})


    return(
        <MovieReviewsList data={reviews}/>
    )
}