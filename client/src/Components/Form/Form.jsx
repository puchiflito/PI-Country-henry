import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allCountries } from "../../Redux/Actions/actions";
import validation from "./validation";
import axios from "axios";
import style from "../CSS/Form.module.css";

const Form = () => {
  // traigo datos desde redux
  const dispatch = useDispatch();
  const all_Countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(allCountries());
  }, [dispatch]);

  const [newActivity, setnewActivity] = useState({
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    countries: [],
  });

  const [error, setError] = useState({});

  const [selectedCountries, setSelectedCountries] = useState([]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setError(validation({ ...newActivity, [name]: value }));
    setnewActivity({ ...newActivity, [name]: value });
  };

  const handleCountrySelect = (event) => {
    const countrySelect = event.target.value;

    setSelectedCountries([...selectedCountries, countrySelect]);

    setnewActivity({
      ...newActivity,
      countries: [...newActivity.countries, countrySelect],
    });

    setError({ ...error, countries: "" });
  };

  const handleRemoveCountry = (country) => {
    setSelectedCountries(selectedCountries.filter((c) => c !== country));

    setnewActivity({
      ...newActivity,
      countries: newActivity.countries.filter((c) => c !== country),
    });
  };

  const compareCountries = (a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:3001/activities", newActivity);

      setnewActivity({
        name: "",
        difficulty: "",
        duration: "",
        season: "",
        countries: [],
      });
      setSelectedCountries([]);
      alert("Actividad creada");
    } catch (error) {
      console.log("ERROR:  ", error);
    }

    //
    // axios
    //   .post(`http://localhost:3001/activities`, newActivity, {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //   .then((response) => {
    //     if (!response.data) {
    //       throw new Error("Error al crear la actividad");
    //     }

    //     // Si la operación es exitosa, manda los datos y limpia el formulario
    //     setnewActivity({
    //       name: "",
    //       difficulty: "",
    //       duration: "",
    //       season: "",
    //       countries: [],
    //     });

    //     // Limpiar los países seleccionados
    //     setSelectedCountries([]);

    //     alert("Actividad turística creada!");
    //   })
    //   .catch((error) => {
    //     console.log(error.message);
    //   });

    //   axios
    //     .post(`http://localhost:3001/activities`)
    //     .then((response) => {
    //       if (!response.data) {
    //         throw new Error("Error al crear la actividad");
    //       }

    //       // Si la operacion es exitosa manda los datos y limpia el form
    //       setnewActivity({
    //         name: "",
    //         difficulty: "",
    //         duration: "",
    //         season: "",
    //         countries: [],
    //       });
    //       console.log("ACTIVITY DENTRO DEL AXIOS: ", newActivity);
    //       // Limpiar los países seleccionados
    //       setSelectedCountries([]);

    //       alert("Actividad turistica creada!");

    //       setTimeout(() => {
    //         navigate("/home");
    //       }, 1000);
    //     })
    //     .catch((error) => {
    //       console.log(error.message);
    //     });
  };

  return (
    <div className={style.container}>
      <div className={style.h3}>
        <h3>Crea la actividad que realizaste</h3>
      </div>
      <div className={style.form}>
        <form onSubmit={handleSubmit}>
          <div className={style.form_input}>
            <label>Name:</label>
            <input
              type="text"
              placeholder="Enter name..."
              value={newActivity.name}
              name="name"
              onChange={handleInputChange}
            />
          </div>
          {error.name && <p className={style.error_message}>{error.name}</p>}

          <div className={style.form_input}>
            <label>Difficulty:</label>
            <select
              name="difficulty"
              value={newActivity.difficulty}
              onChange={handleInputChange}
            >
              <option>Select difficulty...</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          {error.difficulty && (
            <p className={style.error_message}>{error.difficulty}</p>
          )}
          <div className={style.form_input}>
            <label>Duration:</label>
            <select
              name="duration"
              value={newActivity.duration}
              onChange={handleInputChange}
            >
              <option>Select duration...</option>
              <option value="1">1 hour</option>
              <option value="2">2 hour</option>
              <option value="3">3 hour</option>
              <option value="4">4 hour</option>
              <option value="5">5 hour</option>
              <option value="6">6 hour</option>
              <option value="7">7 hour</option>
              <option value="8">8 hour</option>
              <option value="9">9 hour</option>
              <option value="10">10 hour</option>
              <option value="11">11 hour</option>
              <option value="12">12 hour</option>
            </select>
          </div>
          {error.duration && (
            <p className={style.error_message}>{error.duration}</p>
          )}
          <div className={style.form_input}>
            <label>Season:</label>
            <select
              name="season"
              value={newActivity.season}
              onChange={handleInputChange}
            >
              <option>Select season...</option>
              <option value="Verano">Verano</option>
              <option value="Otoño">Otoño</option>
              <option value="Invierno">Invierno</option>
              <option value="Primavera">Primavera</option>
            </select>
          </div>
          {error.season && (
            <p className={style.error_message}>{error.season}</p>
          )}
          <div className={style.form_input}>
            <label>Add country:</label>
            <select
              value={newActivity.countries}
              name="countries"
              onChange={handleCountrySelect}
              multiple
            >
              <option>Select countries...</option>
              {all_Countries.sort(compareCountries).map((country) => (
                <option key={country.id} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>
          {error.countries && (
            <p className={style.error_message}>{error.countries}</p>
          )}
          {/* Lista de países seleccionados */}
          <div className={style.img}>
            {selectedCountries.map((countryId) => {
              const country = all_Countries.find((c) => c.id === countryId);
              return (
                <div key={countryId} className={style.country}>
                  <div className={style.btn_country}>
                    <button
                      type="button"
                      onClick={() => handleRemoveCountry(countryId)}
                    >
                      X
                    </button>
                  </div>
                  <img src={country?.image || ""} alt={country?.name || ""} />
                  <h2>{country?.name || ""}</h2>
                </div>
              );
            })}
          </div>

          <button className={style.btn} type="submit">
            <span>Create</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

// const handleSubmit = (e) => {
//   e.preventDefault();

//   axios
//     .post(postActivity, newActivity)
//     .then((response) => {
//       if (!response.data) {
//         throw new Error("Error al crear la actividad");
//       }

//       // Si la operacion es exitosa manda los datos y limpia el form
//       setnewActivity({
//         name: "",
//         difficulty: "",
//         duration: "",
//         season: "",
//         countries: [],
//       });
//       // Limpiar los países seleccionados
//       setSelectedCountries([]);

//       alert("Actividad turistica creada!");

//       setTimeout(() => {
//         navigate("/home");
//       }, 1000);
//     })
//     .catch((error) => {
//       console.log(error.message);
//     });
// };
