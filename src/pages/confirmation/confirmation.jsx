import { Nav } from "../../components/nav/nav";
import { useLocation, Link } from "react-router-dom";

export const Confirmation = () => {
  // Extraer parámetros de la URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name") || "Usuario";

  return (
    <div className="confirmation">
      <Nav />

      <div className="container mx-auto mt-20 p-4">
        <div className="w-1/2 mx-auto bg-white shadow-lg rounded-xl p-8 border border-gray-300 text-center">
          <div className="mb-4 text-green-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-16 w-16 mx-auto"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-2xl font-bold mb-4">
            ¡Mensaje enviado con éxito!
          </h1>

          <p className="text-lg mb-6">
            Gracias <span className="font-bold">{name}</span> por contactarnos.
            Hemos recibido tu mensaje y nos pondremos en contacto contigo
            pronto.
          </p>

          <div className="mt-8">
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-lg transition-all ease-in shadow-md hover:shadow-lg mr-4"
            >
              Ir al inicio
            </Link>

            <Link
              to="/contact"
              className="border border-blue-500 text-blue-500 hover:bg-blue-50 font-bold py-2 px-6 rounded-lg transition-all ease-in shadow-md hover:shadow-lg"
            >
              Enviar otro mensaje
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
