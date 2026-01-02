import { Link } from "react-router-dom";
/**
 * Componente reutilizable que puede comportarse de 2 formas, es decir, se comporta
 * como enlace o botón normal
 */
function Button({ children, to, className = "", ...rest }) {
  const baseStyles = `
    inline-flex items-center justify-center
    rounded-lg font-poppins font-semibold text-lg
    px-3 py-1.5
    transition-transform duration-150
    hover:scale-[1.04] hover:opacity-90
    focus:outline-none focus:ring-2 focus:ring-[var(--colorprimary)]
  `;

  if (to) {
    return (
      <Link to={to} className={`${baseStyles} ${className}`} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={`${baseStyles} ${className}`} {...rest}>
      {children}
    </button>
  );
}

export default Button;
