import css from "./MovieReviewsList.module.css"
import { MovieReviewsItem } from "./MovieReviewsItem";

export const MovieReviewsList = ({data, })=>{
    return(
        <ul className={css.list}>
            {data.map(e=>(
                <MovieReviewsItem key={e.id} author={e.author} review={e.content} date={e.updated_at}/>
            ))}
        </ul>
    )
}