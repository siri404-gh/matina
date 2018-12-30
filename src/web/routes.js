import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from '../data/store/store';

import FullpageLoader from './components/FullpageLoader/FullpageLoader';
import App from './components/App/App';

const Gallery = lazy(() => import('./components/Gallery/Gallery'));
// const About = lazy(() => import('./components/About/About'));

import About from './components/About/About';
// import Gallery from './components/Gallery/Gallery';

const Routes = () => <Router>
  <Provider store={store}>
    <Suspense fallback={<FullpageLoader />}>
      <Switch>
        <App>
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/gallery" component={Gallery} />
        </App>
      </Switch>
    </Suspense>
  </Provider>
</Router>

export default hot(module)(Routes);
