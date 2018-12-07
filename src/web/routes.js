import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from '../data/store/store';
import FullpageLoader from './components/FullpageLoader/FullpageLoader';

const Login = lazy(() => import('./components/Login/Login'));
const App = lazy(() => import('./components/App/App'));

const Routes = () => <Router>
  <Provider store={store}>
    <Suspense fallback={<FullpageLoader />}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/app" component={App} />
      </Switch>
    </Suspense>
  </Provider>
</Router>

export default hot(module)(Routes);
