import css from "./MovieInfo.module.css"

export const MovieInfo = ({movie, genre, onButtonReturn})=>{
    const {title, vote_average, poster_path, overview} = movie
  
    return(
        <div className={css.movie_container}>
            <img className={css.img} src={poster_path?`https://image.tmdb.org/t/p/w300/${poster_path}`:'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'} alt={title} />
            <div className={css.info}>
            <h2 className={css.title}>{title}</h2>
            <div className={css.undertitle}>
            <p className={css.genres}>Genre: <span className={css.genre}>{genre}</span></p>
            <p className={css.vote}> Rating:  {(vote_average * 10).toFixed(1)}%</p>
            
            </div>
            <p className={css.overview}>{overview}</p>
  
            </div>
        </div>
    )
}