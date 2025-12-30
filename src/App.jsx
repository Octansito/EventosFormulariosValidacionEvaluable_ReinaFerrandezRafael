import Header from "./components/Header";
import Footer from "./components/Footer";
import AppRouter from "./components/AppRouter";

/**
 *  Componente principal de la aplicación PawPets
 *  Es el punto de entrada principal donde se combinan y muestran los diferentes componentes de la aplicación
 */
function App() {
  return (
    <>
      <Header />
      <AppRouter />
      <Footer />
    </>
  );
}

export default App;
