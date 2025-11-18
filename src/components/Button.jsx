/**
 * Botón reutilizable en la app
 *
 * Con ${className} nos permite añadir estilos personalizados desde fuera manteniendo el estilo base
 */
import { Link } from "react-router-dom";

function Button({ children, to, className = "", ...rest }) {
  return (
    <button
      tabIndex={0}
      type="button"
      className={`
        bg-transparent border-none p-0 m-0 outline-none transition-transform duration-200 
        hover:scale-110 hover:underline hover:underline-offset-4 
        focus:scale-110 focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0C3C34] 
        rounded-lg font-poppins font-semibold text-white text-lg px-4 py-2
        ${className}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
export default Button;
