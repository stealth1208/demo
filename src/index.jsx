import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SuperHeroListContainer, HeroDetailContainer, NoMatch } from './components/containers';
import App from './components/App';

render (
  <BrowserRouter>
    <Switch>
      <Route path="/" >
        <App />

        <Route

          path="/super-heroes"
          component={SuperHeroListContainer} />

        <Route

          path="/super-heroes/:id"
          component={HeroDetailContainer}
        />
        <Route component={NoMatch} />
      </Route>
    </Switch>
  </BrowserRouter>,
  document.querySelector('#root')
);
