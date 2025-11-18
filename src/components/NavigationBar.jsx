import Logo from "../assets/Logo5.png";
import menuIcon from "../assets/menu.png";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <nav className="w-full bg-[#0C3C34] relative flex items-center justify-between px-6 h-[90px]">
      {/* Menú hamburguesa (solo móvil) */}
      <button
        aria-label="Menú"
        className="bg-transparent border-none p-0 m-0 outline-none transition-transform duration-200 hover:scale-110"
      >
        <img src={menuIcon} alt="Menú" className="h-10 w-10" />
      </button>

      {/* LOGO CENTRADO SIEMPRE */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-2">
        {/*Disminuye el tamaño del logo al encoger la pantalla*/}
        <img src={Logo} alt="Logo Pawpets" className="w-[100px] h-[100px]" />

        {/* ocultamos el texto en móvil */}
        <span className="font-poppins font-bold text-[32px] text-white">
          PawPets
        </span>
      </div>

      {/* BOTONES de escritorio (ocultos en móvil) */}
      <div className="hidden lg:flex gap-3 ml-auto">
        <Button aria-label="Inicio">
          <Link to="/">Inicio</Link>
        </Button>
        <Button aria-label="Catálogo">
          <Link to="/catalogo">Catálogo</Link>
        </Button>
        <Button aria-label="Fichas">
          <Link to="/fichas">Fichas</Link>
        </Button>
        <Button aria-label="Administrador">
          <Link to="/admin">Admin</Link>
        </Button>
      </div>
    </nav>
  );
}

export default NavigationBar;
