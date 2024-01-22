const Modelo = ({ countries }) => {
  return (
    <div>
      {countries.map((c, index) => (
        <div key={index}>
          <img src={c.image} alt="imagen de la bandera del pais" />
          <h2>{c.name}</h2>
          <h2>{c.continents}</h2>
        </div>
      ))}
    </div>
  );
};

export default Modelo;
