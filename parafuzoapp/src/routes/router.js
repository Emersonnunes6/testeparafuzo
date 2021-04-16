import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React from "react";
import PaginaInicial from '../pages/paginaInicial/paginaInicial';

const Router = () => {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
            <PaginaInicial/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;