import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const EmailVerified =() =>{
  return (
    <Fragment>
      <h1 className='large text-primary'></h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Your account has been verified.
      </p>
      
      <p className='my-1'>
        <Link to='/login'>Click here to login</Link>
      </p>
    </Fragment>
  );
};

export default EmailVerified;
