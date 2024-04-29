import { Helmet } from "react-helmet-async";
import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <h1 className={css.header}>Welcome to the contacts manager 🙋‍♂️</h1>
    </>
  );
};

export default HomePage;
