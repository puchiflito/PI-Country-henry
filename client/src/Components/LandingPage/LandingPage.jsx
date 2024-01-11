import { Link } from "react-router-dom";
import style from "../CSS/LandingPage.module.css";
const LandingPage = () => {
  return (
    <div className={style.body}>
      <h1>Bienvenido a la APP de Paises</h1>
      <h3>
        Aqui podras crear, buscar y guardar en la seccion de favoritos los
        paises que mas te gusten
      </h3>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
};

export default LandingPage;
