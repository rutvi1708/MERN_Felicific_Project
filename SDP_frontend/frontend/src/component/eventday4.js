import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'reactstrap';
import img from  '../img/back2.jpg';

const Event = props => (
    <tr>
      <td>{props.event.eventname}</td>
      <td>{props.event.time}</td>
      <td>{props.event.location}</td>
      <td>{props.event.date.substring(0,10)}</td>
      <td>
      <Link to={"/details/"+props.event._id}>
      <Button  color="info">Details</Button>
      </Link>
      </td>
    </tr>
  )
export default class EventDay4 extends Component{
    constructor(props) {
        super(props);
    
       
        this.state = {events: []};
       
    }

    componentDidMount() {
        axios.get('http://localhost:5000/routes/event')
        
          .then(response => {
       
            this.setState({ events: response.data })
      
          })
          .catch((error) => {
            console.log(error);
          })
      }

      eventList() {
        return this.state.events.map(currentevent => {
          if(currentevent.day === 4)
          {
          return <Event event={currentevent} key={currentevent._id}/>;
          }
        })
      }
      render(){
        return (
            <div >
            <h1 style={{textAlign:"center",marginTop:"-30px"}}>Day 4 Events</h1>
            <div className="all-events mx-auto" style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap",marginTop:"40px",width:"70%"}}>
          
              {
                this.state.events.map(currentevent => {
                  if(currentevent.day === 4){
                    return  <div key={currentevent._id}className="main-card-div" style={{paddingBottom:"2rem"}}>
                                  <div className="card card-border" style={{width: "20rem"}}>
                                      <img className="card-img-top" src={currentevent.url} alt="Card image cap"/>
                                            <div className="card-body">
                                                <h4 className="card-title" style={{fontWeight:'bold'}}>{currentevent.eventname}</h4>
                                                <h6 className="card-text">Time : {currentevent.time}</h6>
                                                <h6 className="card-text">Location : {currentevent.location}</h6>
                                                <h6 className="card-text">Date :{currentevent.date.substring(0,10)}</h6>
                                                <div className="mx-auto " style={{marginTop:'20px',display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
                                                    <Link   to={"/details/"+currentevent._id}>
                                                          <Button type="button" className="btn btn-dark" color="info">Details</Button>
                                                    </Link>
                                                    
                                                </div>
                                            </div>    
                                  </div>
                            </div>
                  }
                })
              }
              </div>
          </div>   
        );
    }
}