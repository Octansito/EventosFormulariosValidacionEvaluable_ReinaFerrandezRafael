import Contenedor from "../components/Contenedor";

/**
 * Página de inicio de la aplicación de PawPets
 *
 */
function Home() {
  return (
    <Contenedor>
      <main className="text-center py-20">
        <h1 className="font-poppins text-4xl font-bold text-[var(--colorprimary)] mb-4">
          Bienvenido a PawPets 🐾
        </h1>

        <p className="text-lg text-[var(--colorgrey-3)] max-w-[600px] mx-auto">
          Tu protectora de confianza. Aquí podrás conocer a todos los animales
          disponibles para adopción y descubrir sus historias.
        </p>
      </main>
    </Contenedor>
  );
}

export default Home;
