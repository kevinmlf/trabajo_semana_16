import { Card } from "../../components/card/card";
import { Nav } from "../../components/nav/nav";
import { useState, useEffect } from "react";

export const Posts = () => {
  const [posts, setPosts] = useState([]); // Lista de publicaciones
  const [page, setPage] = useState(1); // Página actual
  const [loading, setLoading] = useState(true); // Estado de carga
  const [hasMore, setHasMore] = useState(true); // Si hay más publicaciones para cargar

  const POSTS_PAGE_SIZE = 10; // Número de publicaciones por página

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/posts?_limit=${POSTS_PAGE_SIZE}&_page=${page}`
        );
        const data = await response.json();

        if (data.length === 0) {
          setHasMore(false); // No hay más publicaciones para cargar
        } else {
          setPosts((prev) => [...prev, ...data]); // Agregar nuevas publicaciones a la lista existente
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setLoading(false); // Cambiar el estado de carga a falso
      }
    };

    fetchPosts();
  }, [page]); // Ejecutar el efecto cada vez que cambie la página

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 100 && // Si el usuario ha llegado al final de la página
        !loading && // Si no se está cargando
        hasMore // Si hay más publicaciones para cargar
      ) {
        setPage((prev) => prev + 1); // Incrementar la página para cargar más publicaciones
      }
    };

    window.addEventListener("scroll", handleScroll); // Agregar el evento de desplazamiento

    return () => {
      window.removeEventListener("scroll", handleScroll); // Limpiar el evento de desplazamiento al desmontar el componente
    };
  }, [loading, hasMore]); // Ejecutar el efecto cada vez que cambie el estado de carga o si hay más publicaciones

  return (
    <div className="posts w-full">
      <Nav />
      <div className="container mx-auto mt-20">
        <div className="w-1/2 mx-auto">
          <h1 className="m-2 text-center font-bold text-2xl">Publiciones</h1>
          {posts.map((post) => (
            <Card id={post.id} title={post.title} description={post.body} />
          ))}
          {loading && <p className="text-center">Cargando...</p>}{" "}
          {/* Mensaje de carga */}
          {!hasMore && (
            <p className="text-center">No hay más publicaciones para cargar.</p>
          )}{" "}
          {/* Mensaje si no hay más publicaciones */}
        </div>
      </div>
    </div>
  );
};
