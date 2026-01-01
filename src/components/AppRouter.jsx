import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Catalogo from "../pages/Catalogo";
import Fichas from "../pages/Fichas";
import Admin from "../pages/Admin";
import Contenedor from "./Contenedor";
import Login from "../pages/Login.jsx";

/**
 *
 * @returns
 */
function AppRouter() {
  return (
    <Routes>
      <Route element={<Contenedor />}>
        <Route path="/" element={<Home />} />
        <Route path="/inicio" element={<Navigate to="/" />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/fichas" element={<Fichas />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
      </Route>

      {/**Ruta 404 */}
      <Route
        path="*"
        element={
          <Contenedor titulo="Página no encontrada">
            <p>La ruta a la que desea acceder no existe</p>
          </Contenedor>
        }
      />
    </Routes>
  );
}

export default AppRouter;
