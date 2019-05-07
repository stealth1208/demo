import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { MerchantContainer, NoMatch } from './components/containers';
import App from './components/App';
import { Provider } from 'react-redux';
import store from './redux/store';

render (
  <Provider store={store}>
    <BrowserRouter>
      <App>
        <Switch>
          <Route
            exact
            path="/"
            component={MerchantContainer}
          />

          <Route component={NoMatch} />
        </Switch>
      </App>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
module.hot.accept();
