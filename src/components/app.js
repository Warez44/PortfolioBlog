import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import Navigation from '../navigation';
import NewPost from '../components/newpost';

const App = () => (
  <Router>
    <div>
      <Navigation />
      <Route exact path={ROUTES.NEW_POST} component={NewPost} />
    </div>
  </Router>
);

export default App;
