import { NavLink } from "react-router-dom";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectAuthLoggedIn } from "../../redux/auth/selectors";

import css from "./Navigation.module.css";

const Navigation = () => {
  const isLoggedIn = useSelector(selectAuthLoggedIn);

  return (
    <>
      <div>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, { [css.active]: isActive })
          }
          to="/"
        >
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink
            className={({ isActive }) =>
              clsx(css.link, { [css.active]: isActive })
            }
            to="/contacts"
          >
            Contacts
          </NavLink>
        )}
      </div>
    </>
  );
};

export default Navigation;
