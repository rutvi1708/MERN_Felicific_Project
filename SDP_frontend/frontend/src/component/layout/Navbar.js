import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <nav className='navbar bg-dark'>
      <h1>
        <Link to='/'>
          <i className='fas fa-code'></i> Felicific 2021
        </Link>
      </h1>
      <ul>
      <li className="navbar-item">
                    <Link to ="/"   className="nav-link"> Home </Link>
                    </li>
                   
          {/* { <li>
            <a href='profiles.html'>Developers</a>
          </li>
          { <li> }
            <Link to='/register'>Register</Link>
          </li>
          <li>
            <Link to='/login'>Login</Link>
          </li> }*/}
          <li className="navbar-item"> 
                    <Link to="/cultural" className="nav-link"> Cultural Night </Link>
                    </li>{' '}
                    <li className="navbar-item">
                    <Link to ="/profile/:id" className="nav-link"> My Profile   </Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/contact" className="nav-link"> Contact Us  </Link>
                    </li>
                    <li className="navbar-item">
                    <Link to="/" className="nav-link"> Logout </Link>
                    </li>
      </ul>
    </nav>
  );
}
export default Navbar;
