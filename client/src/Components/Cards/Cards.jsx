import { useEffect, useState } from "react";
import Card from "../Card/Card";
import { useDispatch, useSelector } from "react-redux";
import { allCountries } from "../../Redux/Actions/actions";
import Pruebas from "../../../pruebas";

const Cards = () => {
  // const [pais, setPais] = useState([]);

  // useEffect(() => {
  //   const countries = async () => {
  //     try {
  //       const res = await fetch("http://localhost:3001/countries");
  //       if (!res.ok) {
  //         throw new Error("Error con la peticion");
  //       }
  //       const data = await res.json();
  //       setPais(data);
  //     } catch (error) {
  //       console.log("ERROR: ", error);
  //     }
  //   };
  //   countries();
  // }, []);
  // es el encargado de enviar a redux
  const dispatch = useDispatch();
  // acceder al estado de todos los paises de redux
  const country = useSelector((state) => state.countries);

  // lo dejo cargado con useEffect
  useEffect(() => {
    dispatch(allCountries(country));
  }, [dispatch]);
  return (
    <div>
      <h3>Para ver toda laa info de un pais, presione sobre ella</h3>
      {country.map((country) => (
        <Card
          key={country.id} // Asegúrate de tener una propiedad única para la clave (key) al utilizar map.
          id={country.id}
          name={country.name}
          image={country.image}
          continents={country.continents}
          subregion={country.subregion}
          area={country.area}
          population={country.population}
        />
      ))}
      <Pruebas countries={country} />
      {/* <Card
        id={country.id}
        name={country.name}
        image={country.image}
        continents={country.continents}
        subregion={country.subregion}
        area={country.area}
        population={country.population}
      /> */}
    </div>
  );
};

export default Cards;

// import Card from "../Card/Card";

// const Cards = ({ countries }) => {
//   return (
//     <div>
//       {countries.map((country) => (
//         <Card
//           key={country.id} // Asegúrate de tener una propiedad única para la clave (key) al utilizar map.
//           id={country.id}
//           name={country.name}
//           image={country.image}
//           continents={country.continents}
//           subregion={country.subregion}
//           area={country.area}
//           population={country.population}
//         />
//       ))}
//     </div>
//   );
// };

// export default Cards;
