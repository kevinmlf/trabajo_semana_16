# Proyecto RED40 - Aplicación de Contacto con Formulario

Este proyecto implementa una aplicación web en React que incluye un formulario de contacto con redirección a una página de confirmación. La aplicación utiliza React Router para la navegación entre páginas y Tailwind CSS para los estilos.

## Características

- Navegación entre diferentes páginas (Inicio, Publicaciones, Contacto)
- Formulario de contacto con validación
- Redirección automática a una página de confirmación después del envío
- Diseño responsivo con Tailwind CSS
- Carga de publicaciones desde una API externa
- Sistema de comentarios para las publicaciones

## Estructura del Proyecto

```
src/
  components/
    card/
      card.jsx         # Componente para mostrar publicaciones
    nav/
      nav.jsx          # Barra de navegación
  pages/
    contact/
      contact.jsx      # Página de contacto con formulario
    home/
      home.jsx         # Página de inicio
    posts/
      posts.jsx        # Página de publicaciones
    confirmation/
      confirmation.jsx # Página de confirmación después de enviar el formulario
  App.jsx              # Configuración de rutas
  assets/
    profile.png        # Imagen de perfil utilizada en la aplicación
```

## Instalación

1. Clona este repositorio:
   ```
   git clone https://github.com/tu-usuario/RED40-app.git
   cd RED40-app
   ```

2. Instala las dependencias:
   ```
   npm install
   ```

3. Inicia la aplicación en modo desarrollo:
   ```
   npm run dev
   ```

## Dependencias

- React
- React Router DOM
- Tailwind CSS
- Vite (para el entorno de desarrollo)

## Uso

1. Navega a la página de contacto haciendo clic en "Contacto" en la barra de navegación
2. Completa el formulario con tu nombre, correo electrónico y mensaje
3. Haz clic en "Enviar mensaje"
4. Serás redirigido automáticamente a una página de confirmación con un mensaje personalizado

## Funcionalidades Adicionales

- La página de publicaciones carga datos desde JSONPlaceholder API
- Cada publicación muestra comentarios que se cargan dinámicamente
- El sistema implementa scroll infinito para cargar más publicaciones al desplazarse

## Capturas de Pantalla

### Página de Contacto
![Página de Contacto](./src/assets/Captura%20de%20pantalla.png)

### Página de Confirmación
![Página de Confirmación](./src/assets/Captura%20de%20pantalla_2.png)

---

Desarrollado por [Tu Nombre] para el curso de [Nombre del Curso]