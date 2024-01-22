import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCountries, getActivities } from "../../Redux/Actions/actions";
import Pagination from "./Pagination";
import Cards from "../Cards/Cards";
import Filter from "../Filter/Filter";

const AppPage = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const activity = useSelector((state) => state.allActivities);
  const [limiteDeDatos, setLimiteDeDatos] = useState(10);
  const [paginaActual, setPaginaActual] = useState(1);
  useEffect(() => {
    dispatch(allCountries(countries));
    dispatch(getActivities(activity));
  }, [dispatch]);
  const indiceFinal = paginaActual * limiteDeDatos;
  const indiceInicial = indiceFinal - limiteDeDatos;
  const nCountries = countries.slice(indiceInicial, indiceFinal);
  const nPage = Math.ceil(countries.length / limiteDeDatos);
  return (
    <div>
      <Filter setPaginaActual={setPaginaActual} nCountries={nCountries} />
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
