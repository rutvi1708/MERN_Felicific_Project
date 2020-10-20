import React,  { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button } from 'reactstrap';


const Event = props => (
   <tr>
      <td>{props.event.eventname}</td>
      <tr>{props.event.description}</tr>
      <tr>{props.event.contact_details}</tr>
      <tr>{props.event.amount}</tr>
      <tr>{props.event.req_participant}</tr>
     
      <tr>
      <Button  color="info">Register </Button>
      </tr>
    </tr>  
   
  )
export default class DetailPage extends Component{
    constructor(props) {
        super(props);
    
       
    }

    componentDidMount() {
        axios.get('http://localhost:5000/routes/event/'+this.props.match.params.id)
        
          .then(response => {
          
            this.setState({ event: response.data })
            return <Event />;
          
          })
          .catch((error) => {
            console.log(error);
          })
      }

  
    render(){
        return (
            <div >
         <h3>eventname</h3>   
            <table className="table  ">
              <thead className="table-info">
                <tr>
                   Event name 
                </tr>
                 <tr>
                     Description
                </tr> 
                <tr>
                    Contact Details
                </tr>
                <tr>
                    Rs. 
                </tr>

                <tr>
                    Required Participant
                 </tr>       
              </thead>
            
            </table>
          </div>   
        );
    }
}