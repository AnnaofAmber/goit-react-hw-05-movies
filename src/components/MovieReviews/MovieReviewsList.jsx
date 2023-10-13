import css from './MovieReviewsList.module.css';
import { MovieReviewsItem } from './MovieReviewsItem';

export const MovieReviewsList = ({ data }) => {
  return (
    <ul className={css.list}>
      {data.map(({ id, author, content }) => (
        <MovieReviewsItem key={id} author={author} review={content} />
      ))}
    </ul>
  );
};
