import React,  { Component} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'reactstrap';
import pic from '../img/ddulogo.png';
import './userprofile.css';
import {connect} from 'react-redux';


class UserProfile extends Component{
  constructor(props) {
    super(props);

    this.onChangeFirstname = this.onChangeFirstname.bind(this);
    this.onChangeLastname = this.onChangeLastname.bind(this);
    this.onChangeBranch = this.onChangeBranch.bind(this);
    this.onChangeSem = this.onChangeSem.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeClgname = this.onChangeClgname.bind(this);
    this.onChangeStudentId = this.onChangeStudentId.bind(this);
    this.onChangeContactno = this.onChangeContactno.bind(this);
  //  this.onSubmit = this.onSubmit.bind(this);
   

    this.state = {
      userId:'',
      firstname:'',
      lastname:'',
      branch:'',
      sem:1,
      email:'',
      clgname:'',
      studentId:'',
      contactno:'',
      events: null,
      eventsDetail: []
   
   }
  }
  
  async componentDidMount(){
      await this.getEvents();
      await this.getEventDetails();

      const userId=localStorage.getItem("userId");
      console.log(userId)
      this.setState({
        userId:userId
      })
       

axios.get(`http://localhost:5000/routes/user/${userId}`,{
  params:{id: userId}
})
            .then(response => {
              this.setState({
                firstname: response.data.firstname,
                lastname: response.data.lastname,
                branch:response.data.branch,
                sem:response.data.sem,
                email: response.data.email,
                clgname: response.data.clgname,
                studentId:response.data.studentId,
                contactno:response.data.contactno
               
              
              })   
            })
            .catch(function (error) {
              console.log(error);
            })
   console.log(this.state.data)
    
    }

    onChangeFirstname(e) {
      this.setState({
        firstname: e.target.value
      });
    }
  
    onChangeLastname(e) {
      this.setState({
        lastname: e.target.value
      });
    }
  
    onChangeBranch(e) {
      this.setState({
        branch: e.target.value
      });
    }
 
    onChangeSem(e) {
      this.setState({
        sem: e.target.value
      });
    }

    onChangeEmail(e) {
      this.setState({
        email: e.target.value
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

    editdata(e) {
      e.preventDefault();
  
      const user = {
        firstname: this.state.firstname,
        lastname  : this.state.lastname,
        branch: this.state.branch,
        sem:this.state.sem,
        email: this.state.email,
        clgname: this.state.clgname,
        studentId : this.state.studentId,
        contactno: this.state.contactno
      }
  
      console.log(user);
       console.log(this.state.userId);
      axios.post(`http://localhost:5000/routes/user/edit/${this.state.userId}`, user)
        .then(res => console.log(res.data));
       alert("data edited")
    
    }
  
    async getEvents() {
      await axios
        .get("http://localhost:5000/api/auth/displayevent")
        .then((response) => {
          this.setState({ events: response.data.event });
         // console.log(response.data.event[0].id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  
    async getEventDetails() {
      let eventsDetail = [];
      const events = this.state.events;
      console.log(events);
      if (this.state.events != null)
        await events.forEach((event) => {
          //console.log(event.id);
          axios
            .get("http://localhost:5000/routes/event/"+ event.id)
            // .then(response=> response.json())
  
  
            .then((response) => {
              //console.log(response.data);
              // const obj = {
              //   id: response.data._id,
              //   name: response.data.eventname,
              //   date: response.data.date,
              // };
              //console.log(obj);
              // console.log(response.data);
              eventsDetail.push(response.data);
              //console.log(eventsDetail.length);
              this.setState({
                eventsDetail: eventsDetail,
              });
  
              // this.setState({ events: response.events })
            });
        });
  
      //await console.log(this.state.eventsDetail.length);
    }
  
    renderDetails() {
      let data = null;
      if (this.state.eventsDetail.length != 0) {
        //console.log(this.state.eventsDetail);
        data = this.state.eventsDetail.map((event) => {
          return (
            <div key={event._id} className="card">
              <div className="card-body">
                <p>{event.eventname}</p>
              </div>
            </div>
          );
        });
      }
      return (
        <div>
          <h1 style={{color:"white"}}>Registered Events</h1>
          {data}
        </div>
      );
    }
render(){
  console.log(this.state.userId)
        return (
 <div className="container" style={{ BackgroundColor:"#E9F7EF"}}>
    <div className="main-body"> 
       <h2 style={{color:"white"}}>{this.state.firstname} &nbsp;{this.state.lastname}  </h2>
    
      { /*</div>
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
      /div>*/}
    
          <div className="row gutters-sm">
         {/*}   <div class="col-md-4 mb-3">
              <div class="card">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img src={pic} alt="Admin" class="rounded-circle" width="150"/>
                    <div class="mt-3">
                      <h4>John Doe</h4>
                    
                      <button class="btn btn-primary">EDIT</button>
                    
                    </div>
                  </div>
                </div>
              </div>
             
    </div> */}
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <form  > 
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">First Name</h6>
                    </div>
                    
                    <div className="col-sm-9 text-secondary">
                    <input type="text" name="FirstName" required=""
                       value={this.state.firstname }
                      onChange={this.onChangeFirstname}/>
                   
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">
                         Last Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                   
                    <input type="text" name="lastName" required=""
                 value={this.state.lastname }
                 onChange={this.onChangeLastname}/>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Branch</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                   
                    <input type="text" name="branch" required=""
                 value={this.state.branch }
                 onChange={this.onChangeBranch}/>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Semester</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                   
                    <input type="number" name="Sem"  required=""
                 value={this.state.sem }
                 onChange={this.onChangeSem}/>
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                     
                    <input type="email" name="Name"required=""
                 value={this.state.email }
                 onChange={this.onChangeEmail}/>
                    </div>
                  </div>
                 
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                       
                       <input type="number" name="contactno"  required=""
                       value={this.state.contactno }
                       onChange={this.onChangeContactno}/>
                    </div>
                  </div>
             
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Student ID</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <input type="text" name="studentId" placeholder="studentId" required=""
                 value={this.state.studentId}
                 onChange={this.onChangeStudentId}/>
                    
                    </div>
                  </div>
                 
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">College Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">
                    <input type="text" name="college name" required=""
                 value={this.state.clgname }
                 onChange={this.onChangeClgname}/>
                    </div>
                  </div>
                    </form>
                </div>
              </div>
           {/*   <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6 class="d-flex align-items-center mb-3"><i class="material-icons text-info mr-2">assignment</i>Project Status</h6>
                      <small>Web Design</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "80%"}} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Website Markup</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "72%"}} aria-valuenow="72" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>One Page</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "89%"}} aria-valuenow="89" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Mobile Template</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width: "55%"}} aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                      <small>Backend API</small>
                      <div class="progress mb-3" style={{height: "5px"}}>
                        <div class="progress-bar bg-primary" role="progressbar" style={{width:" 66%"}} aria-valuenow="66" aria-valuemin="0" aria-valuemax="100"></div>
                      </div>
                    </div>
                  </div>
                </div>
              
              
    </div>*/}
   
    <Button type="button"  onClick={(e)=>this.editdata(e)} className="btn btn-primary" value="EDIT & SAVE"/>
    <div>{this.renderDetails()}</div>
            </div>
          </div>
        </div>
    </div>

        )
    
    }
  }
/*
UserProfile.prototype={
  dispatch: PropTypes.func.isRequired,
  pageState: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  return {
    pageState: state
  }
}*/


export default UserProfile;