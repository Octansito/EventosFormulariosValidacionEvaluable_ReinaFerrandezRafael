import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuth from "../auth/useAuth";

/**
 * Page Login de Pawpets que controla la inserción de datos por parte del usuario
 * y maneja el estado de inicio de sesión. Además, se da el toque estético de la protectora
 * @returns el page
 */
function Login() {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const { login } = useAuth();

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    // Credenciales demo
    if (user.trim() === "admin" && pass.trim() === "1234") {
      login(); // marca isAuth=true y guarda en localStorage
      navigate("/admin", { replace: true }); // siempre va a /admin
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <section className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Accede a tu cuenta</h1>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <label className="flex flex-col gap-1">
          Usuario:
          <input
            value={user}
            onChange={(e) => setUser(e.target.value)}
            required
            autoComplete="username"
            className="border rounded px-3 py-2"
          />
        </label>

        <label className="flex flex-col gap-1">
          Contraseña:
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            required
            autoComplete="current-password"
            className="border rounded px-3 py-2"
          />
        </label>

        <button type="submit" className="border rounded px-4 py-2">
          Login
        </button>
      </form>
    </section>
  );
}
export default Login;
