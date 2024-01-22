const Boton = ({ continents, filtradoContinente }) => {
  return (
    <div>
      {continents.map((c, index) => (
        <button key={index} onClick={() => filtradoContinente(c)}>
          {c}
        </button>
      ))}
    </div>
  );
};

export default Boton;
