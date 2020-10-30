import React,  { Component } from 'react' ;
import { Button } from 'reactstrap';
//import {browserHistory } from 'react-dom';
import {Link,useHistory} from 'react-router-dom';
import './event-list.css';


export default class EventList extends Component{
    
    render(){
        
        return (
            <div className="hero-image">
            <div className="container text-center d-flex align-items-center flex-column justify-content-center" id="cont-ind">
            <div className="row nunito " >
                <div className="row ml-2 mr-2" style={{border: '3px solid white',color:'white'}}>
                        <div className="col-12"><h1 id="f-heading">Felicific</h1></div>  
                        <div className="col-12"><p id="f-date">06 - 10 March 2021</p></div>
                        <div className="col-12">
                            <div className="container-flex text-center">
                                <div className="row f-button">
                                    <div className="col-12">
                                        <div className="row ">            
                                            <div className="col-md-1 col-0">&nbsp;</div>     
                                            <Link to ='/day1event'>               
                                            <div className="col-md-3 col-4 ml-0 ml-md-4"><button onclick={()=>this.props.history.push('/day1event')}>Day 1</button></div></Link>                      
                                            <div className="col-md-3 col-4"><button onclick="document.location.href='day2.html';">Day 2</button></div>
                                            <div className="col-md-3 col-4"><button onclick="document.location.href='day3.html';">Day 3</button></div>                                  
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div class="row mt-3">
                                            <div className="col-md-3 col-2">&nbsp;</div>
                                            <div className="col-md-3 col-4"><button onclick="document.location.href='day4.html';">Day 4</button></div>                              
                                            <div className="col-md-3 col-4"><button onclick="document.location.href='day5.html';">Day 5</button></div>                              
                                        </div>
                                    </div>                           
                                </div>
                            </div>      
                            </div> 
                            </div> 
                        </div>          
                        <div className="col-12 mt-4">
                            <p style={{fontSize: '1em',marginBottom:'0px'}}>Presented By</p>
                            <p style={{fontSize: '1.1em'}}>Department of IT Engineering</p>
                            <div className="logo-image"></div>
                            <p style={{fontSize: '1.7em'}}>Dharmsinh Desai University</p>
                        </div>
                    </div>
                    </div>
            /* <div 
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

        </div>     */
           
        );
    }
}