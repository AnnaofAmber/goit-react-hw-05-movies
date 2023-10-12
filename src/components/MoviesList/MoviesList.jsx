import css from "./MoviesList.module.css"
import { Link } from 'react-router-dom';

export const MoviesList = ({ data }) => {
  return (
    <div className={css.container}>
      {data.map(({ title, id, poster_path }) => (
        <div className={css.item} key={id}>
          <img className={css.img}  src={poster_path?`https://image.tmdb.org/t/p/w300/${poster_path}`:'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'} alt={title}/>
          <Link className={css.title} to={`/movies/${id}`}>{title}</Link>
        </div>
      ))}
    </div>
  );
};
