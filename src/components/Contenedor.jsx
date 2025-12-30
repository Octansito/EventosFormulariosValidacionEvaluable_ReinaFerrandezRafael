// /**
//  * Componente de layout principal.
//  * (Estructura intacta) Solo cambia estética: Tailwind + variables del theme.
//  */
// export default function Contenedor({ children }) {
//   return (
//     <div
//       className="min-h-screen bg-[var(--colorsecondary)]"
//       role="main"
//       id="contenido"
//       aria-label="Contenido principal"
//     >
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//         {children}
//       </div>
//     </div>
//   );

import { Outlet } from "react-router-dom";

/**
 * Componente del layout principal
 */

function Contenedor({ titulo }) {
  return (
    <main
      id="contenido"
      role="main"
      className="min-h-screen bg-[var(--colorsecondary)]"
      aria-label="Contenido principal"
    >
      <section
        aria-labelledby="main-section-title"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      >
        {titulo && (
          <h1
            id="main-section-title"
            className="font-heading-h1 text-[var(--colorprimary)]"
          >
            {titulo}
          </h1>
        )}
        <Outlet />
      </section>
    </main>
  );
}

export default Contenedor;
