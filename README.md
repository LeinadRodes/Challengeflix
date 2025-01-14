# AluraFlix 🎥

Una aplicación web para gestionar y visualizar videos categorizados, inspirada en plataformas como Netflix.

## ✨ Características Principales

- **Visualización de Videos**: Los videos se muestran en un carrusel categorizado, facilitando la navegación entre diferentes categorías.
- **Agregar Videos**: Permite a los usuarios añadir nuevos videos proporcionando:
  - Título
  - Enlace al video
  - Enlace a la imagen del video
  - Descripción
  - Código de seguridad
- **Agregar Categorías**: Los usuarios pueden crear nuevas categorías personalizadas con:
  - Nombre
  - Descripción
  - Color personalizado
  - Código de seguridad
- **Reproductor de Video**: Los videos pueden reproducirse directamente desde la aplicación.
- **Notificaciones**: Se utilizan notificaciones visuales (con `notistack`) para indicar el éxito o error en las acciones realizadas.

## 🛠️ Tecnologías Utilizadas

- **React**: Biblioteca principal para construir la interfaz de usuario.
- **Styled-Components**: Para aplicar estilos personalizados a los componentes.
- **Material-UI**: Componentes de interfaz de usuario adicionales.
- **Axios**: Manejo de solicitudes HTTP.
- **React Hook Form**: Gestión eficiente de formularios.
- **React Router DOM**: Navegación entre diferentes rutas de la aplicación.
- **JSON Server**: Simulación de una API RESTful para servir datos desde un archivo JSON.
- **Notistack**: Implementación de notificaciones visuales.

## 🚀 Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto localmente:
## 🚀 Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Instalar dependencias**  
   Ejecuta el siguiente comando para instalar todas las dependencias necesarias:  
   ```bash
   npm install
   
2. Iniciar el servidor JSON
Inicia el servidor que simula la API RESTful utilizando:
npm run start:server

3 .Iniciar la aplicación React
En una terminal nueva, ejecuta el siguiente comando para iniciar la aplicación en modo desarrollo:
npm start


Estructura del Proyecto
aluraflix/
├── public/
│   ├── index.html
│   ├── manifest.json
│   └── ...
├── src/
│   ├── componentes/
│   │   ├── Banner.js
│   │   ├── BannerText.js
│   │   ├── Button.js
│   │   ├── Footer.js
│   │   ├── FormularioCategoria.js
│   │   ├── FormularioVideos.js
│   │   ├── Header.js
│   │   ├── MainSection.js
│   │   └── Carousel/
│   │       ├── Slider/
│   │       │   ├── Slider.js
│   │       │   └── VideoPlayer.js
│   │       └── ...
│   ├── layouts/
│   │   └── RootLayout.js
│   ├── styles/
│   │   ├── reset.css
│   │   ├── theme.js
│   │   └── Global.js
│   ├── ui/
│   │   └── colores.js
│   ├── App.js
│   ├── Context.js
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
├── db.json
├── .gitignore
├── package.json
└── README.md





