import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from '../App'
import Edit from '../pages/Edit'

export default function AppRouter() {
  return (
    <Router>
      <Switch>

        <Route exact path="/" component={Home} />
        <Route exact patch="/edit" component={Edit} />

      </Switch>
    </Router>
  );
}

export function notFound() {
  return (
    <div>
      <h2>404 - Page not found</h2>
    </div>
  )
}