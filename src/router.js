import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'; 
/** Si se posee un back-end con Peticiones Dinámicas, usar BrowserRouter
 * sinó, si se está utilizando algo como Github Pages (Sitios Estáticos) usar HashRouter
 */

import PaginaNoEncontrada from './components/error/404/PaginaNoEncontrada';
import App from "./App";

const Router = () => (
  <HashRouter>
      <Switch>
        <Route exact path="/" component={App}/> 
        <Route component={PaginaNoEncontrada} />
      </Switch>
  </HashRouter>
);

export default Router;