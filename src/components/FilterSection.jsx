/**
 * Componente para mostrar los filtros del catálogo (especie, edad, tamaño, favoritos)
 *
 */
import { useState } from "react";
import Checkbox from "./CheckBox";

function FilterSection() {
  /**
   * Vairables para gaurdar el estado del checkbox
   * (desactivado --> false)
   */

  // Especie
  const [perro, setPerro] = useState(false);
  const [gato, setGato] = useState(false);
  const [adoptados, setAdoptados] = useState(false);

  // Edad
  const [edad1, setEdad1] = useState(false);
  const [edad2, setEdad2] = useState(false);
  const [edad3, setEdad3] = useState(false);

  // Tamaño
  const [peq, setPeq] = useState(false);
  const [med, setMed] = useState(false);
  const [gra, setGra] = useState(false);

  // Favoritos
  const [favoritos, setFavoritos] = useState(false);

  return (
    <section aria-label="Filtros de búsqueda">
      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-[24px] mb-2 text-[#000000]">
          Especie
        </h2>
        <Checkbox
          label="Perro"
          checked={perro}
          onChange={() => setPerro(!perro)}
        />
        <Checkbox label="Gato" checked={gato} onChange={() => setGato(!gato)} />
        <Checkbox
          label="Adoptados"
          checked={adoptados}
          onChange={() => setAdoptados(!adoptados)}
        />
      </div>

      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-[24px] mb-2 text-[#000000]">
          Edad
        </h2>
        <Checkbox
          label="1-3 años"
          checked={edad1}
          onChange={() => setEdad1(!edad1)}
        />
        <Checkbox
          label="3-10 años"
          checked={edad2}
          onChange={() => setEdad2(!edad2)}
        />
        <Checkbox
          label="+10 años"
          checked={edad3}
          onChange={() => setEdad3(!edad3)}
        />
      </div>

      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-[24px] mb-2 text-[#000000]">
          Tamaño
        </h2>
        <Checkbox label="Pequeño" checked={peq} onChange={() => setPeq(!peq)} />
        <Checkbox label="Mediano" checked={med} onChange={() => setMed(!med)} />
        <Checkbox label="Grande" checked={gra} onChange={() => setGra(!gra)} />
      </div>

      <div className="mb-6">
        <h2 className="font-poppins font-semibold text-[24px] mb-2 text-[#000000]">
          Favoritos
        </h2>
        <Checkbox
          label="Favoritos"
          checked={favoritos}
          onChange={() => setFavoritos(!favoritos)}
        />
      </div>
    </section>
  );
}

export default FilterSection;
