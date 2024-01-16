import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCountries } from "../../Redux/Actions/actions";
import Pagination from "./Pagination";
import Cards from "../Cards/Cards";

const AppPage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const [limiteDeDatos, setLimiteDeDatos] = useState(10);
  const [paginaActual, setPaginaActual] = useState(1);
  useEffect(() => {
    dispatch(allCountries(countries));
  }, []);
  const indiceFinal = paginaActual * limiteDeDatos;
  const indiceInicial = indiceFinal - limiteDeDatos;
  const nCountries = countries.slice(indiceInicial, indiceFinal);
  const nPage = Math.ceil(countries.length / limiteDeDatos);
  return (
    <div>
      <Cards nCountries={nCountries} />
      <Pagination
        setPaginaActual={setPaginaActual}
        paginaActual={paginaActual}
        nPage={nPage}
      />
    </div>
  );
};

export default AppPage;
