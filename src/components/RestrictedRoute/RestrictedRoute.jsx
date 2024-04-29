import { useSelector } from "react-redux";
import { selectAuthLoggedIn } from "../../redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ children }) => {
  const isLoggedIn = useSelector(selectAuthLoggedIn);

  return isLoggedIn ? <Navigate to="/contacts" replace /> : children;
};

export default RestrictedRoute;
