import React from 'react';
import { Link } from 'react-router-dom';

function Landing(props) {
  return (
    <section className='landing'>
      <div className='dark-overlay'>
        <div className='landing-inner'>
          <h1 className='x-large'> Felicific </h1>
          <p className='lead'>06-10 March 2021</p>
          <div className='buttons'>
            <Link to='/register' className='btn btn-primary'>
              Sign Up
            </Link>
            <Link to='/login' className='btn btn-light'>
              Login
            </Link>
            <p className='lead'>Presented By Department of IT Engineering</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Landing;
