import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import Register from "../components/NavBar/Modal/ModalRegister";
import Login from "../components/NavBar/Modal/ModalLogin";
import PostContainer from "../components/PostContainer/PostContainer";
import ProfileContainer from "../components/ProfileContainer/ProfileContainer";

export default ({ currentUser, setCurrentUser }) => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route
      path="/login"
      render={() => (
        <Login currentUser={currentUser} setCurrentUser={setCurrentUser} />
      )}
    />
    <Route exact path="/postcontainer" component={PostContainer} />
    <Route path="/profile" component={ProfileContainer} />
  </Switch>
);
