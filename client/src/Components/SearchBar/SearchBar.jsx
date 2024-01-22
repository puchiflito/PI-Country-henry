import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { countryName } from "../../Redux/Actions/actions";
import style from "../CSS/SearchBar.module.css";

const SearchBar = () => {
  const [pais, setPais] = useState("");
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const change = ({ target }) => {
    setPais(target.value);
  };

  const onSearch = (e) => {
    e.preventDefault();
    if (!pais.length) {
      alert("Debe ingresar al menos un caracter");
    } else {
      const paises = countries.find((c) =>
        c.name.toLowerCase().includes(pais.toLowerCase())
      );
      if (paises) {
        dispatch(countryName(pais));
      }
      setPais("");
    }
  };

  return (
    <div className={style.divPadre}>
      <div className={style.divHijo}>
        <form onSubmit={onSearch} className={style.formulario}>
          <label htmlFor="pais">Ingrese el nombre de un país para buscar</label>
          <input type="search" name="search" value={pais} onChange={change} />
          <button type="submit" onClick={onSearch}>
            Buscar
          </button>{" "}
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
