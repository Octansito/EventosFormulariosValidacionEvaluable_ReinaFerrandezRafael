import Contenedor from "../components/Contenedor";
/**
 *
 * @returns Página de administración
 */
function Admin() {
  return (
    <>
      <h1 className="text-3xl font-bold text-[var(--colorprimary)] mb-6 text-center">
        Página de Administración
      </h1>

      <section className="text-lg text-[var(--colorgrey-1)] text-center">
        <p>Aquí podrás gestionar los datos de la aplicación.</p>
      </section>
    </>
  );
}

export default Admin;
