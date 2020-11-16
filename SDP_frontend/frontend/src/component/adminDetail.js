import React,  { Component } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'reactstrap';
import  { Redirect } from 'react-router-dom';
//import Form3 from './form3';
import img from '../img/back2.jpg'


  class Detailpage extends Component{
 
    constructor(props) {
        super(props);
     
   this.state={
      eventname:'',
      time:'',
      date: new Date(),
      location:'',
      contact_details:'',
      description:'',
      amount:'',
      url:'',
      req_participant:1,
       maxbook:0,
       day:0,
       totalbook:0
   };
  // this.rowCallback= this.rowCallback.bind(this);
      //  this.state = {events: []};
       
    }

    componentDidMount() {
        axios.get('http://localhost:5000/routes/event/'+this.props.match.params.id)
        
          .then(response => {
          
            this.setState({ 
               
              eventname: response.data.eventname,
              time: response.data.time,
              date: response.data.date,
              location : response.data.location,
              contact_details: response.data.contact_details,
              description: response.data.description,
              amount:response.data.amount,
              req_participant:response.data.req_participant,
              maxbook:response.data.maxbook,
              day:response.data.day,
              url:response.data.url
             })

            
          })
          .catch((error) => {
            console.log(error);
          })
       
      

      }
     countevent(){
     
      axios.get('http://localhost:5000/routes/bookevent/event/'+this.state.eventname)
    
      .then(response=>{
          this.setState({totalbook:response.data})
          console.log(this.state.totalbook)
      })
      .catch((error)=>{
          console.log(error);
      })
    }
 //  eventList() {
      //  return this.state.event{
   //  return <Event key={this.props._id}/>;
       //   }
       // })
    //  }
    render(){
    
    console.log(this.state.url);
    {this.countevent()}
        return (
         /* style={{ backgroundColor: "#F6DDCC"}} */
            
            <div>
            <div className="row">
              <div className="col mx-auto">
                  <img className="card-img-top" style={{padding:'40px'}} src={this.state.url} alt="Card image cap"/>
              </div>
              <div className="col" style={{color:"white"}}>
                    <h1>{this.state.eventname}</h1>
                    <br></br>
                    <div className="row" style={{textAlign:"center",marginLeft:'4px',color:"white" }}>
                        <h3 >Location : </h3>
                        <h5 style={{marginTop:"7px",marginLeft:'6px',color:"white"}}>{this.state.location}</h5>
                     </div>
                     <div className="row" style={{textAlign:"center",marginLeft:'4px',color:"white"}}>
                        <h3>Date : </h3>
                        <h5 style={{marginTop:"7px",marginLeft:'6px',color:"white"}}>{this.state.date.toString().substring(0,10)}</h5>
                     </div>
                     <div className="row" style={{textAlign:"center",marginLeft:'4px',color:"white"}}>
                        <h3 >Time : </h3>
                        <h5 style={{marginTop:"7px",marginLeft:'6px',color:"white"}}>{this.state.time}</h5>
                    </div>
                     <br/>
                    
                    <h3>Description</h3>
                    <h5 style={{marginBottom:'40px',color:"white"}}>{this.state.description}</h5>

                    <h3>Contact Details</h3>
                    <h5 style={{marginBottom:'40px',color:"white"}}>{this.state.contact_details}</h5>
                  
                    <div className="row" style={{textAlign:"center",marginLeft:'4px',color:"white"}}>
                        <h3>Amount:</h3>
                        <h5 style={{marginTop:"7px",marginLeft:'6px',color:"white"}}> {this.state.amount} ₹</h5>

                        <h3 style={{marginLeft:'50px',color:"white"}}>Required participants:</h3>
                        <h5 style={{marginTop:"7px",marginLeft:'6px',color:"white"}}>{this.state.req_participant}</h5>

                    </div>
                    <br/>
                    <div className="row" style={{textAlign:"center",marginLeft:'4px',color:"white"}}>

                        <h3>Maximum Registration:</h3>
                         <h5 style={{marginTop:"7px",marginLeft:'6px',color:"white"}}> {this.state.maxbook} </h5>

                        <h3 style={{marginLeft:'50px',color:"white"}}>Day:</h3>
                        <h5 style={{marginTop:"7px",marginLeft:'6px',color:"white"}}>{this.state.day}</h5>
                    </div>
                    
                    <div className="row" style={{textAlign:"center",marginLeft:'4px',color:"white"}}>
                    <h3>Total Registration:</h3>
                         <h5 style={{marginTop:"7px",marginLeft:'6px',color:"white"}}> {this.state.totalbook} </h5>
                    </div>
                    <div style={{marginTop:"20px"}} >
                        {/*<Button  type="button" className="btn btn-dark btn-lg" style={{width:"20%"}} >Booking Details </Button>*/}
                    </div>
              </div>
            </div>
          
            
          </div>  
       
        );
    }
  }
  export default Detailpage;