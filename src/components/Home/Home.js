import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => (
  <div className="container">
    <h2>You should sign up!</h2>
    <Link className='navbar-brand' to='/register'>
      <h2>Sign Up Now!</h2>
    </Link>

    <h2>Already have an account? </h2>
    <Link className='navbar-brand' to='/login'>
      <h2>log in now!</h2>
    </Link>

  </div>
);

export default Home;