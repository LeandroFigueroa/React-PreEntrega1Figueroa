# Proyecto final Coder House React.

Este proyecto se puede ver montado en [Netlify]
(https://react-2dapreentrega-leandrofigueroa.netlify.app/)

## npm usados:
1. React-router-dom
2. Firebase
3. React-dom
4. React-icons
5. React-scritps 

## Estructura
1. Se creo una caperta 'Components'donde se alojaran todos nuestros componentes de la web
2. Se creo una carpeta 'Firebase'por fuera de 'Components' para levantar la base de datos de Firebase.
3. Se creo una carpeta 'Context' por fuera de 'Components' para crear las opciones del carrito, como agregar,eliminar,precio total,etc.
4. En la carpeta 'Public' se creo una carpeta 'img' donde se alojaron las imagenes para los productos.
5. En el index.html de Public, se cargo bootstrap.
6. En Índex.js'se creo el BrowserRouter y se cargo 'Firestore'
7. En App.jsx se creo el 'Routes'y los links de todos los componentes que funcionan como pages a traves de 'Routes'
8. Se creo la carpeta 'Title'para el greetings que dice 'Hola'
9. Se creo un NavBar que se vincula con un cartWidget el cual es dinamico a la carga de productos.
10. Se crearon las respectivas carpetas para que los procesos de los productos cumplan su flow en el proceso de compra.
11. Se creo un Form para que se manden los datos a firestore creando una Order con los datos de usuario el cual saca un mensaje diciendo que se completo la compra y devolviendo un ID que lo hice pasar como Orden de compra.

## Que me hubiera faltado mejorar?
Cuando lleno el formulario y lo envio no pude hacer sacar el formulario.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
