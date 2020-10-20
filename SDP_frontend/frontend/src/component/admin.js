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
      <td>{props.event.day}</td>
      <td>
      <Link to={"/editevent/"+props.event._id}>
      <Button  color="warning">EDIT</Button> 
      </Link>
       </td>
      <td>    
      <Button  color="danger" onClick={()=>{ props.deleteEvent(props.event._id) }} >DELETE</Button> 
      </td>
    </tr>
  )
export default class AdminEvent extends Component{
    constructor(props) {
        super(props);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.state = {events: []};
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

      eventList() {
        return this.state.events.map(currentevent => {
          return <Event event={currentevent} deleteEvent={this.deleteEvent} key={currentevent._id}/>;
        })
      }
     deleteEvent(id) {
        axios.delete('http://localhost:5000/routes/event/'+id)
          .then(res => console.log(res.data));
    
        this.setState({
          events: this.state.events.filter(el => el._id !== id)
        })
      }
    render(){
        return (
            <div>
            <h3> Events</h3>
            <table className="table">
              <thead className="thead-light">
                <tr>
              
                  <th>Event Name</th>
                  <th>Time</th>
                  <th>Location</th>
                  <th>Date</th>
                  <th>Day</th>
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