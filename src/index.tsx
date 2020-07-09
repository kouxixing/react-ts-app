import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import React, { Suspense, lazy } from 'react';
import reducer from './store/reducers';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.less';

// 1、创建 store
const store = createStore(reducer);

const First = lazy(() => import('./pages/FirstPage'));
const Login = lazy(() => import('./pages/Login/login'));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={(props: any) => <Login {...props} />} />
          <Route path="/first" component={(props: any) => <First {...props} />} />
        </Switch>
      </Suspense>
    </Router>
  </Provider>,
  document.getElementById('root')
)
