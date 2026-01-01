import { useContext } from "react";
import { AuthContext } from "./AuthContext";

/**
 * Hook personalizado que simplifica el acceso al AuthContext.
 * Devuelve el objeto del contexto con:
 * - isAuth: boolean (si el usuario está autenticado)
 * - login(): función para iniciar sesión
 * - logout(): función para cerrar sesión
 */

function useAuth() {
  return useContext(AuthContext);
}
export default useAuth;
