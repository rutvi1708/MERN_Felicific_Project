import React,  { Component } from 'react' ;
import './contact.css';

export default class EventList extends Component{
    render(){
      return(
        <div className="hero-image">
        <div className="container text-center d-flex align-items-center flex-column justify-content-center" id="cont-ind">
        <div className="row nunito " >
            <div className="col-md-2 d-none d-sm-block">&nbsp;</div>
            <div  className="col-md-9 col-lg-8 col-12 pl-md-4 pr-md-4">
                <div className="row ml-2 mr-2" style={{'border': '3px solid white',color:'white',marginTop:'5rem'}}>             
                    <div className="col-12 mt-4">
                        <p style={{fontWeight:'800','fontSize':'1.7em','marginBottom':'0px'}}>Contact</p>
                        <p id="dce" className="mt-1 mt-md-5 mb-1 mb-md-5">Department of IT Engineering</p>
                        <div className="logo-image"></div>
                        <p style={{'fontSize': '1.7em'}}>Dharmsinh Desai University</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
      )
    } 
}