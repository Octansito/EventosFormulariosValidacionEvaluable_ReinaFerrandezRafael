import Contenedor from "../components/Contenedor";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import favorito from "../assets/favorito.svg";
import favoritoRed from "../assets/favorito-red.svg";
import Button from "../components/Button";

/**
 *Página de fichas individuales de animales.
 *muestra el detalle completo del animal seleccionado desde el catálogo.
 */
function Fichas() {
  const { state: animal } = useLocation();
  /**
   * Estado de favs
   */
  const [esFavorito, setEsFavorito] = useState(false);

  // Si alguien entra a /fichas sin datos
  if (!animal) {
    return (
      <Contenedor>
        <main
          role="main"
          aria-label="Ficha no encontrada"
          className="text-center py-20"
        >
          <h1 className="text-3xl font-bold text-[var(--colorerror)]">
            No se encontró la ficha del animal
          </h1>
        </main>
      </Contenedor>
    );
  }

  return (
    <Contenedor>
      <main
        role="main"
        aria-label="Ficha del animal"
        className="flex flex-col lg:flex-row items-center lg:items-start gap-30"
      >
        {/* Columna izq --> imagen */}
        <section
          aria-label="Imagen del Animal"
          className="ml-100px w-full lg:w-[500px] flex justify-center"
        >
          <figure className="w-full h-full">
            <img
              src={animal.imagen}
              alt={`Imagen de ${animal.nombre}`}
              className="w-full h-full object-cover mb-[30px] mt-[30px] rounded-xl border-4 border-[var(--colorprimary)] shadow-lg"
            />
          </figure>
        </section>

        {/* Columna der --> datos */}
        <section
          aria-label="Informacion del Animal"
          className="flex-1 mt-[30px] gap-3 flex flex-col"
        >
          <header className="grid grid-cols-[3fr_1fr] items-start">
            {/* Columna izquierda */}
            <div className="flex flex-col gap-2">
              <h1 className="text-[50px] font-bold text-[var(--colorblack-1)]">
                Nombre: {animal.nombre}
              </h1>
              <h2 className="text-[28px] font-poppins font-semibold text-[var(--colorblack-1)]">
                Raza: {animal.raza}
              </h2>
            </div>

            {/* Columna derecha*/}
            <Button
              to="/catalogo"
              className="bg-[var(--colorgrey-5)] border border-[var(--colorblack-1)] text-[var(--colorblack-1)] hover:bg-[var(--colorgrey-6)] mt-[25px]"
            >
              Volver
            </Button>
          </header>

          {/* Lista de datos */}
          <ul
            aria-label="Datos del animal"
            className="text-xl text-[25px] text-[var(--colorblack-1)] font-nunito space-y-1 flex flex-col gap-2"
          >
            <li>
              <b>Edad:</b> {animal.edad}
            </li>
            <li>
              <b>Sexo:</b> {animal.genero}
            </li>
            <li>
              <b>Ubicación:</b> {animal.ubicacion}
            </li>
            <li>
              <b>Tamaño:</b> {animal.tamano}
            </li>
            <li className="flex gap-6">
              <span>
                <b>Chip:</b> {animal.chip}
              </span>
              <span>
                <b>Num:</b> {animal.numChip}
              </span>
            </li>
          </ul>

          {/* Descripción */}
          <article
            aria-label="Descripción del animal"
            className="border border-[var(--colorprimary)] bg-[var(--coloraccent)] rounded-xl p-4 mt-6"
          >
            <h3 className="font-poppins font-semibold text-2xl text-[var(--colorblack-1)] mb-2">
              Descripción:
            </h3>
            <p className="text-lg text-[var(--colorblack-1)] leading-relaxed">
              {animal.descripcion}
            </p>
          </article>

          {/* Sección botones */}
          <section
            aria-label="Acciones disponibles"
            className="flex items-center justify-between mt-6"
          >
            {/* Botón Adoptar */}
            <button className="bg-[var(--colorcta)] border border-[var(--colorblack-1)] rounded-lg px-4 py-2 text-[var(--colorblack-1)] font-semibold hover:bg-[var(--colorcta-hover)]">
              Adoptar
            </button>

            {/* Botón Favorito */}
            <button
              type="button"
              onClick={() => setEsFavorito(!esFavorito)}
              className="bg-transparent border-none p-0 focus:outline-none"
              aria-label={
                esFavorito ? "Quitar de favoritos" : "Marcar como favorito"
              }
            >
              <img
                src={esFavorito ? favoritoRed : favorito}
                alt=""
                aria-hidden="true"
                className="w-7 h-7 cursor-pointer transition"
              />
            </button>
          </section>
        </section>
      </main>
    </Contenedor>
  );
}

export default Fichas;
