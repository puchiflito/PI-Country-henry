// import { useState } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { countryName } from "../../Redux/Actions/actions";

// const SearchBar = () => {
//   const [pais, setPais] = useState("");
//   const dispatch = useDispatch();
//   const countries = useSelector((state) => state.countries);

//   const change = ({ target }) => {
//     setPais(target.value);
//   };
//   const onSearch = (pais) => {
//     e.preventDefault();
//     if (!pais.length) {
//       alert("Debe ingresar al menos un caracter");
//     } else {
//       const paises = countries.find((c) =>
//         c.name.toLowerCase().include(pais.toLowerCase())
//       );
//       if (paises) {
//         dispatch(countryName(pais));
//       }

//     }
//   };
//   return (
//     <div>
//       <div>
//         <form onSubmit={onSearch}>
//           <label htmlFor="pais">Ingrese el nombre de un pais para buscar</label>
//           <input type="text" value={pais} onChange={change} />
//           <button>Buscar</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { countryName } from "../../Redux/Actions/actions";

const SearchBar = () => {
  const [pais, setPais] = useState("");
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  const change = ({ target }) => {
    setPais(target.value);
  };

  const onSearch = (e) => {
    // Include the event parameter
    e.preventDefault(); // Prevent the default form submission behavior
    if (!pais.length) {
      alert("Debe ingresar al menos un caracter");
    } else {
      const paises = countries.find(
        (c) => c.name.toLowerCase().includes(pais.toLowerCase()) // Fix the typo
      );
      if (paises) {
        dispatch(countryName(pais));
      }
      setPais("");
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={onSearch}>
          <label htmlFor="pais">Ingrese el nombre de un país para buscar</label>
          <input type="search" name="search" value={pais} onChange={change} />
          <button type="submit" onClick={onSearch}>
            Buscar
          </button>{" "}
          {/* Specify type="submit" for the button */}
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
