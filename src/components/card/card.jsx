import profile from "../../assets/profile.png";
import { useState, useEffect } from "react";

/* https://jsonplaceholder.typicode.com/posts/1/comments */

export const Card = ({
  id,
  title = "Sin titulo",
  description = "Sin descripcion",
}) => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [active, setActive] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    const fecthComents = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts/${id}/comments`
        );
        const data = await response.json();
        setComments(data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fecthComents();
  }, []); // Array vacio significa que solo se ejecuta una vez al cargar el componente

  return (
    <div className="card border border-gray-300 shadow-lg rounded-xl m-4 p-4 w-full mx-auto">
      <header className="card-header">
        <div className="card-profile flex items-center gap-2 mb-2">
          <img
            src={profile}
            alt="Perfil del usuario"
            className="rounded-lg w-8"
          />
          <span>Nombre apellido</span>
        </div>
        <h1 className="card-title font-bold">{title}</h1>
      </header>
      <div className="card-body">
        <p className="card-text">{description}</p>
      </div>
      <footer className="card-footer flex justify-start items-center mb-2 gap-2 mt-2">
        <button
          className="card-button p-1 rounded-lg shadow shadow-blue-400 transition-all ease-in
                    cursor-pointer hover:bg-blue-400 hover:text-white
                "
          onClick={handleLike}
        >
          Likes {likes}
        </button>
        <button
          className="card-button p-1 rounded-lg shadow shadow-blue-400 transition-all ease-in
                    cursor-pointer hover:bg-blue-400 hover:text-white
                "
          onClick={handleActive}
        >
          Comentarios {comments.length}
        </button>
      </footer>

      <div
        className={`card-comments flex flex-col gap-2 mt-2 ${
          !active ? "hidden" : ""
        }`}
      >
        <h2 className="font-bold">Comentarios</h2>
        <div className="list-comments">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className="border border-gray-300 p-2 my-2 rounded-xl transition-all ease-in hover:shadow-xl"
            >
              <header className="card-coments-header flex items-center gap-2 mb-2">
                <img
                  src={profile}
                  alt="Perfil del usuario"
                  className="rounded-lg w-8"
                />
                <span className="font-bold">{comment.name}</span>
              </header>
              <div className="card-coments-body">
                <p className="card-coments-text">{comment.body}</p>
              </div>
            </div>
          ))}

          {/*  <div className="border border-gray-300 p-2 my-2 rounded-xl transition-all ease-in hover:shadow-xl">
                        <header className="card-coments-header flex items-center gap-2 mb-2">
                            <img src={profile} alt="Perfil del usuario" className="rounded-lg w-8" />
                            <span>Nombre apellido</span>
                        </header>
                        <div className="card-coments-body">
                            <p className="card-coments-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non erat nec ligula facilisis facilisis. Donec ac nunc ut enim efficitur tincidunt.</p>
                        </div>
                    </div> */}
        </div>
      </div>
    </div>
  );
};
