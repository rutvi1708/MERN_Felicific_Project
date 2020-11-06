import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'reactstrap';
import pic from '../img/ddulogo.png';
import './userprofile.css';
export default class UserProfile extends Component{

    render(){
     
        return (
 <div class="container">
    <div class="main-body">
    
      { /*</div>
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
      /div>*/}
    
          <div class="row gutters-sm">
            <div class="col-md-4 mb-3">
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
             
           </div>
            <div class="col-md-8">
              <div class="card mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">First Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Rutvi
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Last Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                    Khavadiya
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Branch</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     Computer
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Semester</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     7
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      abc@gmail.com
                    </div>
                  </div>
                 
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                       97123 45382
                    </div>
                  </div>
             
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Student ID</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                         17ITUOS107
                    
                    </div>
                  </div>
                 
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">College Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                     DDU
                    </div>
                  </div>
                
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
            </div>
          </div>
        </div>
    </div>

        )
    
    }
}
