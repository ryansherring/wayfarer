import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../components/NavBar/Modal/Modal';
// import Login from '../components/NavBar/Modal/ModalLogin';
import ProfileContainer from '../components/ProfileContainer/ProfileContainer';

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Home} />
    {/* <Route path='/register' component={Register} />
    <Route
      path='/login'
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )} */}
    <Route path='/profile' component={ProfileContainer} />
  </Switch>
);
