import css from './MovieReviewsItem.module.css';

export const MovieReviewsItem = ({ author, review }) => {
  return (
    <li className={css.item}>
      <p className={css.name}>
        <span className={css.author}>Author:</span> {author}
      </p>
      <p className={css.review}>{review}</p>
    </li>
  );
};
