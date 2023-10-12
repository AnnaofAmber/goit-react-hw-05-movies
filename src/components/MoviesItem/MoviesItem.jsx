export const MoviesItem = ({movie, genre})=>{
    const {title, vote_average, poster_path, overview} = movie
  
    return(
        <div>
            <img src={`https://image.tmdb.org/t/p/w300/${poster_path}`} alt={title} />
            <h2>{title}</h2>
            <p>{genre}</p>
            <p>{overview}</p>
            <p>{(vote_average * 10).toFixed(1)}%</p>
        </div>
    )
}