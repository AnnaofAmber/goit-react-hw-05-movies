import css from "./MovieReviewsItem.module.css"

export const MovieReviewsItem = ({author, review, date})=>{
    return(
        <li className={css.item}>
            <p className={css.author}>{author}</p>
            <p className={css.review}>{review}</p>
            <p className={css.date}>{date}</p>
        </li>
    )
}