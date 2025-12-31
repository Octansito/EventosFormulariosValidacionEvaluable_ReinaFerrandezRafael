import { useState } from "react";

const animalInfo = {
  nombre: "",
  raza: "",
  genero: "",
  edad: "",
  ubicacion: "",
  tamano: "",
  chip: "", // Sí o No
  numChip: "", // obligatorio si es === "Sí"
  imagen: "", // URL
  descripcion: "",
  categoria: "", // perro, gato, adoptado
};

// Validación de los datos del formulario
const validarDatosFormulario = (data) => {
  const errores = {};

  // Guardamos la respuesta de si, sí o no para la condición del chip
  const chip = data.chip?.trim().toLowerCase();

  // Para validar el tamaño
  const tamano = data.tamano.trim().toLowerCase();
  const tamanoPermitido = ["pequeño", "mediano", "grande"];

  // Para validar la categoria
  const categoria = data.categoria.trim().toLowerCase();
  const permitidas = ["perro", "gato", "adoptado"];

  if (!data.nombre || data.nombre.length < 3 || data.nombre.length > 15)
    errores.nombre = "El nombre no cumple con las especificaciones";

  if (!data.raza || data.raza.length < 5)
    errores.raza = "La raza el animal no cumple las especificaciones.";

  if (!data.genero) errores.genero = "El género es obligatorio";

  if (!data.edad || data.edad < 0 || data.edad > 22)
    errores.edad = "La edad no cumple las especificaciones";

  if (!tamano || !tamanoPermitido.includes(tamano)) {
    errores.tamano = "El tamaño debe ser: pequeño, mediano o grande";
  }

  // Valido si hay chip
  if (chip !== "si" && chip !== "no" && chip !== "sí") {
    errores.chip = "El chip debe ser Sí o No";
  }

  // Si tengo chip entonces el campo de numChip es obligatorio y se valida
  if (chip === "si" || chip === "sí") {
    const numChipLimpio = data.numChip.trim();
    if (!numChipLimpio) {
      errores.numChip = "El identificador del chip es obligatorio";
    } else {
      const patron = /^ES[A-Z0-9]{2}-[A-Z0-9]{4}-[A-Z0-9]{4}$/i;
      if (!patron.test(numChipLimpio)) {
        errores.numChip = "Formato inválido. Ej: ES7A-93K2-LF82";
      }
    }
  }

  if (!data.imagen || !data.imagen.startsWith("http")) {
    errores.imagen = "Debe ser una URL válida";
  }

  if (!data.descripcion || data.descripcion.length < 100)
    errores.descripcion =
      "La descripción no cumple las especificaciones. Minimo 100 caracteres";

  if (!categoria || !permitidas.includes(categoria)) {
    errores.categoria = "La categoría debe ser: perro, gato o adoptado";
  }

  return errores;
};

function FormControlado() {
  const [animalData, setAnimalData] = useState(animalInfo);
  const [animalErrores, setAnimalErrores] = useState({});

  /** Manejamos la actualización del estado agrupado de Animales */
  const handleAnimalChange = (e) => {
    const { id, value } = e.target;
    setAnimalData((prev) => ({
      ...prev,
      [id]: value,
    }));

    // Se limpia el error a tiempo real si el usuario corrige la información
    if (animalErrores[id]) {
      setAnimalErrores((prev) => ({
        ...prev,
        [id]: "",
      }));
    }
  };

  // Envío de la información introducida por el usuario
  const handleSubmit = (e) => {
    e.preventDefault();
    const errores = validarDatosFormulario(animalData);
    setAnimalErrores(errores);

    if (Object.keys(errores).length === 0) {
      console.log("Nuevo animal en la protectora:", animalData);
      alert(`Animal: ${animalData.nombre} enviado`);
      // Vaciamos la info del animal con la infoInicial
      setAnimalData(animalInfo);
    } else {
      console.log(
        "Errores de validación en la información insertada:",
        errores
      );
    }
  };

  // Diseño del formulario
  return (
    <section className="bg-[var(--colorwhite)] p-6 rounded-xl shadow-xl max-w-xl mx-auto w-full border border-[var(--colorgrey-5)]">
      <h3 className="text-2xl font-bold mb-6 text-[var(--colorprimary)] border-b border-[var(--colorgrey-5)] pb-2">
        Formulario Controlado Animales
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4" noValidate>
        {/* Nombre */}
        <div>
          <label
            htmlFor="nombre"
            className="block text-sm font-semibold text-[var(--colorblack-1)]"
          >
            Nombre
          </label>
          <input
            id="nombre"
            type="text"
            value={animalData.nombre}
            onChange={handleAnimalChange}
            required
            className={`mt-1 block w-full p-2 border ${
              animalErrores.nombre
                ? "border-[var(--colorerror)]"
                : "border-[var(--colorgrey-5)]"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--colorprimary)] focus:border-[var(--colorprimary)]`}
            aria-invalid={!!animalErrores.nombre}
            aria-describedby={
              animalErrores.nombre ? "error-nombre-animal" : undefined
            }
          />
          {animalErrores.nombre && (
            <p
              id="error-nombre-animal"
              className="mt-1 text-sm text-[var(--colorerror)]"
            >
              {animalErrores.nombre}
            </p>
          )}
        </div>

        {/* Raza */}
        <div>
          <label
            htmlFor="raza"
            className="block text-sm font-semibold text-[var(--colorblack-1)]"
          >
            Raza
          </label>
          <input
            id="raza"
            type="text"
            value={animalData.raza}
            onChange={handleAnimalChange}
            required
            className={`mt-1 block w-full p-2 border ${
              animalErrores.raza
                ? "border-[var(--colorerror)]"
                : "border-[var(--colorgrey-5)]"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--colorprimary)] focus:border-[var(--colorprimary)]`}
            aria-invalid={!!animalErrores.raza}
            aria-describedby={
              animalErrores.raza ? "error-raza-animal" : undefined
            }
          />
          {animalErrores.raza && (
            <p
              id="error-raza-animal"
              className="mt-1 text-sm text-[var(--colorerror)]"
            >
              {animalErrores.raza}
            </p>
          )}
        </div>

        {/* Género */}
        <div>
          <label
            htmlFor="genero"
            className="block text-sm font-semibold text-[var(--colorblack-1)]"
          >
            Género
          </label>
          <input
            id="genero"
            type="text"
            value={animalData.genero}
            onChange={handleAnimalChange}
            required
            className={`mt-1 block w-full p-2 border ${
              animalErrores.genero
                ? "border-[var(--colorerror)]"
                : "border-[var(--colorgrey-5)]"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--colorprimary)] focus:border-[var(--colorprimary)]`}
            aria-invalid={!!animalErrores.genero}
            aria-describedby={
              animalErrores.genero ? "error-genero-animal" : undefined
            }
          />
          {animalErrores.genero && (
            <p
              id="error-genero-animal"
              className="mt-1 text-sm text-[var(--colorerror)]"
            >
              {animalErrores.genero}
            </p>
          )}
        </div>

        {/* Edad */}
        <div>
          <label
            htmlFor="edad"
            className="block text-sm font-semibold text-[var(--colorblack-1)]"
          >
            Edad
          </label>
          <input
            id="edad"
            type="number"
            value={animalData.edad}
            onChange={handleAnimalChange}
            required
            className={`mt-1 block w-full p-2 border ${
              animalErrores.edad
                ? "border-[var(--colorerror)]"
                : "border-[var(--colorgrey-5)]"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--colorprimary)] focus:border-[var(--colorprimary)]`}
            aria-invalid={!!animalErrores.edad}
            aria-describedby={
              animalErrores.edad ? "error-edad-animal" : undefined
            }
          />
          {animalErrores.edad && (
            <p
              id="error-edad-animal"
              className="mt-1 text-sm text-[var(--colorerror)]"
            >
              {animalErrores.edad}
            </p>
          )}
        </div>

        {/* Ubicación */}
        <div>
          <label
            htmlFor="ubicacion"
            className="block text-sm font-semibold text-[var(--colorblack-1)]"
          >
            Ubicación
          </label>
          <input
            id="ubicacion"
            type="text"
            value={animalData.ubicacion}
            onChange={handleAnimalChange}
            className={`mt-1 block w-full p-2 border ${
              animalErrores.ubicacion
                ? "border-[var(--colorerror)]"
                : "border-[var(--colorgrey-5)]"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--colorprimary)] focus:border-[var(--colorprimary)]`}
            aria-invalid={!!animalErrores.ubicacion}
            aria-describedby={
              animalErrores.ubicacion ? "error-ubicacion-animal" : undefined
            }
          />
          {animalErrores.ubicacion && (
            <p
              id="error-ubicacion-animal"
              className="mt-1 text-sm text-[var(--colorerror)]"
            >
              {animalErrores.ubicacion}
            </p>
          )}
        </div>

        {/* Tamaño */}
        <div>
          <label
            htmlFor="tamano"
            className="block text-sm font-semibold text-[var(--colorblack-1)]"
          >
            Tamaño
          </label>
          <input
            id="tamano"
            type="text"
            value={animalData.tamano}
            onChange={handleAnimalChange}
            className={`mt-1 block w-full p-2 border ${
              animalErrores.tamano
                ? "border-[var(--colorerror)]"
                : "border-[var(--colorgrey-5)]"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--colorprimary)] focus:border-[var(--colorprimary)]`}
            aria-invalid={!!animalErrores.tamano}
            aria-describedby={
              animalErrores.tamano ? "error-tamano-animal" : undefined
            }
          />
          {animalErrores.tamano && (
            <p
              id="error-tamano-animal"
              className="mt-1 text-sm text-[var(--colorerror)]"
            >
              {animalErrores.tamano}
            </p>
          )}
        </div>

        {/* Chip */}
        <div>
          <label
            htmlFor="chip"
            className="block text-sm font-semibold text-[var(--colorblack-1)]"
          >
            ¿Tiene chip?
          </label>
          <select
            id="chip"
            value={animalData.chip}
            required
            onChange={handleAnimalChange}
            className={`mt-1 block w-full p-2 border ${
              animalErrores.chip
                ? "border-[var(--colorerror)]"
                : "border-[var(--colorgrey-5)]"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--colorprimary)] focus:border-[var(--colorprimary)]`}
            aria-invalid={!!animalErrores.chip}
            aria-describedby={animalErrores.chip ? "error-chip" : undefined}
          >
            <option value="">Selecciona…</option>
            <option value="Sí">Sí</option>
            <option value="No">No</option>
          </select>
          {animalErrores.chip && (
            <p
              id="error-chip"
              className="mt-1 text-sm text-[var(--colorerror)]"
            >
              {animalErrores.chip}
            </p>
          )}
        </div>

        {/* NumChip (solo si chip === Sí) */}
        {animalData.chip === "Sí" && (
          <div>
            <label
              htmlFor="numChip"
              className="block text-sm font-semibold text-[var(--colorblack-1)]"
            >
              Número de chip
            </label>
            <input
              id="numChip"
              type="text"
              value={animalData.numChip}
              onChange={handleAnimalChange}
              className={`mt-1 block w-full p-2 border ${
                animalErrores.numChip
                  ? "border-[var(--colorerror)]"
                  : "border-[var(--colorgrey-5)]"
              } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--colorprimary)] focus:border-[var(--colorprimary)]`}
              aria-invalid={!!animalErrores.numChip}
              aria-describedby={
                animalErrores.numChip ? "error-numChip" : undefined
              }
            />
            {animalErrores.numChip && (
              <p
                id="error-numChip"
                className="mt-1 text-sm text-[var(--colorerror)]"
              >
                {animalErrores.numChip}
              </p>
            )}
          </div>
        )}

        {/* Imagen */}
        <div>
          <label
            htmlFor="imagen"
            className="block text-sm font-semibold text-[var(--colorblack-1)]"
          >
            URL de imagen
          </label>
          <input
            id="imagen"
            type="url"
            value={animalData.imagen}
            onChange={handleAnimalChange}
            className={`mt-1 block w-full p-2 border ${
              animalErrores.imagen
                ? "border-[var(--colorerror)]"
                : "border-[var(--colorgrey-5)]"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--colorprimary)] focus:border-[var(--colorprimary)]`}
            aria-invalid={!!animalErrores.imagen}
            aria-describedby={animalErrores.imagen ? "error-imagen" : undefined}
          />
          {animalErrores.imagen && (
            <p
              id="error-imagen"
              className="mt-1 text-sm text-[var(--colorerror)]"
            >
              {animalErrores.imagen}
            </p>
          )}
        </div>

        {/* Descripción */}
        <div>
          <label
            htmlFor="descripcion"
            className="block text-sm font-semibold text-[var(--colorblack-1)]"
          >
            Descripción
          </label>
          <textarea
            id="descripcion"
            value={animalData.descripcion}
            onChange={handleAnimalChange}
            rows={4}
            className={`mt-1 block w-full p-2 border ${
              animalErrores.descripcion
                ? "border-[var(--colorerror)]"
                : "border-[var(--colorgrey-5)]"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--colorprimary)] focus:border-[var(--colorprimary)]`}
            aria-invalid={!!animalErrores.descripcion}
            aria-describedby={
              animalErrores.descripcion ? "error-descripcion" : undefined
            }
          />
          {animalErrores.descripcion && (
            <p
              id="error-descripcion"
              className="mt-1 text-sm text-[var(--colorerror)]"
            >
              {animalErrores.descripcion}
            </p>
          )}
        </div>

        {/* Categoría */}
        <div>
          <label
            htmlFor="categoria"
            className="block text-sm font-semibold text-[var(--colorblack-1)]"
          >
            Categoría
          </label>

          <select
            id="categoria"
            value={animalData.categoria}
            onChange={handleAnimalChange}
            required
            className={`mt-1 block w-full p-2 border ${
              animalErrores.categoria
                ? "border-[var(--colorerror)]"
                : "border-[var(--colorgrey-5)]"
            } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[var(--colorprimary)] focus:border-[var(--colorprimary)]`}
            aria-invalid={!!animalErrores.categoria}
            aria-describedby={
              animalErrores.categoria ? "error-categoria-animal" : undefined
            }
          >
            <option value="">Selecciona…</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
            <option value="adoptado">Adoptado</option>
          </select>

          {animalErrores.categoria && (
            <p
              id="error-categoria-animal"
              className="mt-1 text-sm text-[var(--colorerror)]"
            >
              {animalErrores.categoria}
            </p>
          )}
        </div>

        {/* Botón de envío */}
        <button
          type="submit"
          className="
            w-full py-2 px-4 rounded-md shadow-sm text-sm font-medium
            bg-[var(--colorprimary)] text-[var(--colorwhite)]
            hover:bg-[var(--colorprimary-hover)]
            focus:outline-none focus:ring-2 focus:ring-offset-2
            focus:ring-[var(--colorprimary)] focus:ring-offset-[var(--colorsecondary)]
            disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-[var(--colorprimary)]
            transition
          "
          disabled={Object.values(animalErrores).some((e) => e)}
        >
          Añadir Animal
        </button>
      </form>
    </section>
  );
}

export default FormControlado;
