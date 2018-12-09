import { MemoryRouter as Router, Route, Switch } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from '../data/store/store';
import FullpageLoader from './components/FullpageLoader/FullpageLoader';

// const Login = lazy(() => import('./components/Login/Login'));
// const Gallery = lazy(() => import('./components/Gallery/Gallery'));
// const App = lazy(() => import('./components/App/App'));
const About = lazy(() => import('./components/About/About'));
const Blog = lazy(() => import('./components/Blog/Blog'));
const Games = lazy(() => import('./components/Games/Games'));

import App from './components/App/App';
import Login from './components/Login/Login';
import Gallery from './components/Gallery/Gallery';
// import About from './components/About/About';
// import Blog from './components/Blog/Blog';
// import Games from './components/Games/Games';

const Routes = () => <Router>
  <Provider store={store}>
    <Suspense fallback={<FullpageLoader />}>
      <Switch>
        <Route exact path="/" component={Login} />
        <App>
          <Route path="/gallery" component={Gallery} />
          <Route path="/about" component={About} />
          <Route path="/blog" component={Blog} />
          <Route path="/games" component={Games} />
          <Route path="/post/:topic/:post" component={Blog} />
        </App>
      </Switch>
    </Suspense>
  </Provider>
</Router>

export default hot(module)(Routes);
