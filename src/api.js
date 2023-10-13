import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '548e96f0a88257a9c2a7854f478e0cd8';


export const fetchTrendingMovies = async()=>{
    const {data} = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`)
    const {results} = data
    return results

}

export const fetchMovieByID = async movieId=>{
    const {data} = await axios.get(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`)
    return data

}


export const fetchCast = async movieId =>{
    const {data} = await axios.get(`${BASE_URL}/movie/${movieId}/credits?api_key=${API_KEY}`)
    const {cast} = data
    console.log(cast);
    return cast
} 

export const fetchReview = async movieId =>{
    const {data} = await axios.get(`${BASE_URL}/movie/${movieId}/reviews?api_key=${API_KEY}`)
    const {results} = data
    return results
}

export const fetchMovieByName = async query =>{
    const {data} = await axios.get(`${BASE_URL}/search/movie?query=${query}&api_key=${API_KEY}`)
    const {results} = data
console.log(results);
return results
}
