const validation = (newActivity) => {
  const error = {};
  const regexName = /^[a-z ,.'-]+$/i;

  if (!newActivity.name) {
    error.name = "El nombre es requerido";
  } else if (!regexName.test(newActivity.name)) {
    error.name =
      "Nombre invalido!. Se permiten comas, espacios, tambien guiones";
  } else if (newActivity.name.lenngth > 20) {
    error.name =
      "El nombre de la actividad no debe superar los 20 caracteres. ";
  }

  !newActivity.difficulty
    ? (error.difficulty = "Este campo es requerido, gracias")
    : "";

  !newActivity.duration ? (error.duration = "Campo requerido") : "";

  !newActivity.season ? (error.season = "Campo requerido") : "";
  !newActivity.countries ? (error.countries = "Debe ingresar un pais") : "";

  return error;
};

export default validation;
