import Contenedor from "../components/Contenedor";
import FilterSection from "../components/FilterSection";
import PetList from "../components/PetList";

function Catalogo() {
  return (
    <>
      <header className="w-full mb-4">
        <h1 className="font-poppins font-semibold text-[36px] text-center text-[var(--colorprimary)] mt-6 mb-2">
          Nuestros animales en adopción 🐾
        </h1>
      </header>

      {/*Filtros + Catálogo*/}
      <section aria-label="Catálogo de animales" role="main" className="mt-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filtros */}
          <section
            aria-label="Filtros de búsqueda"
            className="w-full bg-[var(--colorwhite)] border-2 border-[var(--colorprimary)] rounded-xl shadow-md p-6 h-fit mx-auto lg:mx-0 lg:sticky lg:top-8 lg:max-w-[260px] lg:min-w-[200px]"
          >
            <FilterSection />
          </section>

          {/* CATÁLOGO */}
          <section
            aria-label="Listado de animales en adopción"
            className="flex-1 overflow-y-auto max-h-[75vh] pb-6 pr-6 pl-6"
          >
            <PetList />
          </section>
        </div>
      </section>
    </>
  );
}

export default Catalogo;
