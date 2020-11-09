import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";
import pic from "../../img/ddulogo.png";
import "../userprofile.css";
export default class UserProfile extends Component {
  state = {
    events: null,
    eventsDetail: [],
    // events: [
    //   "5fa531fa44a7f47188766043",
    //   "5fa5337044a7f47188766044",
    //   "5fa5353544a7f47188766045",
    // ],
  };
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
          .get("http://localhost:5000/routes/event/" + event.id)
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
        <h1>Registered Events</h1>
        {data}
      </div>
    );
  }
  async componentDidMount() {
    await this.getEvents();
    await this.getEventDetails();
  }
  render() {
    return (
      <div className="container">
        <div className="main-body">
          {/*</div>
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
      /div>*/}

          <div className="row gutters-sm">
            <div className="col-md-4 mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex flex-column align-items-center text-center">
                    <img
                      src={pic}
                      alt="Admin"
                      className="rounded-circle"
                      width="150"
                    />
                    <div className="mt-3">
                      <h4>Rutvi</h4>

                      <button className="btn btn-primary">EDIT</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card mb-3">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">First Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Rutvi</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Last Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Khavadiya</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Branch</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">Computer</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Semester</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">7</div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Email</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">abc@gmail.com</div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Phone</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">97123 45382</div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">Student ID</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">17ITUOS107</div>
                  </div>

                  <hr />
                  <div className="row">
                    <div className="col-sm-3">
                      <h6 className="mb-0">College Name</h6>
                    </div>
                    <div className="col-sm-9 text-secondary">DDU</div>
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
              <div>{this.renderDetails()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
