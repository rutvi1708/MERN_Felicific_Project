import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.onChangeEventname = this.onChangeEventname.bind(this);
    this.onChangeTime = this.onChangeTime.bind(this);
    this.onChangeLocation = this.onChangeLocation.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onChangeContact_details = this.onChangeContact_details.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
    this.onChangeReq_participant = this.onChangeReq_participant.bind(this);
    this.onChangeDay = this.onChangeDay.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      eventname: '',
      time: '',
      location: '',
      date: new Date(),
      contact_details:'',
      description:'',
      amount:0,
      req_participant:1,
      day:'',
      error: false,
      errorMessage: "",
     events: [],
     filterEvents: []
    }
  }
  componentDidMount() {
    axios.get('http://localhost:5000/routes/event/')
      .then(response => {
        this.setState({ events: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }




  onChangeEventname(e) {
    this.setState({
      eventname: (e.target.value).toUpperCase()
      
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    });
  }

  onChangeTime(e) {
    this.setState({
      time:  e.target.value
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date
    });
  }

  onChangeLocation(e) {
    this.setState({
    location: (e.target.value).toUpperCase()
    });
  }

  onChangeContact_details(e) {
    this.setState({
      contact_details: e.target.value
    });
  }


  onChangeAmount(e) {
    this.setState({
    amount: e.target.value
    });
  }

  onChangeReq_participant(e) {
    this.setState({
      req_participant: e.target.value
    });
  }

  onChangeDay(e) {
    this.setState({
      day:  e.target.value
    });
  }
  onSubmit(e) {
    e.preventDefault();

    const event = {
      eventname: this.state.eventname,
      time  : this.state.time,
      location: this.state.location,
      date:this.state.date,
      contact_details: this.state.contact_details,
      description: this.state.description,
      amount  : this.state.amount,
      req_participant: this.state.req_participant,
      day:this.state.day
    }

// const fil=this.state.events.filter(el => el.date === event.date && el.time ===event.time && el.location === event.location)
  //   console.log(fil);
  //  if (fil!==null) {
  //  this.setState({
   //   error: true,
   //   errorMessage: "Event already exist"
       
  //  });
  //}
 // else
 // {
          console.log(event);
        axios.post('http://localhost:5000/routes/event/add', event)
        .then(res => console.log(res.data))
       
  //}
  window.location = '/admin';
  }
  render() {
    return (
    <div>
      <h3>Create New Event</h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>   Event Name : </label>  

             <input  type="String"
              required
              className="form-control"
              value={this.state.eventname}
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
          <input type="submit"  value="Create Event" className="btn btn-primary" />
        
        </div>
      </form>

    </div>
    )
  }
}