import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import App from './InfoX/home'
import DetalheProduto from './InfoX/detalheProduto'
import Carrinho from './infoX/carrinho'




ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
      <Switch>
        <Route path="/" exact={true} component={App} />
        <Route path="/detalhe" component={DetalheProduto} />
        <Route path="/carrinho" component={Carrinho} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


