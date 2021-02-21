import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import QuemSomos from './containers/QuemSomos';
import Energia from './containers/Energia';
import Impacto from './containers/Impacto';
import Carreira from './containers/Carreira';
import Investidores from './containers/Investidores';
import Complexo from './containers/Complexo';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/quemsomos" component={QuemSomos} />
        <Route exact path="/energia" component={Energia} />
        <Route exact path="/impacto" component={Impacto} />
        <Route exact path="/carreira" component={Carreira} />
        <Route exact path="/investidores" component={Investidores} />
        <Route exact path="/complexo" component={Complexo} />
      </Switch>
    </BrowserRouter>
  )
}
