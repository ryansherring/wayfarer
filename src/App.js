import React, { Component } from 'react';
import axios from 'axios';
//import { withRouter } from 'react-router-dom';
import Routes from './config/routes'
import Navbar from './components/NavBar/Navbar'
import './App.css';


class App extends Component {
  state = {
    currentUser: localStorage.getItem('uid')
  };

  setCurrentUser = userId => {
    this.setState({ currentUser: userId });
    localStorage.setItem('uid', userId);
  };

  logout = () => {
    axios
      .delete(`${process.env.REACT_APP_API_URL}/auth/logout`, { withCredentials: true })
      .then(res => {
        console.log(res);
        localStorage.removeItem('uid');
        this.setState({ currentUser: null });
        this.props.history.push('/login');
      })
      .catch(err => {
        console.log(err);
      })
  };

  render() {
    return (
      <>
        <Navbar currentUser={this.state.currentUser} setCurrentUser={this.setCurrentUser} logout={this.logout} />
        {/* {routes} */}
        <Routes
          currentUser={this.state.currentUser}
          setCurrentUser={this.setCurrentUser}
        />
      </>
    );
  };
}

export default App;
