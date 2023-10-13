import css from './MovieCastList.module.css';

import { MovieCastItem } from './MovieCastItem';

export const MovieCastList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(({ id, profile_path, name, character }) => (
        <MovieCastItem
          key={id}
          image={
            profile_path
              ? `https://image.tmdb.org/t/p/w300/${profile_path}`
              : 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700'
          }
          name={name}
          role={character}
        />
      ))}
    </ul>
  );
};
