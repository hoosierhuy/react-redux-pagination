import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import { browserHistory, Router, Route, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import { Provider } from 'react-redux';

import './stylesheets/app.scss';
import { reducers } from './reducers/index';
import App from './components/App';
import Home from './components/pages/Home';
import WesterosusEdit from './components/pages/WesterosusEdit';
import NotFound from './components/pages/NotFound';

/**
 * Westerosi is plural, westerosus is singular
 *
 */
// my ghetto seed data
let westerosi = [];

for (let i = 1; i <= 100; i++) {
  westerosi.push({
    id: i,
    westerosusName: 'Jon Snow ' + i,
    job: 'King of the North ' + i,
  });
}

const initialState = {
  westerosi: {
    list: westerosi,
  },
};

let middleware = applyMiddleware(routerMiddleware(browserHistory));

if (process.env.NODE_ENV !== 'production') {
  middleware = compose(middleware, window.devToolsExtension && window.devToolsExtension());
}

const store = createStore(reducers, initialState, middleware);
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={ store }>
    <Router history={ history }>
      <Route path="/" component={ App }>
        <IndexRoute component={ Home } />
        <Route path="westerosus-edit(/:id)" component={ WesterosusEdit } />
        <Route path="*" component={ NotFound } />
      </Route>
    </Router>
  </Provider>,
  document.querySelector('.root')
);
