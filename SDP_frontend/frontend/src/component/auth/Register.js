import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { setAlert } from '../../actions/alert';
import { register } from '../../actions/auth';
import PropTypes from 'prop-types';
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
//import { Button, Navbar } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));
let clg='';
const Register = ({ setAlert, register, isAuthenticated }) => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
   clg=event.target.value;
    console.log(clg)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  }
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    branch: '',
    sem: '',
    email: '',
    password: '',
    password2: '',
    stuId: '',
    contact: '',
  });

  const {
    firstname,
    lastname,
    branch,
    sem,
    email,
    password,
    password2,
    stuId, 
    contact,
  } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(clg);
    
    register(
      firstname,
      lastname,
      branch,
      sem,
      email,
      password,
      clg,
      stuId,
     contact
    );
    
  };

  if (isAuthenticated) {
    return <Redirect to='/login' />;
  }
  return (
    <Fragment>
      <h1 className='large text-primary'>Sign Up</h1>
      <p className='lead'>
        <i className='fas fa-user'></i> Create Your Account
      </p>
      <form className='form' onSubmit={(e) => onSubmit(e)}>
        <div className='form-group'>
          <input
            type='text'
            placeholder='FirstName'
            name='firstname'
            value={firstname}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='LastName'
            name='lastname'
            value={lastname}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Branch'
            name='branch'
            value={branch}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Semester'
            name='sem'
            value={sem}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            name='password'
            value={password}
            onChange={(e) => onChange(e)}
            minLength='8'
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Confirm Password'
            name='password2'
            value={password2}
            onChange={(e) => onChange(e)}
            minLength='8'
          />
        </div>

       
        <div className='form-group'>
          <div>
          <Button className={classes.button} onClick={handleOpen}>
           </Button>
           <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label">College Name</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={age}
          onChange={handleChange}
        >
          
          <MenuItem name ='clg' value={'DDIT'}>DDIT</MenuItem>
          <MenuItem  name ='clg' value={'CHARUSET'}>CHARUSET</MenuItem>
          <MenuItem  name ='clg' value={'NIRMA'}>NIRMA</MenuItem>
          <MenuItem  name ='clg' value={'GCET'}>GCET</MenuItem>
          <MenuItem  name ='clg' value={'ADIT'}>ADIT</MenuItem>
        </Select>
      </FormControl>
    </div>
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='StudentId'
            name='stuId'
            value={stuId}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            placeholder='Contact'
            name='contact'
            value={contact}
            onChange={(e) => onChange(e)}
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Register' />
      </form>
      <p className='my-1'>
        Already have an account? <Link to='/login'>Sign In</Link>
      </p>
    </Fragment>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
