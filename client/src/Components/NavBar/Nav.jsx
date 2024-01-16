import { useDispatch, useSelector } from "react-redux";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Nav = () => {
  const dispatch = useDispatch();
  const filtro = useSelector((state) => state.countries);
  useEffect(() => {}, [dispatch]);
  return (
    <div>
      Nav
      <SearchBar />
      <Link to="/home">
        <button>Home</button>
      </Link>
      <Link to="/form">
        <button>Form</button>
      </Link>
      <button></button>
    </div>
  );
};

export default Nav;
