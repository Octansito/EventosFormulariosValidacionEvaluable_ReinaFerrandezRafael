import Contenedor from "../components/Contenedor";
/**
 *
 * @returns Página de administración
 */
function Admin() {
  return (
    <Contenedor>
      <main aria-label="Panel de administración" className="py-10">
        <h1 className="text-3xl font-bold text-[var(--colorprimary)] mb-6">
          Página de Administración
        </h1>

        <section className="text-lg text-[var(--colorgrey-1)]">
          <p>Aquí podrás gestionar los datos de la aplicación.</p>
        </section>
      </main>
    </Contenedor>
  );
}

export default Admin;
