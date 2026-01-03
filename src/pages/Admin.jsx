/**
 * Página de administración
 * - Muestra el panel y la navegación interna.
 * - Renderiza las subrutas (formularios) con <Outlet />.
 */
import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";

function Admin() {
  const navigate = useNavigate();
  const [mostrarBoton, setMostrarBoton] = useState(true);

  return (
    <>
      <h1 className="text-3xl font-bold text-[var(--colorprimary)] mb-2 text-center">
        Página de Administración
      </h1>

      <p className="text-center mb-6">
        Aquí podrás gestionar los datos de la aplicación.
      </p>
      {mostrarBoton && (
        <div className="flex justify-center mb-8">
          <button
            type="button"
            onClick={() => {
              navigate("animalformcont");
              setMostrarBoton(false);
            }}
            className="px-4 py-2 rounded-md border border-[var(--colorblack-1)] bg-[var(--colorcta)] hover:bg-[var(--colorcta-hover)] font-semibold"
          >
            Formulario adopción
          </button>
        </div>
      )}

      <Outlet />
    </>
  );
}

export default Admin;
