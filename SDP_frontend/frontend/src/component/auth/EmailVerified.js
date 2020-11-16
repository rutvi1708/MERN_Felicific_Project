import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';


const EmailVerified =() =>{
  return (
    <Fragment>
      

      <div className="card mx-auto card-border" style={{width: "28em",marginTop:"160px"}}>
            {/* <img className="card-img-top " src={img} alt="Card image cap"/> */}
            <div class="card-body">
            
              <h3 >
         Your account has been verified.
      </h3>
      <br></br>
      <h4 style={{textAlign:"center"}}>
      <Link to='/login' >Click here to login</Link></h4>
               
            </div>
          </div>

    </Fragment>
  );
};

export default EmailVerified;