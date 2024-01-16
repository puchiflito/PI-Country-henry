import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { countyId } from "../../Redux/Actions/actions";
import style from "../CSS/Detail.module.css";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  useEffect(() => {
    dispatch(countyId(id));
  }, [id, dispatch]);
  return (
    <div className={style.card}>
      <img src={country.image} alt="imagen de la bandera" />
      <h2>Name: {country.name}</h2>
      <h3>ID: {country.id}</h3>
      <h3>Continents: {country.continents}</h3>
      <h3>SubRegion: {country.subregion}</h3>
      <h3>Area: {country.area}</h3>
      <h3>Population:{country.population}</h3>
    </div>
  );
};

export default Detail;

// const { id } = useParams();
// const [countries, setCountries] = useState({});
// const country = async () => {
//   try {
//     const res = await fetch(`http://localhost:3001/countries/${id}`);
//     const data = await res.json();
//     if (data.name) {
//       setCountries(data);
//       console.log(data);
//     } else {
//       return alert("No hay pais con ese ID");
//     }
//   } catch (error) {
//     console.log("ERROR: ", error);
//   }
// };
// useEffect(() => {
//   country();
// }, [id]);
