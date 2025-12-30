import Contenedor from "../components/Contenedor";

/**
 * Página de inicio de la aplicación de PawPets
 *
 */
function Home() {
  return (
    <>
      <h1 className="font-poppins text-center text-4xl font-bold text-[var(--colorprimary)] mb-4">
        Bienvenido a PawPets 🐾
      </h1>

      <p className="text-lg text-[var(--colorgrey-3)] max-w-[600px] mx-auto text-center">
        Tu protectora de confianza. Aquí podrás conocer a todos los animales
        disponibles para adopción y descubrir sus historias.
      </p>
    </>
  );
}

export default Home;
