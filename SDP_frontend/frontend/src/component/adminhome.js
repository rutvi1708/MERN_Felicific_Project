import React,  { Component } from 'react' ;
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';
//import * as FaIcons from 'react-icons/fa';
 //import * as AiIcons from 'react-icons/ai';
 //import * as IoIcons from 'react-icons/io';
export default class EventList extends Component{
    render(){
        return (
            <div>
             <br/><br/><br/><br/> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
             <Link to="/admin/adminevent" >
             <Button size="lg"  color="dark">Events</Button>
             </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;
            
             <Link to="/admin/addevent"><Button size="lg" color="dark">Create Event</Button></Link><br/><br/><br/>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp; &nbsp;&nbsp;
              </div> 
              
        )
    }
}