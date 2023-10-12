export const MovieInfo = ({movie, genre})=>{
    const {title, vote_average, poster_path, overview} = movie
  
    return(
        <div>
            <img src={poster_path?`https://image.tmdb.org/t/p/w300/${poster_path}`:'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'} alt={title} />
            <h2>{title}</h2>
            <p>{genre}</p>
            <p>{overview}</p>
            <p>{(vote_average * 10).toFixed(1)}%</p>
        </div>
    )
}