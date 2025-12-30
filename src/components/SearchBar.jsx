/**
 * Elemento de barra de búsqueda reutilizable
 * @param {object} props - Propiedades del componente.
 * @param {string} props.searchTerm - El término de búsqueda actual.
 * @param {function} props.onSearchChange - Función para actualizar el término de búsqueda.
 * @param {string} [props.placeholder] - Texto placeholder del input.
 */

function SearchBar({
  searchTerm,
  onSearchChange,
  placeholder = "Buscar animal...",
}) {
  return (
    <div className="mb-8 w-full max-w-lg mx-auto">
      <label htmlFor="search-input" className="sr-only">
        {placeholder}
      </label>
      <input
        id="search-input"
        type="text"
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full p-3
                    border-2 border-[var(--colorgrey-5)]
                    rounded-lg
                    shadow-inner
                    bg-[var(--colorwhite)]
                    text-[var(--colorgrey-1)]
                    placeholder:text-[var(--colorgrey-4)]
                    focus:outline-none
                    focus:ring-2 focus:ring-[var(--colorprimary)]
                    focus:border-[var(--colorprimary)]
                    transition duration-150 ease-in-out"
        aria-label={placeholder}
      />
    </div>
  );
}

export default SearchBar;
