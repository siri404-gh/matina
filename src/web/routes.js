import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import LinearIndeterminate from './components/LinearIndeterminate/LinearIndeterminate';
import store from '../data/store/store';

const App = lazy(() => import('./components/App/App'));

const Routes = () => <Router>
  <Provider store={store}>
    <Suspense fallback={<LinearIndeterminate />}>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </Suspense>
  </Provider>
</Router>

export default hot(module)(Routes);
