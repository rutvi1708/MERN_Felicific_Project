import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'reactstrap';


const Event = props => (
    <tr>
      <td>{props.event.eventname}</td>
      <td>{props.event.time}</td>
      <td>{props.event.location}</td>
      <td>{props.event.date.substring(0,10)}</td>
      <td>
      <Button   color="info">Details</Button>
      </td>
    </tr>
  )
export default class EventDay1 extends Component{
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
            <div>
            <h3>Day 4 Events</h3>
            <table className="table ">
              <thead className="table-danger">
                <tr>
                  
                  <th>Event Name</th>
                  <th>Time</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th></th>   
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { this.eventList() }
              </tbody>
            </table>
          </div>   
        );
    }
}