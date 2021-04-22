import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from "react";
import PaginaInicial from '../pages/paginaInicial/paginaInicial';
import Historico from '../pages/historico/historico';

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <PaginaInicial/>
        </Route>
        <Route exact path="/:placa/historico">
            <Historico/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;