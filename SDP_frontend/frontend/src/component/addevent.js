import React,{useState, useEffect} from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import Back from "../../src/img/form-v9.jpg";
import '../jquery-ui.css';
import './addevent.css';

//import React,  { Component } from 'react';
//import {useHistory} from 'react-router-dom';
//import Event from '../../../../SDP_backend/routes/api/models/event.model';
/*
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
   // this.onChangeEventImage = this.onChangeEventImage.bind(this);
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
     eventImage:null,
      url:'',
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
/*
  onChangeEventImage(e){
    this.setState({
    eventImage:e.target.files[0]
   });
  }
 
  postImage() {
    const data= new FormData()
    data.append("file",this.state.eventImage)
    data.append('folder','rutvi_event')
    data.append("upload_preset","eventImages")
    data.append("cloud_name","rutvi178")
 
    axios.post(" https://api.cloudinary.com/v1_1/rutvi178/image/upload",data)
          .then(res=>{
              console.log(res.data.url)
            this.setState({url: res.data.url});
            console.log(this.state.url);
          })
          .catch(err=>console.log(err))


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
     // url:this.state.url
    }
        //  console.log(event.url);
        axios.post('http://localhost:5000/routes/event/add', event)
        .then(res => console.log(res.data))
        
        window.location = '/admin';
  }
       
  //}

  */
 
function AddEvent() {

  const[eventname,setEventname]=useState('');
  const[time,setTime]=useState('');
  const[location,setLocation]=useState('');
  const[date,setDate]=useState('');
  const[contact_details,setContactDetails]=useState('');
  const[description ,setDescription]=useState('');
  const[amount,setAmount]=useState('');
  const[req_participant,setReq_participant]=useState('');
  const[day,setDay]=useState('');
  const[url,setUrl]=useState('');
  const[maxbook,setMaxbook]=useState('');
  const[eventImage,setEventImage]=useState('');
//  const history=useHistory()

  useEffect(() => {

    if(url){  const config={
          headers:{
              "Content-Type": "application/json"
          }
      }
  const databody = JSON.stringify({eventname,time, location,date,contact_details,description,amount,req_participant,day,maxbook,url:url})
  console.log(databody)
  
  axios.post('http://localhost:5000/routes/event/add',databody,config)
        .then(res=>{
            if(res){
              console.log("done")
              console.log(res.data)
            //  history.push('/add')
            }
        })
        .catch(err=>{
                  if(err){
                      console.log(err)
                      alert('Error in Adding Accessories !')
                  }
              })
              window.location = '/admin';
          }
  }, [url])

  const PostData = ()=>{

      if (!eventname|| !time||!location|| !date|| !description|| !contact_details|| !amount|| !req_participant || !day  ||!maxbook|| !eventImage ){
          console.log("Enter all the fileds")
          return
      }

      const data= new FormData()
      data.append('file',eventImage)
      data.append('upload_preset','eventImages')
      data.append('folder','rutvi_event')
      data.append("cloud_name","rutvi178")
 
 
    axios.post("https://api.cloudinary.com/v1_1/rutvi178/image/upload",data)
          .then(res=>{
              console.log(res.data.url)
                setUrl(res.data.url)})
            .catch(err=>console.log(err))
      
    
  } 

    return (
      /*style={{backgroundColor:"#D5D8DC "}} */
<div >
      <div className="main-w3layouts-content">
        <div className="top-section">
           <h2 className="sub-hdng-agileits-w3layouts"> NEW EVENT</h2>  
           <h5>Let's Plan...</h5>
        </div>
        <div className="w3-agile-login-form">
          <form>
          
            <div className="top-fields-wthree">
           
              <div className="input-fields-w3ls" style={{color:"black"}} >
                Event Name : &nbsp;
                <input type="text" name="Name"  required=""
                  value={eventname} onChange={e=>setEventname((e.target.value).toUpperCase()) }/>
                </div>  
          
                <div className="input-fields-w3ls" style={{color:"black"}} >
                Location : &nbsp;
                <input type="text" name="Location" required="" 
                value={location}
                 onChange={e=>setLocation((e.target.value).toUpperCase())}/>
              </div>
             
            </div>
            
            <div className="top-fields-wthree">
              <div className="input-fields-w3ls2" style={{color:"#000000"}}>
               Date : &nbsp;
               <DatePicker
             selected={date}
             onChange={date=> setDate(date)}
            />
              </div>
            
              <div className="input-fields-w3ls" style={{color:"black"}} >
                Time : &nbsp;
                <input type="time" name="Name" placeholder="Event Time" required=""
                  onChange={e=>setTime(e.target.value)} />
              </div>
             </div>


             <div className="top-fields-wthree">
              <div className="input-fields-w3ls" style={{color:"#000",fontfamily: 'Montserrat' }}>
                Day : &nbsp;
                <input type="Number"  name="Day" min="1" max="5"required="" 
                   onChange={e=>setDay(e.target.value)} />
              </div>
              <div className="input-fields-w3ls" style={{color:"#000"}} >
                Amount : &nbsp;
                <input type="Number"  name="Amount" min="0" max="1000"required=""
                    onChange={e=>setAmount(e.target.value)} />
              </div>
            </div>

            <div className="top-fields-wthree">
              <div className="input-fields-w3ls" style={{color:"#000",fontfamily:'sans-serif'}}>
               Participant : &nbsp;
                <input type="Number" name="Participant" min="1" max="8" required=""
                 onChange={e=>setReq_participant(e.target.value)} />
              </div>
              <div className="input-fields-w3ls" style={{color:"#000000"}}>
                Max Booking : &nbsp;
                <input type="Number"  min="1" max="100" required="" 
                    onChange={e=>setMaxbook(e.target.value)} />  
             </div>
            </div>
          
            <textarea name="desc" placeholder="Description" required=""  
            onChange={e=>setDescription(e.target.value)}></textarea>
            <textarea name="Contact" placeholder="Contact Details" required=""
              onChange={e=>setContactDetails(e.target.value)} ></textarea>
        
            <input  type="file" style={{color:"black"}}  onChange={e=>setEventImage(e.target.files[0])}/>
            <br/>
            <br/>
            <div className="text-center">
            <input type="button" className="btn btn-primary" style={{align:"center"}}value="ADD EVENT"  onClick={()=>PostData()}/>
            </div>
          </form>
        </div>
      </div>
</div>
  
 
  /*  <h3>Create New Event</h3>
      <form >
        <div className="form-group"> 
          <label>   Event Name : </label>  

             <input  type="String"
              required
              className="form-control"
             value={eventname} onChange={e=>setEventname((e.target.value).toUpperCase())}
        //   value={this.state.eventname}
          // onChange={this.onChangeEventname}
              />
        </div>
      
        <div className="form-group">
          <label>Time : </label>
          <input  type="time"
              required
              className="form-control"
             onChange={e=>setTime(e.target.value)}
       // value={this.state.time }
        //onChange={this.onChangeTime}

              />
        </div>
        <div className="form-group"> 
          <label>Location : </label>
          <input  type="text"
              required
              className="form-control"
            onChange={e=>setLocation(e.target.value)}
          // value={this.state.location}
          // onChange={this.onChangeLocation}
              />
        </div>
        <div className="form-group">
          <label>Date : </label>
          <div>
            <DatePicker
             selected={date}
             onChange={date=> setDate(date)}
            />
          </div>
        </div>

        <div className="form-group"> 
          <label>Contact Details : </label>
          <textarea  type="textarea"
              required
              className="form-control"
            onChange={e=>setContactDetails(e.target.value)}
          // value={this.state.contact_details}
            //  onChange={this.onChangeContact_details}
              />
        </div>
        <div className="form-group"> 
          <label>Description : </label>
          <textarea  type="textarea"
              required
              className="form-control"
             onChange={e=>setDescription(e.target.value)}
          // value={this.state.description}
          // onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>Amount : </label>
          <input 
              type="number" 
              className="form-control"
              min="0"
            onChange={e=>setAmount(e.target.value)}
            //  value={this.state.amount}
             // onChange={this.onChangeAmount}
              />
        </div>

        <div className="form-group">
          <label>Required Participant : </label>
          <input 
              type="number" 
              className="form-control"
              min="1"
              max="8"
             onChange={e=>setReq_participant(e.target.value)}
            // value={this.state.req_participant}
            // onChange={this.onChangeReq_participant}
              />
        </div>

        <div className="form-group">
          <label>Day : </label>
          <input 
              type="number" 
              className="form-control"
              min="1"
              max="5"
         
            onChange={e=>setDay(e.target.value)}    // value={this.state.day}
            // onChange={this.onChangeDay}
              />
        </div>
        <div className="form-group">
          <label>Max Booking :</label>
          <input 
              type="number" 
              className="form-control"      
             onChange={e=>setMaxbook(e.target.value)}
            // value={this.state.day}
            // onChange={this.onChangeDay}
              />
            </div>  
       <div className="form-group">
          <input  type="file"  className="form-control"  onChange={e=>setEventImage(e.target.files[0])}/>
        </div>
        
       <div className="form-group" style={{margin:'10px 30px'}}>
          <button  size="lg" type="button" className="button" value="Create Event" className="btn btn-primary"
          onClick={()=>PostData()} />
        </div>
     </form>
</div>
  */
    )
  }
  export default AddEvent;
