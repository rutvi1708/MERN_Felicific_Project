import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../jquery-ui.css';
import './addevent.css';

export default class EditEvent extends Component {
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
    this.onChangeMaxbook=this.onChangeMaxbook.bind(this);
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
      maxbook:10,
      events: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/routes/event/'+this.props.match.params.id)
      .then(response => {
        this.setState({
          eventname: response.data.eventname,
          time: response.data.time,
          location:response.data.location,
          date: new Date(response.data.date),
          contact_details: response.data.contact_details,
          description: response.data.description,
          amount:response.data.amount,
          req_participant:response.data.req_participant,
          day:response.data.day,
          maxbook:response.data.maxbook
        
        })   
      })
      .catch(function (error) {
        console.log(error);
      })


      axios.get('http://localhost:5000/routes/event/')
      .then(response => {
        if (response.data.length > 0) {
          this.setState({
            events: response.data.map(event => event.eventname),
          })
        }
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
    location:( e.target.value).toUpperCase()
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
  onChangeMaxbook(e){
    this.setState({
      maxbook:e.target.value
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
       day:this.state.day,
       maxbook:this.state.maxbook
     
    }

    console.log(event);

    axios.post('http://localhost:5000/routes/event/update/'+this.props.match.params.id, event)
      .then(res => console.log(res.data));

    window.location = '/admin';
  }

  render() {
    return (

      <div>

      <div className="main-w3layouts-content">
        <div className="top-section">
           <h2 className="sub-hdng-agileits-w3layouts"> .</h2>  
           <p style={{color:"red"}}>.</p>
        </div>
        <div className="w3-agile-login-form">
          <form onSubmit={this.onSubmit}>
          
            <div className="top-fields-wthree">
              <div className="input-fields-w3ls">
                <input type="text" name="Name" placeholder="Event Name" required=""
                 value={this.state.eventname }
                 onChange={this.onChangeEventname}/>
              </div>
              <div className="input-fields-w3ls">
                <input type="text" name="Location" placeholder="Location" required="" 
                 value={this.state.location}
                 onChange={this.onChangeLocation}/>
              </div>
             
            </div>
            
            <div className="top-fields-wthree">
              <div className="input-fields-w3ls2" style={{color:"#dcdcdc"}}>
               Date : &nbsp;
               <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}   />
              </div>
            
              <div className="input-fields-w3ls" style={{color:"#dcdcdc"}} >
                Time : &nbsp;
                <input type="time" name="Name" placeholder="Event Time" required=""
                     value={this.state.time }
                     onChange={this.onChangeTime} />
              </div>
             </div>


             <div className="top-fields-wthree">
              <div className="input-fields-w3ls" style={{color:"#dcdcdc",fontfamily: 'Montserrat' }}>
                Day : &nbsp;
                <input type="Number"  name="Day" min="1" max="5"required="" 
                          value={this.state.day}
                          onChange={this.onChangeDay} />
              </div>
              <div className="input-fields-w3ls" style={{color:"#dcdcdc"}} >
                Amount : &nbsp;
                <input type="Number"  name="Amount" min="0" max="1000"required=""
                         value={this.state.amount}
                         onChange={this.onChangeAmount} />
              </div>
            </div>

            <div className="top-fields-wthree">
              <div className="input-fields-w3ls" style={{color:"#dcdcdc",fontfamily:'sans-serif'}}>
               Participant : &nbsp;
                <input type="Number" name="Participant" min="1" max="8" required=""
               value={this.state.req_participant}
               onChange={this.onChangeReq_participant}/>
              </div>
              <div className="input-fields-w3ls" style={{color:"#dcdcdc"}}>
                Max Booking : &nbsp;
                <input type="Number"  min="1" max="100" required="" 
                   value={this.state.maxbook}
                   onChange={this.onChangeMaxbook}/>  
             </div>
            </div>
            <br/>
            <div  style={{color:"#dcdcdc"}}>
             Description : &nbsp;  
            <textarea name="desc" placeholder="Description" required=""  
             value={this.state.description}
             onChange={this.onChangeDescription}></textarea>
             <br/>
             Contact Details : &nbsp;
            <textarea name="Contact" placeholder="Contact Details" required=""
                  value={this.state.contact_details}
                  onChange={this.onChangeContact_details}></textarea>
          </div>
            <br/>
            <br/>
            <div className="text-center">
            <input type="submit" className="btn btn-primary" style={{align:"center"}}value="EDIT EVENT" />
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