# Pokémon Project

Este proyecto fué desarrollado como prueba técnica para un proceso de selección. Se utilizaron las tecnologías Next.js, Typescript, React, TailwindCss y MaterialUI.

La aplicación consiste en la visualización y búsqueda de Pokémons. Al hacer click también se puede ver el detalle de cada Pokémon. Para la obtención de los datos se utilizó la API pública de pokeapi.co.
Además de la búsqueda por caracteres se pueden filtrar los resultados mediante un modal, donde se puede seleccionar el tipo de Pokémon (fuego, agua, tierra, etc) y la altura máxima.

## Estructura de carpetas

- <b>Components:</b> Aquí estan todos los componentes que se utilizan dentro de la app
- <b>Hooks:</b> En esta carpeta están los custom hooks que se pueden reutilizar dentro de la app. Actualmente se incluyó el hook 'useTypeColor' que permite agregar unos estilos a un elemento dependiendo del tipo de Pokémon.
- <b>Pages:</b> En esta carpeta se incluyen todas las páginas del sitio, principalmente la Home y Detalle del Pokémon.
- <b>Services:</b> Aquí se encuentra el archivo .ts que contiene todas las consultas a la API.
- <b>Types:</b> Dentro de esta carpeta está el archivo donde se definen los tipos de datos.

## Cómo ejecutar el proyecto

Para ejecutar el proyecto es necesario desde la consola ejecutar los siguientes comandos:

    // clonar el proyecto localmente
    git clone https://github.com/emanocera89/pokemon-project
    
    //entrar dentro de la carpeta del proyecto e instalar dependencias
    cd pokemon-project
    npm install
    
    //ejecutar la app
    npm run dev
Luego de realizado esto, se puede acceder a la app localmente desde http://localhost:3000/


## Funcionamiento de la app

Debido a que la API no está preparada especialmente para la búsqueda y filtrado — es decir, que no existen endpoints para estas features — me vi forzado a implementarlo desde el front.
Por lo tanto, lo que se hace es un for each para cada uno de los ids correspondiente a cada Pokémon y se obtiene la data de esa forma. Luego se hace un remapeo de los datos para definir la estructura deseada. No es la mejor manera de hacer la implementación ya que la obtención de datos se hace muy lenta, por lo que la app tarda en mostrar resultados. Por este motivo, se limitó la cantidad de Pokémon a mostrar solo a un máximo de 60.

## Librerías utilizadas en la app
- Next
- Typescript
- React
- TailwindCSS
- MaterialUI
- Axios
- ESLint
## Deploy

La app se encuentra deployada en https://poke-project-082023.netlify.app/

Actualmente hace falta corregir un bug que hace que algunas clases de TailwindCss no se carguen correctamente.

## Autor

App desarrollada por Emmanuel Nocera — Agosto 2023.

[Website](https://emmanuelnocera.com) — [Email](mailto:ema.nocera.89@gmail.com) — [LinkedIn](https://www.linkedin.com/in/emanocera/) — [Github](https://github.com/emanocera89) 
