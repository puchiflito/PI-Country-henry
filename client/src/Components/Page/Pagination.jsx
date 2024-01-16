const Pagination = ({ setPaginaActual, paginaActual, nPage }) => {
  const next = () => {
    paginaActual !== nPage
      ? setPaginaActual(paginaActual + 1)
      : alert("No hay mas paginas que mostrar");
  };
  const prev = () => {
    paginaActual !== 1
      ? setPaginaActual(paginaActual - 1)
      : alert("Estas en la primera pagina");
  };

  return (
    <div>
      <button onClick={prev}>Prev</button>
      <h3>
        {paginaActual} / {nPage}
      </h3>
      <button onClick={next}>Next</button>
    </div>
  );
};

export default Pagination;
