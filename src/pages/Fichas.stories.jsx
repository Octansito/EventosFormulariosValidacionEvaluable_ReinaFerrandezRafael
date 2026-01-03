import Fichas from "./Fichas";
import { MemoryRouter, Routes, Route } from "react-router-dom";

export default {
  title: "PawPets/Fichas (Detalle)",
  component: Fichas,
  /**Generación automática de la documentación que conforma StroyBook */
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
};

/**
 * Decorator: envuelve Fichas en un Router y le inyecta location.state
 * para simular "venir desde el catálogo".
 */
const withLocationState = (animal) => (Story) =>
  (
    <MemoryRouter initialEntries={[{ pathname: "/fichas", state: animal }]}>
      <Routes>
        <Route path="/fichas" element={<Story />} />
      </Routes>
    </MemoryRouter>
  );

export const DetallePerro = {
  decorators: [
    withLocationState({
      nombre: "Luna",
      raza: "Mestiza",
      genero: "Hembra",
      edad: 3,
      ubicacion: "Elche",
      tamano: "mediano",
      chip: "Sí",
      numChip: "ES7A-93K2-LF82",
      imagen:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOtv3TRF9fW_TYao8EtoYiPyBK3u7upYuMg&s",
      descripcion:
        "Luna es una perrita sociable y cariñosa. Le encanta pasear, jugar con pelotas y aprender trucos nuevos. Está acostumbrada a convivir con personas y se adapta muy bien a un hogar tranquilo. (Texto largo de ejemplo para la ficha).",
      categoria: "perro",
    }),
  ],
};

export const DetalleGato = {
  decorators: [
    withLocationState({
      nombre: "Milo",
      raza: "Europeo",
      genero: "Macho",
      edad: 2,
      ubicacion: "Alicante",
      tamano: "pequeño",
      chip: "No",
      numChip: "",
      imagen:
        "https://www.purina.es/sites/default/files/2021-12/El_comportamiento_de_los_gatos%281%29_0_1.jpg",
      descripcion:
        "Milo es un gato curioso y juguetón, muy tranquilo en casa. Le gusta dormir al sol y recibir caricias cuando coge confianza. Ideal para un hogar paciente y con ganas de darle cariño. (Texto largo de ejemplo para la ficha).",
      categoria: "gato",
    }),
  ],
};

/* (Opcional) Story extra por si quieres enseñar el estado “sin datos” */
export const SinEstado = {
  decorators: [withLocationState(null)],
};
