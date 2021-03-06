import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../components/Auth/Register';
import Login from '../components/Auth/Login';


export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/register' component={Register} />
    <Route
      path='/login'
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    />
  </Switch>
);
