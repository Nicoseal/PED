# ¿Qué es esto?
Es un proyecto template, para crear apps más rápido, con varias cosas preinstaladas y algunos agregados.

# [Live Preview](https://santimedia01.github.io/React-ReactRouter-MaterialUI-Template)

El live preview está basado en la rama all-elements-uncommented, donde están todos los elementos sin comentar, visibles, valga la redundancia.
En la rama master se conservan los elementos comentados

## Tecnologías / Librerías
1. React con [Create React App](https://github.com/facebook/create-react-app) 
2. React Router
3. Material UI + Fuente Roboto

## Plus - Agregados
1. Eliminé los archivos innecesarios que trae el Create React App, dejando el favicon.
2. Agregué una página de error 404 estándar.
3. Agregué un navbar con Material UI responsivo, con cuyos elementos están listados debajo.
### Navbar - Elementos habilitados
- Logo de compañía.
- Nombre de la compañía.
- Botón de login.
- Botón de crear una cuenta.
### Navbar - Elementos no habilitados (comentados)
(Al descomentarlos, no olvidar de descomentar los import de los componentes requeridos)
- Caja de búsqueda.
- Icono de notificaciones con un badge de cantidad de notificaciones.
- Icono de carrito de compras con un badge de cantidad de articulos.
- Menú de perfil de usuario logeado.

# ¿Por donde empezar?

Luego de instalar las dependencias, simplemente puedes comenzar a desarrollar. 
Puedes eliminar directamente los elementos comentados que no necesites sin miedo a efectos secundarios.

# Errores Conocidos

_Warning:_ > findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://fb.me/react-strict-mode-find-node — Error conocido de Material Ui

# Scripts Disponibles

En la carpeta del repositorio, se pueden ejecutar:

### `npm i`

Para instalar todas las dependencias.

### `npm start`

Ejecuta la aplicación en modo desarrollador.<br />
Puedes abrir [http://localhost:3000](http://localhost:3000) para verla en el navegador.

La página se recargará automaticamente si realizas cambios en el código.<br />
También verás los errores en la consola.

### `npm test`

Lanza la ejecución de tests en el modo de vigilancia interactiva.<br />
Puedes leer la entrada [ejecutando tests](https://facebook.github.io/create-react-app/docs/running-tests) para más información.

### `npm run build`

Construye la aplicación para producción en la carpeta `build`.<br />
Automaticamente agrupa React en modo producción y optimiza el proyecto para un mejor rendimiento.

El proyecto final es minificado y los nombres de archivos son convertidos a hashes.<br />
Tu aplicación está lista para ser desplegada!

También puedes leer la sección [despliegue](https://facebook.github.io/create-react-app/docs/deployment) para más información.
