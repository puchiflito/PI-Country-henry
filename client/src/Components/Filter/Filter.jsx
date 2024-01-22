import { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import Boton from "./Boton";
import Modelo from "./Modelo";
const Filter = ({ setPaginaActual, nCountries }) => {
  const dispatch = useDispatch();
  const allActivity = useSelector((state) => state.allActivities);
  const allCountries = [
    "All",
    ...new Set(nCountries.map((country) => country.continents)),
  ];

  const [continents, setContinents] = useState(allCountries);
  const [countries, setCountries] = useState(nCountries);

  const filtradoContinente = (continents) => {
    continents === "All" ? setContinents(allCountries) : "";

    const filterContinents = nCountries.filter(
      (continent) => continent.continents === continents
    );
    setCountries(filterContinents);
  };

  const fltrado = () => {};
  return (
    <div>
      <Boton continents={continents} filtradoContinente={filtradoContinente} />
      <Modelo countries={countries} />
    </div>
  );
};

export default Filter;
