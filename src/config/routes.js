import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../components/Home/Home';
import Register from '../components/NavBar/Modal/ModalRegister';
// import Login from '../components/NavBar/Modal/ModalLogin';
import CitiesView from '../components/CitiesView/CitiesView'

//TODO add a currentUser validation to CitiesView
export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path='/' component={Home} />
    <Route path='/cities' component={CitiesView} />
    {/* <Route
      path='/login'
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    /> */}
  </Switch>
);
