import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage/LandingPage";
import Detail from "./Components/Detail/Detail";
import Form from "./Components/Form/Form";
import Home from "./Components/Home/Home";
import Pruebas from "../pruebas";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/form" element={<Form />} />
        <Route path="/prueba" element={<Pruebas />} />
      </Routes>
    </div>
  );
}

export default App;
