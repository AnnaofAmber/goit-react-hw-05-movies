
export const MovieReviewsItem = ({author, review, date})=>{
    return(
        <li>
            <p>{author}</p>
            <p>{review}</p>
            <p>{date}</p>
        </li>
    )
}