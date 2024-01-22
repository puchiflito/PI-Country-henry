import { Link } from "react-router-dom";
import style from "../CSS/LandingPage.module.css";
const LandingPage = () => {
  return (
    <div className={style.body}>
      <h1>Bienvenido a la APP de Paises</h1>
      <h3>
        Aqui podras buscar los paises que te gustan, podras crear y guardar las
        actividades que realizaste
      </h3>
      <Link to="/home">
        <button>Ingresar</button>
      </Link>
    </div>
  );
};

export default LandingPage;
