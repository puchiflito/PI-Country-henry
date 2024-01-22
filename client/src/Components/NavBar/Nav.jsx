import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import style from "../CSS/Nav.module.css";

const Nav = () => {
  return (
    <div className={style.nav}>
      <SearchBar />
      <div>
        <Link to="/home">
          <button>Home</button>
        </Link>
        <Link to="/form">
          <button>Form</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
