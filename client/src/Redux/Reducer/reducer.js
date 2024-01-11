import {
  ALLCOUNTRIES,
  COUNTRYID,
  COUNTRYNAME,
  ALLACTIVTIES,
  POSTACTIVITIES,
  FILTER_CONTINENT,
  FILTER_ACTIVITY,
  ORDER_NAME,
  ORDER_POPULATIONN,
  RESET_FILTER,
} from "../Actions/actions";
const initialState = {
  // dejamos como el arreglo original
  allCountries: [],
  allActivities: [],
  // usamos para modificarlo, por ordenar, por nombre, etc
  countries: [],
  country: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ALLCOUNTRIES:
      return {
        ...state,
        allCountries: action.payload,
        countries: action.payload,
      };
    case COUNTRYID:
      return {
        ...state,
        country: action.payload,
      };
    case COUNTRYNAME:
      return {
        ...state,
        countries: action.payload,
      };
    case ALLACTIVTIES:
      return {
        ...state,
        allActivities: action.payload,
      };
    case POSTACTIVITIES:
      return {
        ...state,
        allActivities: [...state.allActivities, action.payload],
      };
    case FILTER_CONTINENT:
      const { continent } = action.payload;
      const all_countries = state.allCountries;
      // si desde ell front elijen esta opcion
      if (continent === "All Continents") {
        return { ...state, countries: all_countries };
      } else {
        const filter = all_countries.filter((c) => c.continent === continet);
        return { ...state, counntries: filter };
      }
    case FILTER_ACTIVITY:
      const { activity } = action.payload;
      // lo mismo, que filter continent
      if (activity === "All Activities") {
        return { ...state, counntries: state.allCountries };
      } else {
        const filter = state.allCountries.filter(
          (c) =>
            c.Activities &&
            c.Activities.some((activity) => activity.name === activity)
        );
        return { ...state, counntries: filter };
      }
    case ORDER_NAME:
      const order = payload === "from A to Z" ? 1 : -1;

      // Realizamos una copia del array original de países
      // Esto garantiza que no modificamos el estado original directamente y trabajamos sobre una copia
      const orderName = [...state.countries].sort((a, b) => {
        const nameA = a.name.toUpperCase();
        const nameB = b.name.toUpperCase();

        if (nameA < nameB) {
          return -1 * order;
          // Si a viene antes que b, devolvemos -1 para que a se ubique antes que b (orden ascendente) o después que b (orden descendente)
        }
        if (nameA > nameB) {
          return 1 * order;
          // Si a viene después que b, devolvemos 1 para que a se ubique después de b (orden ascendente) o antes que b (orden descendente)
        }
        return 0; // Si los nombres son iguales, no se cambia el orden
      });

      return {
        ...state,
        countries: orderName,
      };
    case ORDER_POPULATIONN:
      const orderPopulation =
        payload === "asc"
          ? [...state.countries].sort((a, b) => a.population - b.population)
          : [...state.countries].sort((a, b) => b.population - a.population);

      return {
        ...state,
        countries: orderPopulation,
      };
    case RESET_FILTER:
      return {
        ...state,
        // a countries le damos el valor origginal del arreglo de country
        counntries: state.allCountries,
      };
    default:
      return state;
  }
};

export default reducer;
