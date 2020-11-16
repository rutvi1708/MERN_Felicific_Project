import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../jquery-ui.css';
import './editprofile.css';


export default class Editprofile extends Component {
  constructor(props) {
    super(props);

    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangLastName = this.onChangeLastName.bind(this);
    this.onChangeBranch = this.onChangeBranch.bind(this);
    this.onChangeSem = this.onChangeSem.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeClgname = this.onChangeClgname.bind(this);
    this.onChangeStudentId = this.onChangeStudentId.bind(this);
    this.onChangeContactno = this.onChangeContactno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
       firstname:'',
       lastname:'',
       branch:'',
       sem:1,
       email:'',
       clgname:'',
       studentId:'',
       contactno:''
    
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/auth'+this.props.match.params.id)
      .then(response => {
        this.setState({
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          branch:response.data.branch,
          sem: response.data.sem,
          email: response.data.email,
          clgname: response.data.clgname,
          studentId:response.data.studentId,
          contactno:response.data.contactno
        })   
      })
      .catch(function (error) {
        console.log(error);
      })


 /*     axios.get('http://localhost:5000/routes/event/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            events: response.data.map(event => event.eventname),
          })
        }
      })
      .catch((error) => {
        console.log(error);
      })  */
    }   


  onChangeFirstName(e) {
    this.setState({
      firstname: e.target.value
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  onChangeBranch(e) {
    this.setState({
      branch:  e.target.value
    });
  }

  onChangeSem(e) {
    this.setState({
      sem: e.target.sem
    });
  }

  onChangeEmail(e) {
    this.setState({
    Email: e.target.value
    });
  }

  onChangeClgname(e) {
    this.setState({
      clgname: e.target.value
    });
  }


  onChangeStudentId(e) {
    this.setState({
    studentId: e.target.value
    });
  }

  onChangeContactno(e) {
    this.setState({
      contactno: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      firstname: this.state.firstname,
      lastname : this.state.lastname,
      branch: this.state.branch,
      sem:this.state.sem,
      email: this.state.email,
      clgname: this.state.clgname,
      studentId  : this.state.studentId,
      contactno: this.state.contactno
    
    }

    console.log(user);

    axios.post('http://localhost:5000/api/auth'+this.props.match.params.id, user)
      .then(res => console.log(res.data));

    window.location = '/profile';
  }

  render() {
    return (

      <div>

      <div className="main-w3layouts-content">
        <div className="top-section">
           <h2 className="sub-hdng-agileits-w3layouts" style={{color:"#000"}}> PROFILE</h2>  
           <p style={{color:"#AEB6BF"}}>.</p>
        </div>
        <div className="w3-agile-login-form">
          <form onSubmit={this.onSubmit}>
          
            <div className="top-fields-wthree">
              <div className="input-fields-w3ls">
                <input type="text" name="Name" placeholder="First Name" required=""
                 value={this.state.firstname }
                 onChange={this.onChangeFirstName}/>
              </div>
              <div className="input-fields-w3ls">
                <input type="text" name="Location" placeholder="Last Name" required="" 
                 value={this.state.lastname}
                 onChange={this.onChangeLastName}/>
              </div>
             
            </div>
            
            <div className="top-fields-wthree">
             
            
              <div className="input-fields-w3ls"  >
                <input type="text" name="Name" placeholder="Branch" required=""
                     value={this.state.branch}
                     onChange={this.onChangeBranch} />
              </div>
              
              <div className="input-fields-w3ls" style={{color:"#dcdcdc"}} >
                Semester: &nbsp;
                <input type="Number" min="1" max="8" name="Name" equired=""
                     value={this.state.sem}
                     onChange={this.onChangeSem} />
              </div>
             </div>


             <div className="top-fields-wthree">
              <div className="input-fields-w3ls">
                <input type="email"  name="email" required="" placeholder="Email"
                          value={this.state.email}
                          onChange={this.onChangeEmail} />
              </div>
              <div className="input-fields-w3ls"  >
                <input type="text"  name="Amount"  placeholder="College Name" required=""
                         value={this.state.clgname}
                         onChange={this.onChangeClgname} />
              </div>
            </div>

            <div className="top-fields-wthree">
              <div className="input-fields-w3ls">
                <input type="text" name="Participant"  placeholder="Student ID"required=""
               value={this.state.studentId}
               onChange={this.onChangeStudentId}/>
              </div>
              <div className="input-fields-w3ls" style={{color:"#dcdcdc"}} >
                  Contactno : &nbsp;
                <input type="Number"  required="" 
                   value={this.state.contactno}
                   onChange={this.onChangeContactno}/>  
             </div>
            </div>
            <br/>
            <br/>
            <div className="text-center">
            <input type="submit" className="btn btn-primary" color="#fff"style={{align:"center" }}value="SAVE" />
            </div>
          </form>
        </div>
      </div>
</div>
  
 
    /*<div>
      <h3>Edit Event </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>   Event Name : </label>  

             <input  type="String"
              required
              className="form-control"
              value={this.state.eventname || ''}
              onChange={this.onChangeEventname}
              />
        </div>
      
        <div className="form-group">
          <label>Time : </label>
          <input  type="time"
              required
              className="form-control"
              value={this.state.time }
              onChange={this.onChangeTime}
              />
        </div>
        <div className="form-group"> 
          <label>Location : </label>
          <input  type="text"
              required
              className="form-control"
              value={this.state.location}
              onChange={this.onChangeLocation}
              />
        </div>
        <div className="form-group">
          <label>Date : </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div>

        <div className="form-group"> 
          <label>Contact Details: </label>
          <textarea  type="textarea"
              required
              className="form-control"
              value={this.state.contact_details}
              onChange={this.onChangeContact_details}
              />
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <textarea  type="textarea"
              required
              className="form-control"
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Amount: </label>
          <input 
              type="number" 
              className="form-control"
              min="0"
              value={this.state.amount}
              onChange={this.onChangeAmount}
              />
        </div>

        <div className="form-group">
          <label>Required Participant : </label>
          <input 
              type="number" 
              className="form-control"
              min="1"
              max="11"
              value={this.state.req_participant}
              onChange={this.onChangeReq_participant}
              />
        </div>

        <div className="form-group">
          <label>Day : </label>
          <input 
              type="number" 
              className="form-control"
              min="1"
              max="5"
              value={this.state.day}
              onChange={this.onChangeDay}
              />
        </div>
        
        <div className="form-group">
          <input type="submit" value="Edit Event" className="btn btn-primary" />
        </div>
      </form>
    </div>*/
    )
  }
}