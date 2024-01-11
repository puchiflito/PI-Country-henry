const Form = () => {
  const formInitial = {
    name: "",
    difficulty: "",
    duration: "",
    season: "",
    country: "",
  };
  return (
    <div>
      <h2>
        Vamos a crear las actividades que hiciste cuando visitaste ese pais
      </h2>
      <h2>Formulario</h2>
      <form>
        <label htmlFor="name">Nombre</label>
        <input
          type="text"
          placeholder="Ingrese el nombre de la actividad"
          id="name"
          name="name"
        />
        <label htmlFor="difficulty">Difficulty</label>
        <select name="difficulty" id="difficulty">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
        </select>
        <label htmlFor="duration">Duration</label>
        <select id="duration" name="duration">
          <option value="">Select duration...</option>
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
        <label htmlFor="season">Season</label>
        <input
          type="text"
          name="estacion"
          id="season"
          placeholder="Ingrese la estacion del año"
        />
        <label htmlFor="paises">Paises</label>
      </form>
    </div>
  );
};

export default Form;
