import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

// páginas
import Home from "./pages/Home";
import Catalogo from "./pages/Catalogo";
import Fichas from "./pages/Fichas";
import Admin from "./pages/Admin.jsx";

/**
 *  Componente principal de la aplicación PawPets
 *  Es el punto de entrada principal donde se combinan y muestran los diferentes componentes de la aplicación
 */
function App() {
  return (
    <>
      <NavigationBar />
      <main>
        <Routes>
          {/*Página inicio*/}
          <Route path="/" element={<Home />} />
          {/*Página Catálogo*/}
          <Route path="/catalogo" element={<Catalogo />} />
          {/*Página FichasAnimales*/}
          <Route path="/fichas" element={<Fichas />} />
          {/*Admin*/}
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
