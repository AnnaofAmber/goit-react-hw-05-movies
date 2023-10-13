import css from './MovieCastItem.module.css';

export const MovieCastItem = ({ image, name, role }) => {
  return (
    <li className={css.item}>
      <img className={css.img} src={image} alt={name} />
      <div className={css.info}>
        <p className={css.title}>Name: {name}</p>
        <p className={css.role}>Character: {role}</p>
      </div>
    </li>
  );
};
