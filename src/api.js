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
    const {data} = await axios.get(`https://api.themoviedb.org/3/trending/get-trending${API_KEY}`)
    console.log(data);
    return data
}