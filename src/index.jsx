import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SuperHeroListContainer, HeroDetailContainer, NoMatch } from './components/containers';
import App from './components/App';


render (
  <BrowserRouter>
    <App>
      <Switch>
        <Route
          exact
          path="/super-heroes"
          component={SuperHeroListContainer}
        />

        <Route
          exact
          path="/super-heroes/:id"
          component={HeroDetailContainer}
        />
        <Route component={NoMatch} />
      </Switch>
    </App>
  </BrowserRouter>,
  document.querySelector('#root')
);
