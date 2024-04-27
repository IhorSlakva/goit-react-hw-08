import { NavLink } from "react-router-dom";
import clsx from "clsx";

import css from "./Navigation.module.css";

const Navigation = () => {
  return (
    <header className={css.header}>
      <div className={css.navigate}>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
          to="/contacts"
        >
          Contacts
        </NavLink>
      </div>
      <div className={css.navigate}>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
          to="/register"
        >
          Register
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
          to="/login"
        >
          Log In
        </NavLink>
      </div>
    </header>
  );
};

export default Navigation;
