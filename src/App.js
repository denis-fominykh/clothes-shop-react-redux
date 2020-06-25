import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import ErrorBoundary from './components/ErrorBoundary';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
