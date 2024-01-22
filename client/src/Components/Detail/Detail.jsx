import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { countyId, getActivities } from "../../Redux/Actions/actions";
import style from "../CSS/Detail.module.css";
const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const country = useSelector((state) => state.country);
  useEffect(() => {
    dispatch(countyId(id));
    if (country?.Activity) dispatch(getActivities());
  }, [id, dispatch]);
  return (
    <div className={style.div}>
      <div className={style.card}>
        <img src={country.image} alt="imagen de la bandera" />
        <div className={style.card_contenet}>
          <h3>Name: {country.name}</h3>
          <h3>ID: {country.id}</h3>
          <h3>Continents: {country.continents}</h3>
          <h3>SubRegion: {country.subregion}</h3>
          <h3>Area: {country.area}</h3>
          <h3>Population:{country.population}</h3>
        </div>
      </div>

      {
        //ACTIVIDADES
      }
      <div className={style.card}>
        <h3>Actividad que hiciste en esete pais</h3>
        {country &&
          country.Activities &&
          country.Activities.map((act) => {
            return (
              <div key={act.id} className={style.card_contenet}>
                <h4>
                  Name: <span>{act.name}</span>
                </h4>
                <h4>
                  Difficulty: <span>{act.difficulty}</span>
                </h4>
                <h4>
                  Duration: <span>{act.duration}</span>
                </h4>
                <h4>
                  Season: <span>{act.season}</span>
                </h4>
              </div>
            );
          })}
      </div>
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
