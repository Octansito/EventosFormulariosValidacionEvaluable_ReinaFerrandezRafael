import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./assets/index.css";

import { BrowserRouter } from "react-router-dom";

/**
 * La navegación debe estar envuelta por <BrowserRouter> para permitir el control del historial y la navegación sin recargar la página.
 * Por este motivo, en main.jsx coloco <BrowserRouter> envolviendo a <App />, de forma que todas las rutas declaradas con <Route> y <Routes> funcionen correctamente.
 */
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
