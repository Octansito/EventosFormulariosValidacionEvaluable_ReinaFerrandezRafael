import NavigationBar from "./NavigationBar";
import Logo from "../assets/Logo5.png";

function Header() {
  return (
    <header className="bg-[var(--colorprimary)] w-full relative" role="banner">
      <div className="max-w-7xl mx-auto px-6 h-[45px] sm:h-[60px] lg:h-[90px] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Logo Pawpets"
            className="w-[60px] h-[60px] sm:w-[70px] sm:h-[70px] lg:w-[90px] lg:h-[90px]"
          />
          <h1 className="font-heading-h1 text-white">PawPets</h1>
        </div>
        <div>
          <NavigationBar />
        </div>
      </div>
    </header>
  );
}

export default Header;
