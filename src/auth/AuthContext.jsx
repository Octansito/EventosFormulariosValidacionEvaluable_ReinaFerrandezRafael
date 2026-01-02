import { createContext, useEffect, useState } from "react";

/**
 * AuthContext
 * Permite compartir en toda la app el estado de autenticación del usuario
 * y las acciones login() y logout().
 */
export const AuthContext = createContext(null);

/** Clave usada en localStorage para guardar el estado de autenticación */
const LS_KEY = "pawpets_isAuth";

function AuthProvider({ children }) {
  // Estado del usuario (autenticado o no)
  const [isAuth, setIsAuth] = useState(false);

  // Al cargar la app, recupera el estado desde localStorage
  useEffect(() => {
    setIsAuth(localStorage.getItem(LS_KEY) === "true");
  }, []);

  // Marca al usuario como autenticado y guarda en localStorage
  const login = () => {
    setIsAuth(true);
    localStorage.setItem(LS_KEY, "true");
  };

  // Marca al usuario como no autenticado y guarda en localStorage
  const logout = () => {
    setIsAuth(false);
    localStorage.setItem(LS_KEY, "false");
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
