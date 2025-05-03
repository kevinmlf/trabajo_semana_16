import { Nav } from "../../components/nav/nav";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Contact = () => {
  // Usamos navigate para poder redireccionar
  const navigate = useNavigate();

  // Estado para los datos del formulario
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Función para actualizar el estado cuando cambian los inputs
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Función que se ejecuta al enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que la página se recargue

    // Aquí podrías agregar validaciones o enviar los datos a un servidor
    console.log("Formulario enviado:", formData);

    // Redirigir a la página de confirmación
    // Pasamos el nombre como parámetro para personalizar el mensaje
    navigate(`/confirmation?name=${encodeURIComponent(formData.name)}`);
  };

  return (
    <div className="contact">
      <Nav />

      <div className="container mx-auto mt-20 p-4">
        <div className="w-1/2 mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-center">Contacto</h1>

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-xl p-6 border border-gray-300"
          >
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-bold mb-2"
              >
                Nombre:
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Correo electrónico:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-gray-700 font-bold mb-2"
              >
                Mensaje:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                required
              />
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all ease-in shadow-md hover:shadow-lg"
              >
                Enviar mensaje
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
