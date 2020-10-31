import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from './types';

//lOAD uSER
export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('http://localhost:5000/api/auth');
    dispatch({
      type: USER_LOADED,
     payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

//Register USer
export const register = (
  firstname,
  lastname,
  branch,
  sem,
  email,
  password,
  clgname,
  studentId,
  contactno
) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({
    firstname,
    lastname,
    branch,
    sem,
    email,
    password,
    studentId,
    clgname,
    contactno,
  });
  //console.log(body);
 
  try {
   
    const res = await axios.post(
      'http://localhost:5000/api/users',
      body,
      config
    );

    console.log(res);
    
    localStorage.setItem('token', res.data.token);
    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data,
    });
    // const res1 = await axios.get('http://localhost:5000/api/auth');
    // dispatch({
    //   type: USER_LOADED,
    //   payload: res1.data,
    // });


    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

//Login USer
export const login = (email, password) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({ email, password });
  console.log(body);
  try {
    const res = await axios.post(
      'http://localhost:5000/api/auth',
      body,
      config
    );
    console.log(res);
    localStorage.setItem('token', res.data.token);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, 'danger')));
    }

    dispatch({
      type: LOGIN_FAIL,
    });
  }
};
