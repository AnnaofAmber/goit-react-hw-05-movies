import css from "./Header.module.css"
import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={css.header}>
      <nav className={css.nav}>
        <ul className={css.header_list}>
          <li className={css.header_item}>
            <NavLink className={({isActive})=>`${css["nav_link"]} ${isActive ? css.active : ''}`} to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>`${css["nav_link"]} ${isActive ? css.active : ''}`}  to='/movies'>Movies</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
