import React,  { Component } from 'react' ;
import { Link } from 'react-router-dom';
import { Button} from 'reactstrap';
import axios from 'axios';
import pic from '../img/plus.png';

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
                      totaluser:0,
                      totalbook:0,
                      totalevent:0 };
        
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
              this.setState({totalbook:response.data})
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

          axios.get('http://localhost:5000/routes/event/all')
          .then(response=>{
              this.setState({totalevent:response.data})
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
     /* style={{ backgroundColor: "#F2D7D5" }} */
    
        return (
      <div  >    
      <div className="card-deck">
          <div className="card text-center bg-info mb-3" style={{width:"18rem"}}>
            <div className="card-header"> {this.state.totaluser}</div>
             <div className="card-body">
              <p className="card-title"> Registered User</p>

            </div>
            </div> 
            
          <div className="card text-center bg-light mb-3" style={{width:"18rem"}}>
            <div className="card-header">{this.state.totalevent}</div>
             <div className="card-body">
              <p className="card-title"> Events </p>

            </div>
          </div> 
          <div className="card text-center bg-info mb-3" style={{width:"18rem"}}>
            <div className="card-header">{this.state.totalbook}</div>
             <div className="card-body">
              <p className="card-title">Total Registration for Events  </p>
            </div>
          </div> 
         </div> 
          <div>
            <Link to="/addevent">
                   <img src={pic} align="right" className="add-image" alt="Responsive image" /> 
            </Link> 
                    </div>
                    
            <table className="table table-info">
              <thead className="thead-info">
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