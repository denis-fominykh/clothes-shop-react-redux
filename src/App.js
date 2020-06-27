import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.scss';

import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import SingInPage from './pages/SingInPage';

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={ShopPage} />
            <Route exact path="/signin" component={SingInPage} />
          </Switch>
        </div>
      </Router>
    </ErrorBoundary>
  );
};

export default App;
