import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom'; 

import Principal from './pages/Principal'

import PrincipalAlumno from './pages/Alumno/Principal';
import Trabajos from './pages/Alumno/Trabajos';

import PDISC431082020 from './pages/Alumno/TPS/PDISC431082020';
import IMRSC230082020 from './pages/Alumno/TPS/IMRSC230082020'

import PrincipalProfesor from './pages/Profesor/Principal';
import CrearTrabajo from './pages/Profesor/Trabajo';
import CrearEval from './pages/Profesor/Evaluacion';

import PrincipalAdmin from './pages/Admin/Principal';
import NuevaMateria from './pages/Admin/NuevaMateria';
import NuevoUsuario from './pages/Admin/NuevoUsuario';

import PaginaNoEncontrada from './components/error/404/PaginaNoEncontrada';

const Router = () => (
  <HashRouter>
      <Switch>
        <Route exact strict path="/" component={Principal} />

        <Route exact strict path="/Alumno" component={PrincipalAlumno} />
        <Route exact strict path="/Alumno/Trabajos" component={Trabajos} />

        <Route exact strict path="/Alumno/Trabajos/PDISC431082020" component={PDISC431082020} />
        <Route exact strict path="/Alumno/Trabajos/IMRSC230082020" component={IMRSC230082020} />

        <Route exact strict path="/Profesor" component={PrincipalProfesor} />
        <Route exact strict path="/Profesor/Evaluacion" component={CrearEval} />
        <Route exact strict path="/Profesor/Trabajo" component={CrearTrabajo} />

        <Route exact strict path="/Admin" component={PrincipalAdmin} />
        <Route exact strict path="/Admin/GenMateria" component={NuevaMateria} />
        <Route exact strict path="/Admin/GenUsuario" component={NuevoUsuario} />

        <Route component={PaginaNoEncontrada} />
      </Switch>
  </HashRouter>
);

export default Router;