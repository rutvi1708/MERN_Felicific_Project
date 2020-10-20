import React,  { Component } from 'react' ;
import { Button } from 'reactstrap';
//import {browserHistory } from 'react-dom';
import {Link} from 'react-router-dom';


export default class EventList extends Component{
    
    render(){
        return (
         
            <body>
            <div 
            style={{
               
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)',     
          
            }}> 
             <br/><br/><br/><br/> &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;
             <Link to="/day1event" >
             <Button size="lg"  color="dark">Day 1</Button>
             </Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;
            
             <Link to="/day2event"><Button size="lg" color="dark">Day 2</Button></Link><br/><br/><br/>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               &nbsp;&nbsp; &nbsp;&nbsp;
               <Link to="/day3event"><Button size="lg" weight="150px"  color="dark">Day 3</Button></Link>{' '}<br/><br/><br/>
               &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Link to="/day4event"><Button size="lg" color="dark">Day 4</Button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
             &nbsp;&nbsp;&nbsp;
             <Link to="/day5event"><Button size="lg" color="dark">Day 5</Button></Link>

             </div>    
             </body>
           
        );
    }
}