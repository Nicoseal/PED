import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'; 
/** Si se posee un back-end con Peticiones Dinámicas, usar BrowserRouter
 * sinó, si se está utilizando algo como Github Pages (Sitios Estáticos) usar HashRouter
 */

import Principal from './pages/Principal'
import PrincipalAlumno from './pages/Alumno/Principal';
import PrincipalProfesor from './pages/Profesor/Principal';
import PrincipalAdmin from './pages/Admin/Principal';
import PaginaNoEncontrada from './components/error/404/PaginaNoEncontrada';

const Router = () => (
  <HashRouter>
      <Switch>
        <Route exact strict path="/" component={Principal} />
        <Route exact strict path="/Alumno" component={PrincipalAlumno} />
        <Route exact strict path="/Profesor" component={PrincipalProfesor} />
        <Route exact strict path="/Admin" component={PrincipalAdmin} />
        <Route component={PaginaNoEncontrada} />
      </Switch>
  </HashRouter>
);

export default Router;