import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <nav className="fixed top-0 left-0 w-full mt-2 z-50">
      <div className="flex justify-between items-center bg-white rounded-lg shadow-lg w-1/2 mx-auto">
        <div className="p-4">
          <h1 className="font-bold text-2xl">
            <span className="text-red-500">RED</span>
            <i>40</i>
          </h1>
        </div>

        <ul className="flex flex-row justify-start gap-5">
          <li className="m-2">
            <Link
              className="block font-bold p-2 rounded-xl transition-all ease-in hover:shadow-lg hover:text-blue-400"
              to="/"
            >
              Inicio
            </Link>
          </li>
          <li className="m-2">
            <Link
              className="block font-bold p-2 rounded-xl transition-all ease-in hover:shadow-lg hover:text-blue-400"
              to="/posts"
            >
              Publicaciones
            </Link>
          </li>
          <li className="m-2">
            <Link
              className="block font-bold p-2 rounded-xl transition-all ease-in hover:shadow-lg hover:text-blue-400"
              to="/contact"
            >
              Contacto
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
