import axios from 'axios';
const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = '548e96f0a88257a9c2a7854f478e0cd8';


// export async function searchForMovie (query, page, perPage){
//     const response = await axios.get(BASE_URL, {
//         params: {
//           key: API_KEY,

//         },
//       });
//      return response.data
// }

export const fetchTrendingMovies = async()=>{
    const params = new URLSearchParams({
      api_key: API_KEY,
    });
    const {data} = await axios.get(`${BASE_URL}/trending/movie/day?${params}`)
    console.log(data);
    return data
}

// export async function fetchTrendingMovies() {
//     const end_point = '/trending/movie/week';
//     const par = new URLSearchParams({
//       api_key: API_KEY,
//     });
  
//     const url = `${BASE_URL}${end_point}?${par}`;
  
//     const responce = await axios.get(url);
//     return responce.data;
//   }