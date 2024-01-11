import { useState } from "react";

const SearchBar = () => {
  const [pais, setPais] = useState("");
  return (
    <div>
      <div>
        <form>
          <label htmlFor="pais">Ingrese el nombre de un pais para buscar</label>
          <input type="text" />
          <button>Buscar</button>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
