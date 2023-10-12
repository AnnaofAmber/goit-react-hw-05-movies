import { MovieReviewsItem } from "./MovieReviewsItem";

export const MovieReviewsList = ({data})=>{
    return(
        <ul>
            {data.map(e=>(
                <MovieReviewsItem key={e.id} author={e.author} review={e.content} date={e.updated_at}/>
            ))}
        </ul>
    )
}