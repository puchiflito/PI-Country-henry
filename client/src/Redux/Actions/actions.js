const ALLCOUNTRIES = "ALLCOUNTRIES";
const COUNTRYID = "COUNTRYID";
const COUNTRYNAME = "COUNTRYNAME";
const ALLACTIVTIES = "ALLACTIVTIES";
const POSTACTIVITIES = "POSTACTIVITIES";
const FILTER_CONTINENT = "FILTER_CONTINENT";
const FILTER_ACTIVITY = "FILTER_ACTIVITY";
const ORDER_NAME = "ORDER_NAME";
const ORDER_POPULATIONN = "ORDER_POPULATIONN";
const RESET_FILTER = "RESET_FILTER";

const urlCountries = "http://localhost:3001/countries";
const urlActivities = "http://localhost:3001/activities";
const allCountries = () => {
  // la ruta de los paises
  //pasarlo a json
  //mandar los paises al front
  return async (dispatch) => {
    try {
      const res = await fetch(urlCountries);
      const countries = await res.json();
      dispatch({ type: ALLCOUNTRIES, payload: countries });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

const countyId = (id) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${urlCountries}/${id}`);
      const country = await res.json();
      dispatch({ type: COUNTRYID, payload: country });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

const countryName = (name) => {
  return async (dispatch) => {
    try {
      const res = await fetch(`${urlCountries}?name=${name}`);
      const data = await res.json();
      dispatch({ type: COUNTRYNAME, payload: data });
    } catch (error) {
      console.log("No se encontro nada con lo que usted ingreso, ", error);
    }
  };
};

const getActivities = () => {
  return async (dispatch) => {
    try {
      const res = await fetch(urlActivities);
      const data = await res.json();
      dispatch({ type: ALLACTIVTIES, payload: data });
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

const postActivity = (newActivity) => {
  return async (dispatch) => {
    try {
      const res = await fetch(urlActivities, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newActivity),
      });

      if (!res.ok) {
        throw new Error("Esta vacio");
      }
      const activity = await res.json();
      if (activity) {
        dispatch({ type: POSTACTIVITIES, payload: activity });
      }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  };
};

const filterContinent = (continent) => {
  return {
    type: FILTER_CONTINENT,
    payload: continent,
  };
};

const filterActivity = (activity) => {
  return {
    type: FILTER_ACTIVITY,
    payload: activity,
  };
};

const orderName = (payload) => {
  return {
    type: ORDER_NAME,
    payload: payload,
  };
};

const orderPopulation = (payload) => {
  return {
    type: ORDER_POPULATIONN,
    payload: payload,
  };
};

const resetFilter = () => {
  return {
    type: RESET_FILTER,
  };
};
export {
  allCountries,
  ALLCOUNTRIES,
  countyId,
  COUNTRYID,
  countryName,
  COUNTRYNAME,
  getActivities,
  ALLACTIVTIES,
  postActivity,
  POSTACTIVITIES,
  filterContinent,
  FILTER_CONTINENT,
  filterActivity,
  FILTER_ACTIVITY,
  orderName,
  ORDER_NAME,
  orderPopulation,
  ORDER_POPULATIONN,
  resetFilter,
  RESET_FILTER,
};
