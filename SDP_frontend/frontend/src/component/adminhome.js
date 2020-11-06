import React,  { Component } from 'react' ;
import { Link } from 'react-router-dom';
import { Button} from 'reactstrap';
import axios from 'axios';
import pic from '../img/plus.png';
import eventpic from '../img/event4.jpg';
 const Event = props => (
    <tr>
      <td>{props.event.eventname}</td>
      <td>
      <Link to={"/adminDetail/"+props.event._id}>
      <Button  color="primary">DETAILS</Button> 
      </Link>
       </td>
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
export default class EventList extends Component{
    constructor(props) {
        super(props);
        this.deleteEvent = this.deleteEvent.bind(this);
        this.state = {events: [],
                      totalevent:0,
                      totaluser:0};
        
    }

    componentDidMount() {
        axios.get('http://localhost:5000/routes/event/')
          .then(response => {
            this.setState({ events: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
          axios.get('http://localhost:5000/routes/bookevent/totalevent')
          .then(response=>{
              this.setState({totalevent:response.data})
          })
          .catch((error)=>{
              console.log(error);
          })
          axios.get('http://localhost:5000/api/auth/totaluser')
          .then(response=>{
              this.setState({totaluser:response.data})
          })
          .catch((error)=>{
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
            <div style={{ backgroundColor: "#ABEBC6"}}>
                <h1>Total  Registration for Events: {this.state.totalevent} </h1>
                <br/>
                <h1>Total  Registered User: {this.state.totaluser} </h1>
                <div>
                  { /* <img src={eventpic} align="left" className="event-image" alt="event image" />  */}
            <Link to="/addevent">
                   <img src={pic} align="right" className="add-image" alt="Responsive image" /> 
            </Link> 
                    </div>
                    
            <table className="table">
              <thead className="thead-light">
                <tr>
              
                  <th>Event Name</th>
                 <th></th>
                  <th></th>
                 
                  <th></th>
                </tr>
              </thead>
              <tbody>
                { this.eventList() }
              </tbody>
            </table>
          </div>       
        )
    }
}